/**
 * Fetches stock aggregate data from the API with retry and exponential backoff
 * for rate limits (429), server errors (5xx), and transient failures.
 */

const BASE_URL =
  "https://api.massive.com/v2/aggs/grouped/locale/us/market/stocks";

const MAX_RETRIES = 5;
const BASE_DELAY_MS = 1000;
const REQUEST_TIMEOUT_MS = 30000;

export interface ApiResult {
  T: string;
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
}

export interface MappedRow {
  ticker: string | undefined;
  close_price: number | undefined;
  high: number | undefined;
  low: number | undefined;
  num_transactions: number | undefined;
  open: number | undefined;
  timestamp: number | undefined;
  volume: number | undefined;
  volume_weighted_price: number | undefined;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || (status >= 500 && status < 600);
}

function parseRetryAfter(res: Response): number | null {
  const value = res.headers.get("Retry-After");
  if (!value) return null;
  const sec = parseInt(value, 10);
  if (!isNaN(sec)) return sec * 1000;
  const date = new Date(value).getTime();
  if (!isNaN(date)) return Math.max(0, date - Date.now());
  return null;
}

export async function fetchStockData(
  date: string,
  apiKey: string
): Promise<ApiResult[]> {
  const url = `${BASE_URL}/${date}?adjusted=true&apiKey=${apiKey}`;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });

      if (res.ok) {
        const data = (await res.json()) as { results?: ApiResult[] };
        return data.results ?? [];
      }

      if (attempt < MAX_RETRIES && isRetryableStatus(res.status)) {
        const retryAfter = res.status === 429 ? parseRetryAfter(res) : null;
        // 429 = rate limit: wait full minute if no Retry-After (4 req/min)
        const delay =
          retryAfter ??
          (res.status === 429 ? 60_000 : Math.min(BASE_DELAY_MS * Math.pow(2, attempt), 60_000));
        console.warn(
          `[fetch] HTTP ${res.status} for ${date}, retry ${attempt + 1}/${MAX_RETRIES} in ${(delay / 1000).toFixed(1)}s`
        );
        await sleep(delay);
        continue;
      }

      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      // Retry on timeout (AbortError), network errors, or server/rate-limit errors
      const isRetryable =
        lastError.name === "AbortError" ||
        lastError.message.startsWith("HTTP 429") ||
        lastError.message.startsWith("HTTP 5") ||
        lastError.message.includes("fetch") ||
        lastError.message.includes("ECONNREFUSED") ||
        lastError.message.includes("ETIMEDOUT");

      if (attempt < MAX_RETRIES && isRetryable) {
        const delay = Math.min(BASE_DELAY_MS * Math.pow(2, attempt), 60000);
        console.warn(
          `[fetch] ${lastError.message} for ${date}, retry ${attempt + 1}/${MAX_RETRIES} in ${(delay / 1000).toFixed(1)}s`
        );
        await sleep(delay);
        continue;
      }

      throw lastError;
    }
  }

  throw lastError ?? new Error("Fetch failed after retries");
}

export function mapRow(stock: ApiResult): MappedRow {
  return {
    ticker: stock.T,
    close_price: stock.c,
    high: stock.h,
    low: stock.l,
    num_transactions: stock.n,
    open: stock.o,
    timestamp: stock.t,
    volume: stock.v,
    volume_weighted_price: stock.vw,
  };
}
