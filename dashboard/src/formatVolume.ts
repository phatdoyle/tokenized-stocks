const DECIMALS = 18;
const DIVISOR = BigInt(10 ** DECIMALS);

/**
 * Normalize raw token amount (wei/smallest unit) to 18-decimal human-readable string.
 * Accepts number (treated as already normalized for display) or string/bigint (raw wei).
 */
export function formatVolume18(raw: string | number | bigint): string {
  if (typeof raw === "number") {
    if (!Number.isFinite(raw)) return "0";
    return raw.toLocaleString("en-US", { maximumFractionDigits: 18, useGrouping: false });
  }
  const s = String(raw).trim();
  if (/[eE]/.test(s)) {
    const num = parseFloat(s);
    if (!Number.isFinite(num)) return "0";
    return num.toLocaleString("en-US", { maximumFractionDigits: 18, useGrouping: false });
  }
  const n = BigInt(s);
  const intPart = n / DIVISOR;
  const rem = n % DIVISOR;
  const frac = rem.toString().padStart(DECIMALS, "0").replace(/0+$/, "") || "0";
  const decPart = frac === "0" ? "" : "." + frac;
  return `${intPart}${decPart}`;
}

/**
 * Normalize to number for charts (may lose precision for very large values).
 */
export function volume18ToNumber(raw: string | number | bigint): number {
  const s = String(raw).trim();
  if (/[eE]/.test(s)) return parseFloat(s) / 1e18;
  return Number(BigInt(s)) / 1e18;
}
