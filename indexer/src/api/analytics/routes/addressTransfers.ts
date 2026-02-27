import { db } from "ponder:api";
import { eq, and, desc, sql } from "ponder";
import type { Hono } from "hono";
import { serializeRows, type Protocol } from "../helpers.js";
import { getTransferTable } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/addresses/:address/transfers", async (c) => {
    const address = c.req.param("address") as `0x${string}`;
    const direction = c.req.query("direction") || "all";
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const contractAddress = c.req.query("contractAddress");
    const limit = Math.min(Number(c.req.query("limit")) || 50, 100);
    const cursor = c.req.query("cursor");

    const table = getTransferTable(protocol);

    const conditions = [direction === "in" ? eq(table.to, address) : direction === "out" ? eq(table.from, address) : sql`(${table.from} = ${address} OR ${table.to} = ${address})`];
    if (contractAddress) conditions.push(eq(table.contractAddress, contractAddress as `0x${string}`));
    if (cursor) {
      const [ts, id] = cursor.split("-");
      if (ts && id) {
        conditions.push(sql`(${table.blockTimestamp}, ${table.id}) < (${BigInt(ts)}, ${id})`);
      }
    }

    const rows = await db
      .select()
      .from(table)
      .where(and(...conditions))
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
      address,
      direction,
      transfers: serializeRows(items as Record<string, unknown>[]),
      nextCursor: hasMore ? nextCursor : null,
    });
  });
}
