import pg from "pg";
import { Hono } from "hono";

const app = new Hono();

function quoteIdentifier(name: string): string {
  return `"${name.replace(/"/g, '""')}"`;
}

// GET /onchain-marketcap - supply and market cap by stock from mints/burns + prices
app.get("/onchain-marketcap", async (c) => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return c.json({ error: "DATABASE_URL not configured" }, 500);
  }
  const schema = process.env.DATABASE_SCHEMA ?? "stocks";
  const schemaQ = quoteIdentifier(schema);

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();
    const result = await client.query(`
      WITH mints_burns AS (
        SELECT stock_ticker, contract_address, sum(value / power(10, 18)) AS amount
        FROM ${schemaQ}.ondo_transfer
        WHERE "from" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2
        UNION ALL
        SELECT stock_ticker, contract_address, -sum(value / power(10, 18)) AS amount
        FROM ${schemaQ}.ondo_transfer
        WHERE "to" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2
      ),
      prices AS (
        SELECT *
        FROM ${schemaQ}.daily_stock_summary
        WHERE bar_timestamp = (SELECT max(bar_timestamp) FROM ${schemaQ}.daily_stock_summary)
      )
      SELECT
        a.stock_ticker,
        a.contract_address,
        b.close_price,
        sum(a.amount) AS supply,
        sum(a.amount) * b.close_price AS onchain_marketcap
      FROM mints_burns a
      LEFT JOIN prices b ON a.stock_ticker = b.ticker
      GROUP BY 1, 2, 3
      ORDER BY onchain_marketcap DESC NULLS LAST
    `);
    const rows = (result.rows ?? []).map((r) => ({
      ...r,
      supply: r.supply != null ? String(r.supply) : null,
      onchain_marketcap: r.onchain_marketcap != null ? String(r.onchain_marketcap) : null,
    }));
    return c.json({ data: rows });
  } catch (err) {
    console.error("onchain-marketcap error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  } finally {
    await client.end();
  }
});

// GET /marketcap-onchain-vs-offchain - onchain supply vs total market cap by ticker/protocol
app.get("/marketcap-onchain-vs-offchain", async (c) => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return c.json({ error: "DATABASE_URL not configured" }, 500);
  }
  const schema = process.env.DATABASE_SCHEMA ?? "stocks";
  const schemaQ = quoteIdentifier(schema);

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();
    const result = await client.query(`
      WITH prices AS (
        SELECT
          a.*,
          to_timestamp(bar_timestamp / 1000.0)::date AS bar_date,
          b.share_class_shares_outstanding,
          (a.close_price * b.share_class_shares_outstanding) AS total_marketcap
        FROM public.daily_stock_summary a
        LEFT JOIN public.ticker_reference b ON a.ticker = b.ticker
        WHERE bar_timestamp = (SELECT max(bar_timestamp) FROM public.daily_stock_summary)
          AND b.share_class_shares_outstanding IS NOT NULL
      ),
      xstocks_tickers AS (
        SELECT
          new_token AS contract_address,
          left(symbol, length(symbol) - 1) AS stock_ticker
        FROM ${schemaQ}.xstock_deployed
      ),
      total_supply AS (
        SELECT stock_ticker, contract_address, 'ondo' AS protocol, sum(value / power(10, 18)) AS amount
        FROM ${schemaQ}.ondo_transfer
        WHERE "from" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2, 3
        UNION ALL
        SELECT stock_ticker, contract_address, 'ondo' AS protocol, -sum(value / power(10, 18)) AS amount
        FROM ${schemaQ}.ondo_transfer
        WHERE "to" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2, 3
        UNION ALL
        SELECT b.stock_ticker, b.contract_address, 'xstock' AS protocol, sum(a.value / power(10, 18)) AS amount
        FROM ${schemaQ}.xstock_transfer a
        LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
        WHERE a."from" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2, 3
        UNION ALL
        SELECT b.stock_ticker, b.contract_address, 'xstock' AS protocol, -sum(a.value / power(10, 18)) AS amount
        FROM ${schemaQ}.xstock_transfer a
        LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
        WHERE a."to" = '0x0000000000000000000000000000000000000000'
        GROUP BY 1, 2, 3
      ),
      final_prep AS (
        SELECT stock_ticker, protocol, sum(amount) AS onchain_supply
        FROM total_supply
        GROUP BY 1, 2
      )
      SELECT
        a.stock_ticker,
        a.protocol,
        a.onchain_supply,
        b.close_price,
        b.total_marketcap,
        (b.close_price * a.onchain_supply) AS onchain_marketcap,
        ((b.close_price * a.onchain_supply) / b.total_marketcap) AS percent_of_mcap_onchain
      FROM final_prep a
      LEFT JOIN prices b ON a.stock_ticker = b.ticker
      WHERE b.close_price IS NOT NULL
      ORDER BY b.total_marketcap DESC
    `);
    const rows = (result.rows ?? []).map((r) => ({
      stock_ticker: r.stock_ticker,
      protocol: r.protocol,
      onchain_supply: r.onchain_supply != null ? String(r.onchain_supply) : null,
      close_price: r.close_price != null ? String(r.close_price) : null,
      total_marketcap: r.total_marketcap != null ? String(r.total_marketcap) : null,
      onchain_marketcap: r.onchain_marketcap != null ? String(r.onchain_marketcap) : null,
      percent_of_mcap_onchain: r.percent_of_mcap_onchain != null ? String(r.percent_of_mcap_onchain) : null,
    }));
    return c.json({ data: rows });
  } catch (err) {
    console.error("marketcap-onchain-vs-offchain error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  } finally {
    await client.end();
  }
});

// GET /marketcap-over-time/:ticker - market cap over time for a stock
app.get("/marketcap-over-time/:ticker", async (c) => {
  const ticker = c.req.param("ticker")?.toUpperCase();
  if (!ticker || !/^[A-Z0-9.-]+$/.test(ticker)) {
    return c.json({ error: "Invalid ticker symbol" }, 400);
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return c.json({ error: "DATABASE_URL not configured" }, 500);
  }
  const schema = process.env.DATABASE_SCHEMA ?? "stocks";
  const schemaQ = quoteIdentifier(schema);

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();
    const result = await client.query(
      `
      WITH daily AS (
        SELECT
          date,
          stock_ticker,
          contract_address,
          sum(amount) AS amount
        FROM (
          SELECT
            to_timestamp(block_timestamp)::date AS date,
            stock_ticker,
            contract_address,
            sum(value / power(10, 18)) AS amount
          FROM ${schemaQ}.ondo_transfer
          WHERE "from" = '0x0000000000000000000000000000000000000000'
            AND stock_ticker = $1
          GROUP BY 1, 2, 3
          UNION ALL
          SELECT
            to_timestamp(block_timestamp)::date AS date,
            stock_ticker,
            contract_address,
            -sum(value / power(10, 18)) AS amount
          FROM ${schemaQ}.ondo_transfer
          WHERE "to" = '0x0000000000000000000000000000000000000000'
            AND stock_ticker = $1
          GROUP BY 1, 2, 3
        ) t
        GROUP BY 1, 2, 3
      ),
      tickers AS (
        SELECT DISTINCT stock_ticker, contract_address FROM daily
      ),
      date_spine AS (
        SELECT generate_series(
          coalesce((SELECT min(date) FROM daily), current_date),
          current_date,
          interval '1 day'
        )::date AS date
      ),
      spine AS (
        SELECT d.date, t.stock_ticker, t.contract_address
        FROM date_spine d
        CROSS JOIN tickers t
      ),
      prices AS (
        SELECT
          ticker,
          to_timestamp(bar_timestamp / 1000)::date AS date,
          avg(close_price) AS close_price,
          sum(volume) AS volume
        FROM ${schemaQ}.daily_stock_summary
        WHERE ticker = $1
        GROUP BY 1, 2
      ),
      filled AS (
        SELECT
          s.date,
          s.stock_ticker,
          s.contract_address,
          sum(coalesce(d.amount, 0)) OVER (
            PARTITION BY s.stock_ticker, s.contract_address
            ORDER BY s.date
          ) AS total_supply,
          p.close_price,
          p.volume
        FROM spine s
        LEFT JOIN daily d
          ON s.date = d.date
          AND s.stock_ticker = d.stock_ticker
          AND s.contract_address = d.contract_address
        LEFT JOIN prices p ON s.date = p.date
      ),
      price_groups AS (
        SELECT
          *,
          count(close_price) OVER (
            PARTITION BY stock_ticker, contract_address
            ORDER BY date
          ) AS price_group
        FROM filled
      ),
      final AS (
        SELECT
          date,
          stock_ticker,
          contract_address,
          total_supply,
          first_value(close_price) OVER (
            PARTITION BY stock_ticker, contract_address, price_group
            ORDER BY date
          ) AS close_price,
          volume
        FROM price_groups
        ORDER BY stock_ticker, contract_address, date
      )
      SELECT *, total_supply * close_price AS onchain_marketcap
      FROM final
      ORDER BY date
      `,
      [ticker]
    );
    const rows = (result.rows ?? []).map((r) => ({
      ...r,
      total_supply: r.total_supply != null ? String(r.total_supply) : null,
      onchain_marketcap: r.onchain_marketcap != null ? String(r.onchain_marketcap) : null,
    }));
    return c.json({ data: rows, ticker });
  } catch (err) {
    console.error("marketcap-over-time error:", err);
    return c.json({ error: err instanceof Error ? err.message : "Query failed" }, 500);
  } finally {
    await client.end();
  }
});

export default app;
