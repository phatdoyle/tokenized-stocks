import { db } from "ponder:api";
import { eq, and, gte, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, serializeRow, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/tokens/:contractAddress/stats", async (c) => {
    const contractAddress = c.req.param("contractAddress") as `0x${string}`;
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "7d");
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
        uniqueSenders: count(sql`DISTINCT ${table.from}`).as("unique_senders"),
        uniqueReceivers: count(sql`DISTINCT ${table.to}`).as("unique_receivers"),
      })
      .from(table)
      .where(and(eq(table.contractAddress, contractAddress), gte(table.blockTimestamp, BigInt(fromTs))))
      .groupBy(...groupByCols);

    if (rows.length === 0) {
      return c.json({ error: "No data for this token", contractAddress }, 404);
    }
    return c.json({
      protocol,
      stock: serializeRow(rows[0] as Record<string, unknown>),
    });
  });
}
