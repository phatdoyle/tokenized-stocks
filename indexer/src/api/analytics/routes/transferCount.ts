import { db } from "ponder:api";
import { eq, and, gte, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, parseInterval, serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/transfer-count", async (c) => {
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const interval = parseInterval(c.req.query("interval") || "1d");
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "7d");
    const contractAddress = c.req.query("contractAddress");
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const table = getTransferTable(protocol);
    const tsCol = table.blockTimestamp;
    const contractCol = table.contractAddress;

    const whereConditions = [gte(tsCol, BigInt(fromTs))];
    if (contractAddress) {
      whereConditions.push(eq(contractCol, contractAddress as `0x${string}`));
    }
    const bucketExpr = sql<string>`date_trunc(${interval}, to_timestamp(${tsCol}::bigint))`;

    const rows = await db
      .select({
        contractAddress: contractCol,
        tokenName: protocol === "ondo" ? (table as typeof ONDO_TRANSFER).tokenName : sql<string>`''`.as("token_name"),
        bucket: bucketExpr.as("bucket"),
        transferCount: count().as("transfer_count"),
      })
      .from(table)
      .where(and(...whereConditions))
      .groupBy(contractCol, bucketExpr, ...(protocol === "ondo" ? [(table as typeof ONDO_TRANSFER).tokenName] : []));

    return c.json({
      protocol,
      interval,
      byStock: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
