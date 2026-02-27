import { db } from "ponder:api";
import { eq, desc } from "ponder";
import type { Hono } from "hono";
import { serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/tokens/:contractAddress/transfers/recent", async (c) => {
    const contractAddress = c.req.param("contractAddress") as `0x${string}`;
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const limit = Math.min(Number(c.req.query("limit")) || 20, 100);

    const table = getTransferTable(protocol);

    const rows = await db
      .select()
      .from(table)
      .where(eq(table.contractAddress, contractAddress))
      .orderBy(desc(table.blockTimestamp), desc(table.logIndex))
      .limit(limit);

    return c.json({
      protocol,
      contractAddress,
      transfers: serializeRows(rows as Record<string, unknown>[]),
    });
  });
}
