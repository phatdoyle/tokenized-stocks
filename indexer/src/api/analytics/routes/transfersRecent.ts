import { db } from "ponder:api";
import { eq, desc } from "ponder";
import type { Hono } from "hono";
import { serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/transfers/recent", async (c) => {
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const limit = Math.min(Number(c.req.query("limit")) || 50, 100);
    const contractAddress = c.req.query("contractAddress");

    const table = getTransferTable(protocol);

    let query = db
      .select()
      .from(table)
      .orderBy(desc(table.blockTimestamp), desc(table.logIndex))
      .limit(limit);

    if (contractAddress) {
      query = query.where(eq(table.contractAddress, contractAddress as `0x${string}`)) as typeof query;
    }

    const rows = await query;
    return c.json({
      protocol,
      transfers: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
