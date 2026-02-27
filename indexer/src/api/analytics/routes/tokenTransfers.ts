import { db } from "ponder:api";
import { eq, and, desc, sql } from "ponder";
import type { Hono } from "hono";
import { serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/tokens/:contractAddress/transfers", async (c) => {
    const contractAddress = c.req.param("contractAddress") as `0x${string}`;
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const limit = Math.min(Number(c.req.query("limit")) || 50, 100);
    const cursor = c.req.query("cursor");

    const table = getTransferTable(protocol);

    const whereConditions = [eq(table.contractAddress, contractAddress)];
    if (cursor) {
      const idx = cursor.indexOf("-");
      const ts = idx > 0 ? cursor.slice(0, idx) : "";
      const id = idx > 0 ? cursor.slice(idx + 1) : "";
      if (ts && id) {
        whereConditions.push(sql`(${table.blockTimestamp}, ${table.id}) < (${BigInt(ts)}, ${id})`);
      }
    }

    const rows = await db
      .select()
      .from(table)
      .where(and(...whereConditions))
      .orderBy(desc(table.blockTimestamp), desc(table.logIndex))
      .limit(limit + 1);
    const hasMore = rows.length > limit;
    const items = hasMore ? rows.slice(0, limit) : rows;
    const nextCursor =
      items.length > 0
        ? `${(items[items.length - 1] as { blockTimestamp: bigint; id: string }).blockTimestamp}-${(items[items.length - 1] as { id: string }).id}`
        : null;

    return c.json({
      protocol,
      contractAddress,
      transfers: serializeRows(items as Record<string, unknown>[]),
      nextCursor: hasMore ? nextCursor : null,
    });
  });
}
