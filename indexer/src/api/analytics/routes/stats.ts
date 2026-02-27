import { db } from "ponder:api";
import { gte, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER, XSTOCK_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/stats", async (c) => {
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "24h");
    const protocol = c.req.query("protocol") as Protocol | undefined;
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const result: {
      period: string;
      totalVolume: string;
      totalTransferCount: number;
      uniqueTokens: number;
      uniqueAddresses: number;
      byProtocol?: { ondo: Record<string, unknown>; xstock: Record<string, unknown> };
      byStock?: Record<string, { volume: string; transferCount: number }>;
    } = {
      period: c.req.query("period") || "24h",
      totalVolume: "0",
      totalTransferCount: 0,
      uniqueTokens: 0,
      uniqueAddresses: 0,
    };

    const tables = protocol ? [getTransferTable(protocol)] : [ONDO_TRANSFER, XSTOCK_TRANSFER];

    for (let i = 0; i < tables.length; i++) {
      const table = tables[i]!;
      const rows = await db
        .select({
          contractAddress: table.contractAddress,
          tokenName: (protocol === "ondo" || (protocol === undefined && i === 0))
            ? (table as typeof ONDO_TRANSFER).tokenName
            : sql<string>`''`.as("token_name"),
          volume: sum(table.value).as("volume"),
          transferCount: count().as("transfer_count"),
        })
        .from(table)
        .where(gte(table.blockTimestamp, BigInt(fromTs)))
        .groupBy(
          table.contractAddress,
          ...(protocol === "ondo" || (protocol === undefined && i === 0) ? [(table as typeof ONDO_TRANSFER).tokenName] : [])
        );

      for (const r of rows) {
        result.totalTransferCount += Number(r.transferCount ?? 0);
        result.totalVolume = String(BigInt(result.totalVolume) + BigInt(r.volume ?? 0));
      }
      result.uniqueTokens += new Set(rows.map((r) => r.contractAddress).filter(Boolean) as string[]).size;
    }

    for (const table of tables) {
      const addrRows = await db
        .select({
          from: table.from,
          to: table.to,
        })
        .from(table)
        .where(gte(table.blockTimestamp, BigInt(fromTs)))
        .limit(10000);
      const set = new Set<string>();
      for (const r of addrRows) {
        if (r.from) set.add(r.from);
        if (r.to) set.add(r.to);
      }
      result.uniqueAddresses += set.size;
    }

    return c.json(result);
  });
}
