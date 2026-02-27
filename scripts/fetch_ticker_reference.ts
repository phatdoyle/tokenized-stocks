#!/usr/bin/env npx tsx
/**
 * Fetches ticker reference data from the Massive API for each distinct
 * tickers from xstock_deployed (distinct left(symbol, length(symbol) - 1))
 * and stores the response in ticker_reference.
 *
 * Usage:
 *   pnpm fetch-ticker-reference
 *
 * Environment:
 *   DATABASE_URL - PostgreSQL connection string (required)
 *   DATABASE_SCHEMA - Schema for xstock_deployed and ticker_reference (default: stocks)
 *   MASSIVE_API_KEY - API key (defaults to demo key if not set)
 *   API_DELAY_MS - Delay between requests in ms (default: 15000 for 4 req/min)
 */

import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import format from "pg-format";
import pg from "pg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, "../indexer/.env.local") });
config();

const DELAY_MS = Number(process.env.API_DELAY_MS) || 15_000;
const MASSIVE_TICKER_URL = "https://api.massive.com/v3/reference/tickers";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface MassiveResults {
  active?: boolean;
  cik?: string;
  composite_figi?: string;
  currency_name?: string;
  description?: string;
  homepage_url?: string;
  list_date?: string;
  locale?: string;
  market?: string;
  market_cap?: number;
  name?: string;
  phone_number?: string;
  primary_exchange?: string;
  round_lot?: number;
  share_class_figi?: string;
  share_class_shares_outstanding?: number;
  sic_code?: string;
  sic_description?: string;
  ticker?: string;
  ticker_root?: string;
  total_employees?: number;
  type?: string;
  weighted_shares_outstanding?: number;
  address?: { address1?: string; city?: string; postal_code?: string; state?: string };
  branding?: { icon_url?: string; logo_url?: string };
}

interface MassiveTickerResponse {
  request_id?: string;
  results?: MassiveResults;
  status?: string;
}

function flattenResults(r: MassiveResults) {
  return {
    active: r.active ?? null,
    cik: r.cik ?? null,
    composite_figi: r.composite_figi ?? null,
    currency_name: r.currency_name ?? null,
    description: r.description ?? null,
    homepage_url: r.homepage_url ?? null,
    list_date: r.list_date ?? null,
    locale: r.locale ?? null,
    market: r.market ?? null,
    market_cap: r.market_cap ?? null,
    name: r.name ?? null,
    phone_number: r.phone_number ?? null,
    primary_exchange: r.primary_exchange ?? null,
    round_lot: r.round_lot ?? null,
    share_class_figi: r.share_class_figi ?? null,
    share_class_shares_outstanding: r.share_class_shares_outstanding ?? null,
    sic_code: r.sic_code ?? null,
    sic_description: r.sic_description ?? null,
    ticker_root: r.ticker_root ?? null,
    total_employees: r.total_employees ?? null,
    type: r.type ?? null,
    weighted_shares_outstanding: r.weighted_shares_outstanding ?? null,
    address_address1: r.address?.address1 ?? null,
    address_city: r.address?.city ?? null,
    address_postal_code: r.address?.postal_code ?? null,
    address_state: r.address?.state ?? null,
    branding_icon_url: r.branding?.icon_url ?? null,
    branding_logo_url: r.branding?.logo_url ?? null,
  };
}

async function fetchTickerReference(ticker: string, apiKey: string): Promise<MassiveTickerResponse | null> {
  const url = `${MASSIVE_TICKER_URL}/${encodeURIComponent(ticker)}?apiKey=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`  ${ticker}: API ${res.status} ${res.statusText}`);
    return null;
  }
  const data = (await res.json()) as MassiveTickerResponse;
  return data;
}

async function main(): Promise<void> {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Error: DATABASE_URL environment variable is required.");
    process.exit(1);
  }

  const schema = process.env.DATABASE_SCHEMA ?? "stocks";
  const apiKey = process.env.MASSIVE_API_KEY ?? "Rm6rE5DysttvSmtvpDo2NWA7qsCmErIf";

  const client = new pg.Client({ connectionString: databaseUrl });
  try {
    await client.connect();

    await client.query(format("CREATE SCHEMA IF NOT EXISTS %I", schema));
    await client.query(format(`
      CREATE TABLE IF NOT EXISTS %I.%I (
        ticker TEXT PRIMARY KEY,
        request_id TEXT,
        status TEXT,
        active BOOLEAN,
        cik TEXT,
        composite_figi TEXT,
        currency_name TEXT,
        description TEXT,
        homepage_url TEXT,
        list_date TEXT,
        locale TEXT,
        market TEXT,
        market_cap DOUBLE PRECISION,
        name TEXT,
        phone_number TEXT,
        primary_exchange TEXT,
        round_lot INTEGER,
        share_class_figi TEXT,
        share_class_shares_outstanding DOUBLE PRECISION,
        sic_code TEXT,
        sic_description TEXT,
        ticker_root TEXT,
        total_employees INTEGER,
        type TEXT,
        weighted_shares_outstanding DOUBLE PRECISION,
        address_address1 TEXT,
        address_city TEXT,
        address_postal_code TEXT,
        address_state TEXT,
        branding_icon_url TEXT,
        branding_logo_url TEXT,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `, schema, "ticker_reference"));

    const tickersResult = await client.query(
      format(
        "SELECT DISTINCT left(symbol, length(symbol) - 1) AS ticker FROM %I.%I WHERE symbol IS NOT NULL AND length(symbol) > 1 ORDER BY ticker",
        schema,
        "xstock_deployed"
      )
    );
    const tickers: string[] = (tickersResult.rows ?? []).map((r: { ticker?: string }) => r.ticker as string);
    if (tickers.length === 0) {
      console.log("No distinct tickers found in xstock_deployed.");
      return;
    }

    console.log(`Found ${tickers.length} distinct tickers. Fetching reference data (${DELAY_MS / 1000}s between requests)...`);

    const cols = [
      "ticker", "request_id", "status", "active", "cik", "composite_figi", "currency_name", "description",
      "homepage_url", "list_date", "locale", "market", "market_cap", "name", "phone_number", "primary_exchange",
      "round_lot", "share_class_figi", "share_class_shares_outstanding", "sic_code", "sic_description",
      "ticker_root", "total_employees", "type", "weighted_shares_outstanding",
      "address_address1", "address_city", "address_postal_code", "address_state",
      "branding_icon_url", "branding_logo_url",
    ];
    const placeholders = cols.map((_, i) => `$${i + 1}`).join(", ");
    const setClause = cols.filter((c) => c !== "ticker").map((c) => `${c} = EXCLUDED.${c}`).join(", ");
    const upsertSql = format(`
      INSERT INTO %I.%I (${cols.join(", ")}, updated_at)
      VALUES (${placeholders}, now())
      ON CONFLICT (ticker) DO UPDATE SET ${setClause}, updated_at = now()
    `, schema, "ticker_reference");

    let ok = 0;
    let fail = 0;
    for (let i = 0; i < tickers.length; i++) {
      if (i > 0) await sleep(DELAY_MS);
      const ticker = tickers[i]!;
      const data = await fetchTickerReference(ticker, apiKey);
      if (data?.results != null) {
        const f = flattenResults(data.results);
        await client.query(upsertSql, [
          ticker,
          data.request_id ?? null,
          data.status ?? null,
          f.active,
          f.cik,
          f.composite_figi,
          f.currency_name,
          f.description,
          f.homepage_url,
          f.list_date,
          f.locale,
          f.market,
          f.market_cap,
          f.name,
          f.phone_number,
          f.primary_exchange,
          f.round_lot,
          f.share_class_figi,
          f.share_class_shares_outstanding,
          f.sic_code,
          f.sic_description,
          f.ticker_root,
          f.total_employees,
          f.type,
          f.weighted_shares_outstanding,
          f.address_address1,
          f.address_city,
          f.address_postal_code,
          f.address_state,
          f.branding_icon_url,
          f.branding_logo_url,
        ]);
        ok++;
        console.log(`[${i + 1}/${tickers.length}] ${ticker}: stored`);
      } else {
        fail++;
        console.log(`[${i + 1}/${tickers.length}] ${ticker}: skip (no results)`);
      }
    }

    console.log(`Done. Stored: ${ok}, skipped: ${fail}.`);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
