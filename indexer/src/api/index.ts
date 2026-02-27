import { db } from "ponder:api";
import schema from "ponder:schema";
import { Hono } from "hono";
import { client, graphql } from "ponder";
import{ getOnchainMarketcap } from "./analytics/routes/get-onchain-marketcap/GET_ONCHAIN_MARKETCAP";
import{ getOnchainMarketcapOverTime } from "./analytics/routes/get-onchain-marketcap-over-time/GET_ONCHAIN_MARKETCAP_OVERTIME";


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
