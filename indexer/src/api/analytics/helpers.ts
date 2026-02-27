/**
 * Parse period query param (e.g. "24h", "7d", "30d") into seconds from now for filtering.
 */
export function parsePeriodSeconds(period: string): number {
  const match = period?.match(/^(\d+)(h|d)$/i);
  if (!match || !match[1] || !match[2]) return 7 * 24 * 60 * 60; // default 7d
  const n = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();
  if (unit === "h") return n * 60 * 60;
  return n * 24 * 60 * 60;
}

/**
 * Interval for time-series: 1h, 1d supported; maps to PostgreSQL date_trunc.
 */
export function parseInterval(interval: string): "hour" | "day" {
  if (interval === "1h" || interval === "hour") return "hour";
  return "day";
}

/**
 * Serialize a row for JSON: bigint -> string so JSON.stringify doesn't throw.
 */
export function serializeRow<T extends Record<string, unknown>>(row: T): T {
  const out = { ...row };
  for (const k of Object.keys(out)) {
    if (typeof (out as Record<string, unknown>)[k] === "bigint") {
      (out as Record<string, unknown>)[k] = String((out as Record<string, unknown>)[k]);
    }
  }
  return out;
}

export function serializeRows<T extends Record<string, unknown>>(rows: T[]): T[] {
  return rows.map(serializeRow);
}

export type Protocol = "ondo" | "xstock";
