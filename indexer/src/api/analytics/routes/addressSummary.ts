import { db } from "ponder:api";
import { eq, and, gte, sum, count, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, type Protocol } from "../helpers.js";
import { getTransferTable, ONDO_TRANSFER } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/addresses/:address/summary", async (c) => {
    const address = c.req.param("address") as `0x${string}`;
    const protocol = (c.req.query("protocol") || "ondo") as Protocol;
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "30d");
    const contractAddress = c.req.query("contractAddress");
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const table = getTransferTable(protocol);

    const sentWhere = [eq(table.from, address), gte(table.blockTimestamp, BigInt(fromTs))];
    const receivedWhere = [eq(table.to, address), gte(table.blockTimestamp, BigInt(fromTs))];
    if (contractAddress) {
      sentWhere.push(eq(table.contractAddress, contractAddress as `0x${string}`));
      receivedWhere.push(eq(table.contractAddress, contractAddress as `0x${string}`));
    }
    const groupByCols = protocol === "ondo"
      ? [table.contractAddress, (table as typeof ONDO_TRANSFER).tokenName]
      : [table.contractAddress];

    const sentRows = await db
      .select({
        contractAddress: table.contractAddress,
        tokenName: protocol === "ondo" ? (table as typeof ONDO_TRANSFER).tokenName : sql<string>`''`.as("token_name"),
        totalSent: sum(table.value).as("total_sent"),
        sendCount: count().as("send_count"),
      })
      .from(table)
      .where(and(...sentWhere))
      .groupBy(...groupByCols);

    const receivedRows = await db
      .select({
        contractAddress: table.contractAddress,
        tokenName: protocol === "ondo" ? (table as typeof ONDO_TRANSFER).tokenName : sql<string>`''`.as("token_name"),
        totalReceived: sum(table.value).as("total_received"),
        receiveCount: count().as("receive_count"),
      })
      .from(table)
      .where(and(...receivedWhere))
      .groupBy(...groupByCols);

    const byStock: Record<string, { totalSent: string; sendCount: number; totalReceived: string; receiveCount: number; tokenName?: string }> = {};
    for (const r of sentRows) {
      const key = r.contractAddress ?? "";
      if (!key) continue;
      byStock[key] = {
        totalSent: String(r.totalSent ?? 0),
        sendCount: Number(r.sendCount ?? 0),
        totalReceived: "0",
        receiveCount: 0,
        tokenName: r.tokenName as string | undefined,
      };
    }
    for (const r of receivedRows) {
      const key = r.contractAddress ?? "";
      if (!key) continue;
      if (!byStock[key]) {
        byStock[key] = {
          totalSent: "0",
          sendCount: 0,
          totalReceived: String(r.totalReceived ?? 0),
          receiveCount: Number(r.receiveCount ?? 0),
          tokenName: r.tokenName as string | undefined,
        };
      } else {
        byStock[key].totalReceived = String(r.totalReceived ?? 0);
        byStock[key].receiveCount = Number(r.receiveCount ?? 0);
      }
    }

    return c.json({
      protocol,
      address,
      period: c.req.query("period") || "30d",
      byStock: Object.entries(byStock).map(([contractAddress, s]) => ({ contractAddress, ...s })),
    });
  });
}
