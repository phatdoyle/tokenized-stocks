import { db } from "ponder:api";
import { gte, desc, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/tokens/volume", async (c) => {
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "7d");
    const limit = Math.min(Number(c.req.query("limit")) || 20, 100);
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const table = getTransferTable(protocol);
    const groupByCols = protocol === "ondo"
      ? [table.contractAddress, (table as typeof ONDO_TRANSFER).tokenName]
      : [table.contractAddress];

    const rows = await db
      .select({
        contractAddress: table.contractAddress,
        tokenName: protocol === "ondo" ? (table as typeof ONDO_TRANSFER).tokenName : sql<string>`''`.as("token_name"),
        volume: sum(table.value).as("volume"),
        transferCount: count().as("transfer_count"),
      })
      .from(table)
      .where(gte(table.blockTimestamp, BigInt(fromTs)))
      .groupBy(...groupByCols)
      .orderBy(desc(sql`sum(${table.value})`))
      .limit(limit);

    return c.json({
      protocol,
      period: c.req.query("period") || "7d",
      byStock: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
