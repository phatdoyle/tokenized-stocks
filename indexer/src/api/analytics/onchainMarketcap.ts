import { Hono } from "hono";
import { getOnchainMarketcap } from "./routes/get-onchain-marketcap/GET_ONCHAIN_MARKETCAP";
import { getOnchainMarketcapOverTime } from "./routes/get-onchain-marketcap-over-time/GET_ONCHAIN_MARKETCAP_OVERTIME";

const app = new Hono();

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
