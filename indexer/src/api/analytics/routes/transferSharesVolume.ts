import { db } from "ponder:api";
import { eq, and, gte, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, parseInterval, serializeRows } from "../helpers.js";
import { XSTOCK_TRANSFER_SHARES } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/transfer-shares/volume", async (c) => {
    const interval = parseInterval(c.req.query("interval") || "1d");
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "7d");
    const contractAddress = c.req.query("contractAddress");
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const table = XSTOCK_TRANSFER_SHARES;
    const tsCol = table.blockTimestamp;
    const bucketExpr = sql<string>`date_trunc(${interval}, to_timestamp(${tsCol}::bigint))`;
    const whereConditions = [gte(tsCol, BigInt(fromTs))];
    if (contractAddress) {
      whereConditions.push(eq(table.contractAddress, contractAddress as `0x${string}`));
    }

    const rows = await db
      .select({
        contractAddress: table.contractAddress,
        bucket: bucketExpr.as("bucket"),
        volume: sum(table.value).as("volume"),
        transferCount: count().as("transfer_count"),
      })
      .from(table)
      .where(and(...whereConditions))
      .groupBy(table.contractAddress, bucketExpr);
    return c.json({
      protocol: "xstock",
      event: "TransferShares",
      interval,
      byStock: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
