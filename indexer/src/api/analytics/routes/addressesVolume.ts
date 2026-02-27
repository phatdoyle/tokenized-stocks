import { db } from "ponder:api";
import { eq, and, gte, desc, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/addresses/volume", async (c) => {
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const by = c.req.query("by") || "sent";
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "30d");
    const limit = Math.min(Number(c.req.query("limit")) || 50, 100);
    const contractAddress = c.req.query("contractAddress");
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const table = getTransferTable(protocol);
    const addressCol = by === "received" ? table.to : table.from;
    const whereConditions = [gte(table.blockTimestamp, BigInt(fromTs))];
    if (contractAddress) {
      whereConditions.push(eq(table.contractAddress, contractAddress as `0x${string}`));
    }
    const groupByCols = protocol === "ondo"
      ? ([addressCol, table.contractAddress, (table as typeof ONDO_TRANSFER).tokenName] as const)
      : ([addressCol, table.contractAddress] as const);

    const rows = await db
      .select({
        address: addressCol,
        contractAddress: table.contractAddress,
        tokenName: protocol === "ondo" ? (table as typeof ONDO_TRANSFER).tokenName : sql<string>`''`.as("token_name"),
        volume: sum(table.value).as("volume"),
        transferCount: count().as("transfer_count"),
      })
      .from(table)
      .where(and(...whereConditions))
      .groupBy(...groupByCols)
      .orderBy(desc(sql`sum(${table.value})`))
      .limit(limit);

    return c.json({
      protocol,
      by,
      period: c.req.query("period") || "30d",
      byStock: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
