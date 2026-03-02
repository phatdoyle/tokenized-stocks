import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";
import { getOnchainMarketcap } from "./analytics/routes/get-onchain-marketcap/GET_ONCHAIN_MARKETCAP";
import { getOnchainMarketcapOverTime } from "./analytics/routes/get-onchain-marketcap-over-time/GET_ONCHAIN_MARKETCAP_OVERTIME";
import { getHolderBalances } from "./analytics/routes/get-holder-balances/GET_HOLDER_BALANCES";
import { getTransfersMintsBurns } from "./analytics/routes/get-transfer-mints-burns/GET_TRANSFERS_MINTS_BURNS";


const app = new Hono();

app.use("/sql/*", client({ db, schema }));

app.use("/", graphql({ db, schema }));
app.use("/graphql", graphql({ db, schema }));

app.get("/up", (c) => c.json({ message: "Hello World" }));

// GET /onchain-marketcap - supply and market cap by stock from mints/burns + prices
app.get("/onchain-marketcap", async (c) => {
  try {
    const rows = await getOnchainMarketcap();
    return c.json({ data: rows });
  } catch (err) {
    console.error("onchain-marketcap error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  }
});

// GET /holder-balances - holder balances with optional filters (ticker, address, protocol)
app.get("/holder-balances", async (c) => {
  const ticker = c.req.query("ticker");
  const address = c.req.query("address");
  const protocol = c.req.query("protocol") as "ondo" | "xstock" | undefined;

  if (ticker && !/^[A-Z0-9.-]+$/i.test(ticker)) {
    return c.json({ error: "Invalid ticker symbol" }, 400);
  }
  const addr = address?.trim();
  if (addr && !/^0x[0-9a-fA-F]{40}$/.test(addr) && !/^[0-9a-fA-F]{40}$/.test(addr)) {
    return c.json({ error: "Invalid address" }, 400);
  }
  if (protocol && protocol !== "ondo" && protocol !== "xstock") {
    return c.json({ error: "Invalid protocol; use 'ondo' or 'xstock'" }, 400);
  }

  try {
    const rows = await getHolderBalances({
      ticker: ticker?.toUpperCase(),
      address: addr,
      protocol,
    });
    return c.json({ data: rows });
  } catch (err) {
    console.error("holder-balances error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  }
});

// GET /transfers-mints-burns/:ticker - transfers, mints, burns by date for ondo + xstock (ticker required)
app.get("/transfers-mints-burns/:ticker", async (c) => {
  const ticker = c.req.param("ticker")?.toUpperCase();
  if (!ticker || !/^[A-Z0-9.-]+$/.test(ticker)) {
    return c.json({ error: "Invalid ticker symbol" }, 400);
  }

  try {
    const rows = await getTransfersMintsBurns(ticker);
    return c.json({ data: rows, ticker });
  } catch (err) {
    console.error("transfers-mints-burns error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  }
});

// GET /marketcap-over-time/:ticker - market cap over time for a stock
app.get("/marketcap-over-time/:ticker", async (c) => {
  const ticker = c.req.param("ticker")?.toUpperCase();
  if (!ticker || !/^[A-Z0-9.-]+$/.test(ticker)) {
    return c.json({ error: "Invalid ticker symbol" }, 400);
  }

  try {
    const rows = await getOnchainMarketcapOverTime(ticker);
    return c.json({ data: rows, ticker });
  } catch (err) {
    console.error("marketcap-over-time error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  }
});

export default app;
