import { executeSQLQuery } from "../../../executeSqlQuery";

/** Escape a string for safe use in a SQL string literal (single-quote escape). */
function escapeLiteral(s: string): string {
  return `'${s.replace(/'/g, "''")}'`;
}

/** Validate and normalize Ethereum address for SQL. */
function normalizeAddress(addr: string): string | null {
  const trimmed = addr.trim().toLowerCase();
  const hex = trimmed.startsWith("0x") ? trimmed.slice(2) : trimmed;
  if (!/^[0-9a-f]{40}$/i.test(hex)) return null;
  return "0x" + hex.toLowerCase();
}

/** Validate protocol is 'ondo', 'xstock', or 'securitize'. */
function validateProtocol(
  p: string
): "ondo" | "xstock" | "securitize" | null {
  const lower = p.toLowerCase();
  if (lower === "ondo" || lower === "xstock" || lower === "securitize")
    return lower;
  return null;
}

/** Validate ticker format (alphanumeric, dots, hyphens). */
function validateTicker(ticker: string): boolean {
  return /^[A-Z0-9.-]+$/i.test(ticker.trim());
}

export interface HolderBalanceRow {
  address: string;
  ticker: string;
  contract_address: string;
  close_price: string | null;
  balance: string | null;
  usd_balance: string | null;
  protocol: string;
}

export interface GetHolderBalancesParams {
  ticker?: string;
  address?: string;
  protocol?: "ondo" | "xstock" | "securitize";
}

function buildQuery(params: GetHolderBalancesParams): string {
  const conditions: string[] = [];

  if (params.ticker && validateTicker(params.ticker)) {
    conditions.push(`ticker = ${escapeLiteral(params.ticker.toUpperCase())}`);
  }
  if (params.address) {
    const norm = normalizeAddress(params.address);
    if (norm) {
      conditions.push(`address = ${escapeLiteral(norm)}`);
    }
  }
  const proto = params.protocol ? validateProtocol(params.protocol) : null;
  if (proto) {
    conditions.push(`protocol = ${escapeLiteral(proto)}`);
  }

  const whereClause =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

  return `
WITH prices AS (
  SELECT
    a.*,
    to_timestamp(bar_timestamp / 1000.0)::date,
    b.share_class_shares_outstanding,
    (a.close_price * b.share_class_shares_outstanding) AS total_marketcap
  FROM daily_stock_summary a
  LEFT JOIN ticker_reference b ON a.ticker = b.ticker
  WHERE bar_timestamp = (SELECT max(bar_timestamp) FROM daily_stock_summary)
    AND share_class_shares_outstanding IS NOT NULL
),
xstocks_tickers AS (
  SELECT
    new_token AS contract_address,
    left(symbol, length(symbol) - 1) AS stock_ticker
  FROM xstock_deployed
),
ondo_balances AS (
  SELECT address, a.ticker, contract_address, close_price, sum(amount) AS balance
  FROM (
    SELECT
      "to" AS address,
      stock_ticker AS ticker,
      a.contract_address,
      sum(value) / power(10, 18) AS amount
    FROM ondo_transfer a
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT
      "from" AS address,
      stock_ticker AS ticker,
      a.contract_address,
      -sum(value) / power(10, 18) AS amount
    FROM ondo_transfer a
    GROUP BY 1, 2, 3
  ) a
  LEFT JOIN prices b ON a.ticker = b.ticker
  WHERE address != '0x0000000000000000000000000000000000000000'
    AND address != '0x5f7a4c11bde4f218f0025ef444c369d838ffa2ad'
  GROUP BY 1, 2, 3, 4
),
xstock_balances AS (
  SELECT address, a.ticker, contract_address, close_price, sum(amount) AS balance
  FROM (
    SELECT
      "to" AS address,
      stock_ticker AS ticker,
      a.contract_address,
      sum(value) / power(10, 18) AS amount
    FROM xstock_transfer a
    LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT
      "from" AS address,
      stock_ticker AS ticker,
      a.contract_address,
      -sum(value) / power(10, 18) AS amount
    FROM xstock_transfer a
    LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
    GROUP BY 1, 2, 3
  ) a
  LEFT JOIN prices b ON a.ticker = b.ticker
  WHERE address != '0x0000000000000000000000000000000000000000'
    AND address != '0x5f7a4c11bde4f218f0025ef444c369d838ffa2ad'
  GROUP BY 1, 2, 3, 4
),
exod_prices AS (
  SELECT
    a.*,
    to_timestamp(bar_timestamp / 1000.0)::date
  FROM daily_stock_summary a
  WHERE bar_timestamp = (SELECT max(bar_timestamp) FROM daily_stock_summary WHERE ticker = 'EXOD')
    AND ticker = 'EXOD'
),
exod_balances AS (
  SELECT
    address,
    'EXOD' AS ticker,
    '213345970' AS contract_address,
    (SELECT close_price FROM exod_prices) AS close_price,
    amount / power(10, 8) AS balance,
    (amount / power(10, 8)) * (SELECT close_price FROM exod_prices) AS usd_balance,
    'securitize' AS protocol
  FROM algorand_asset_balances
  WHERE amount > 0
),
final_data AS (
  SELECT
    a.*,
    (balance * close_price) AS usd_balance,
    'ondo' AS protocol
  FROM ondo_balances a
  WHERE balance > 1 AND close_price IS NOT NULL
  UNION ALL
  SELECT
    a.*,
    balance * close_price AS usd_balance,
    'xstock' AS protocol
  FROM xstock_balances a
  WHERE balance > 1
  UNION ALL
  SELECT *
  FROM exod_balances
)
SELECT * FROM final_data
${whereClause}
ORDER BY usd_balance DESC NULLS LAST
`;
}

export async function getHolderBalances(
  params: GetHolderBalancesParams = {}
): Promise<HolderBalanceRow[]> {
  const query = buildQuery(params);
  const rows = await executeSQLQuery(query);
  return (rows ?? []).map((r: Record<string, unknown>) => ({
    address: r.address as string,
    ticker: r.ticker as string,
    contract_address: r.contract_address as string,
    close_price: r.close_price != null ? String(r.close_price) : null,
    balance: r.balance != null ? String(r.balance) : null,
    usd_balance: r.usd_balance != null ? String(r.usd_balance) : null,
    protocol: r.protocol as string,
  }));
}
