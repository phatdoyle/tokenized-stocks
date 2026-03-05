#!/usr/bin/env npx tsx
/**
 * Fetches stock aggregate data for each day from a start date through today,
 * and inserts into daily_stock_summary. Uses the same logic as fetch_stocks.ts.
 *
 * Usage:
 *   pnpm fetch-stocks-range [start-date] [end-date]
 *   # Default start: 2025-09-10
 *   # Default end: yesterday
 *
 * Environment:
 *   DATABASE_URL - PostgreSQL connection string (required)
 *   DATABASE_SCHEMA - Schema name (default: stock)
 *   MASSIVE_API_KEY - API key (defaults to demo key if not set)
 *   API_DELAY_MS - Delay between requests in ms (default: 15000 for 4 req/min)
 */

import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import format from "pg-format";
import pg from "pg";
import { fetchStockData, mapRow } from "./lib/fetchStockData";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, "../indexer/.env.local") });
config();

/** Minimum delay between API requests (4 req/min = 15s). Override via API_DELAY_MS env. */
const DELAY_BETWEEN_REQUESTS_MS = Number(process.env.API_DELAY_MS) || 15_000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDatesInRange(startStr: string, endStr: string): string[] {
  const dates: string[] = [];
  const start = new Date(startStr);
  const end = new Date(endStr);
  const cursor = new Date(start);
  while (cursor <= end) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

async function main(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Error: DATABASE_URL environment variable is required.");
    process.exit(1);
  }

  const schema = process.env.DATABASE_SCHEMA ?? "public";
  const startDateArg = process.argv[2] ?? "2025-09-10";
  const endDateArg = process.argv[3];
  const endDate =
    endDateArg ??
    (() => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return d.toISOString().slice(0, 10);
    })();
  const apiKey = process.env.MASSIVE_API_KEY ?? "Rm6rE5DysttvSmtvpDo2NWA7qsCmErIf";

  const dates = getDatesInRange(startDateArg, endDate);
  console.log(`Fetching ${dates.length} days from ${startDateArg} to ${endDate} (${DELAY_BETWEEN_REQUESTS_MS / 1000}s between requests)...`);

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();

    await client.query(format("CREATE SCHEMA IF NOT EXISTS %I", schema));
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

    // Ensure id has a default (table may have been created by Ponder without SERIAL)
    const seqName = `${schema}.daily_stock_summary_id_seq`;
    await client.query(format("CREATE SEQUENCE IF NOT EXISTS %I.%I", schema, "daily_stock_summary_id_seq"));
    await client.query(
      format(
        "ALTER TABLE %I.%I ALTER COLUMN id SET DEFAULT nextval(%L::regclass)",
        schema,
        "daily_stock_summary",
        seqName
      )
    );

    const insertSql = format(`
      INSERT INTO %I.%I (
        id, ticker, close_price, high, low, num_transactions,
        open, bar_timestamp, volume, volume_weighted_price
      ) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9)
    `, schema, "daily_stock_summary");

    let totalInserted = 0;
    for (let i = 0; i < dates.length; i++) {
      if (i > 0) await sleep(DELAY_BETWEEN_REQUESTS_MS);
      const date = dates[i]!;
      const results = await fetchStockData(date, apiKey);
      if (results.length === 0) {
        console.log(`[${i + 1}/${dates.length}] ${date}: no data, skipping`);
        continue;
      }

      const rows = results.map(mapRow);
      const barTimestamps = [...new Set(rows.map((r) => r.timestamp).filter((t): t is number => t != null))];
      if (barTimestamps.length > 0) {
        await client.query(
          format(`DELETE FROM %I.%I WHERE bar_timestamp = ANY($1::bigint[])`, schema, "daily_stock_summary"),
          [barTimestamps]
        );
      }
      for (const row of rows) {
        await client.query(insertSql, [
          row.ticker,
          row.close_price,
          row.high,
          row.low,
          row.num_transactions,
          row.open,
          row.timestamp,
          row.volume,
          row.volume_weighted_price,
        ]);
      }
      totalInserted += rows.length;
      console.log(`[${i + 1}/${dates.length}] ${date}: inserted ${rows.length} rows`);
    }

    console.log(`Done. Total inserted: ${totalInserted} rows.`);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
