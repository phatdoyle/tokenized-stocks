import { db } from "ponder:api";
import { gte, sum, count, eq, sql } from "ponder";
import type { Hono } from "hono";
import { parsePeriodSeconds, serializeRows } from "../helpers.js";
import { ONDO_TRANSFER, XSTOCK_TRANSFER, XSTOCK_DEPLOYED } from "../shared.js";

export function register(app: Hono) {
  app.get("/analytics/stats/by-protocol", async (c) => {
    const periodSeconds = parsePeriodSeconds(c.req.query("period") || "7d");
    const fromTs = Math.floor(Date.now() / 1000) - periodSeconds;

    const ondoRows = await db
      .select({
        contractAddress: ONDO_TRANSFER.contractAddress,
        tokenName: ONDO_TRANSFER.tokenName,
        ticker: ONDO_TRANSFER.ticker,
        volume: sum(ONDO_TRANSFER.value).as("volume"),
        transferCount: count().as("transfer_count"),
      })
      .from(ONDO_TRANSFER)
      .where(gte(ONDO_TRANSFER.blockTimestamp, BigInt(fromTs)))
      .groupBy(ONDO_TRANSFER.contractAddress, ONDO_TRANSFER.tokenName, ONDO_TRANSFER.ticker);

    const xstockRows = await db
      .select({
        contractAddress: XSTOCK_TRANSFER.contractAddress,
        tokenName: sql<string>`max(${XSTOCK_DEPLOYED.name})`.as("token_name"),
        symbol: sql<string>`max(${XSTOCK_DEPLOYED.symbol})`.as("symbol"),
        ticker: sql<string>`left(max(${XSTOCK_DEPLOYED.symbol}), length(max(${XSTOCK_DEPLOYED.symbol})) - 1)`.as("ticker"),
        volume: sum(XSTOCK_TRANSFER.value).as("volume"),
        transferCount: count().as("transfer_count"),
      })
      .from(XSTOCK_TRANSFER)
      .leftJoin(XSTOCK_DEPLOYED, eq(XSTOCK_TRANSFER.contractAddress, XSTOCK_DEPLOYED.newToken))
      .where(gte(XSTOCK_TRANSFER.blockTimestamp, BigInt(fromTs)))
      .groupBy(XSTOCK_TRANSFER.contractAddress);

    const ondoByStock = serializeRows(ondoRows as Record<string, unknown>[]);
    const xstockByStock = serializeRows(xstockRows as Record<string, unknown>[]);

    return c.json({
      period: c.req.query("period") || "7d",
      ondo: { totalVolume: ondoRows.reduce((a, r) => a + Number(r.volume ?? 0), 0), totalTransfers: ondoRows.reduce((a, r) => a + Number(r.transferCount ?? 0), 0), byStock: ondoByStock },
      xstock: { totalVolume: xstockRows.reduce((a, r) => a + Number(r.volume ?? 0), 0), totalTransfers: xstockRows.reduce((a, r) => a + Number(r.transferCount ?? 0), 0), byStock: xstockByStock },
    });
  });
}
