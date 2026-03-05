#!/usr/bin/env npx tsx
/**
 * Fetches stock aggregate data from the Massive/Polygon API and inserts
 * into the daily_stock_summary table in the STOCK schema.
 *
 * Usage:
 *   pnpm fetch-stocks [YYYY-MM-DD]
 *   # Uses today's date if no date provided.
 *
 * Environment:
 *   DATABASE_URL - PostgreSQL connection string (required)
 *   DATABASE_SCHEMA - Schema name (default: stock)
 *   MASSIVE_API_KEY - API key (defaults to demo key if not set)
 */

import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import format from "pg-format";
import pg from "pg";
import { fetchStockData, mapRow } from "./lib/fetchStockData";

// Load .env from indexer for DATABASE_URL
const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, "../indexer/.env.local") });
config(); // also .env in cwd

async function main(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Error: DATABASE_URL environment variable is required.");
    process.exit(1);
  }

  const schema = process.env.DATABASE_SCHEMA ?? "stock";
  const dateArg = process.argv[2];
  const date = dateArg ?? new Date().toISOString().slice(0, 10);
  const apiKey = process.env.MASSIVE_API_KEY ?? "Rm6rE5DysttvSmtvpDo2NWA7qsCmErIf";

  console.log(`Fetching data for ${date} from API...`);
  const results = await fetchStockData(date, apiKey);

  if (results.length === 0) {
    console.log("No results returned from API.");
    process.exit(0);
  }

  const rows = results.map(mapRow);
  console.log(`Mapped ${rows.length} rows.`);

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();

    await client.query(format("CREATE SCHEMA IF NOT EXISTS %I", schema));
    await client.query(format("DROP TABLE IF EXISTS %I.%I", schema, "daily_stock_summary"));
    await client.query(format(`
      CREATE TABLE IF NOT EXISTS %I.%I (
        id SERIAL PRIMARY KEY,
        ticker TEXT NOT NULL,
        close_price DOUBLE PRECISION,
        high DOUBLE PRECISION,
        low DOUBLE PRECISION,
        num_transactions INTEGER,
        open DOUBLE PRECISION,
        bar_timestamp BIGINT,
        volume DOUBLE PRECISION,
        volume_weighted_price DOUBLE PRECISION
      )
    `, schema, "daily_stock_summary"));

    const BATCH_SIZE = 500;
    let inserted = 0;
    for (let i = 0; i < rows.length; i += BATCH_SIZE) {
      const batch = rows.slice(i, i + BATCH_SIZE);
      const values = batch.map((r) => [
        r.ticker ?? null,
        r.close_price ?? null,
        r.high ?? null,
        r.low ?? null,
        r.num_transactions ?? null,
        r.open ?? null,
        r.timestamp ?? null,
        r.volume ?? null,
        r.volume_weighted_price ?? null,
      ]);
      const valueClauses = values.map(
        (v) => format("(DEFAULT, %L, %L, %L, %L, %L, %L, %L, %L, %L)", ...v)
      );
      const insertSql = format(
        `INSERT INTO %I.%I (id, ticker, close_price, high, low, num_transactions, open, bar_timestamp, volume, volume_weighted_price) VALUES %s`,
        schema,
        "daily_stock_summary",
        valueClauses.join(", ")
      );
      await client.query(insertSql);
      inserted += batch.length;
      if (rows.length > BATCH_SIZE) {
        console.log(`  Inserted ${inserted}/${rows.length}...`);
      }
    }

    console.log(`Inserted ${inserted} records into ${schema}.daily_stock_summary.`);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
