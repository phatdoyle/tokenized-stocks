import { executeSQLQuery } from "../../../executeSqlQuery";

/** Escape ticker for safe use in a SQL string literal (single-quote escape). */
function escapeTickerLiteral(ticker: string): string {
  return `'${ticker.replace(/'/g, "''")}'`;
}

function buildQuery(ticker: string): string {
  const t = escapeTickerLiteral(ticker);
  return `
WITH xstocks_tickers AS (
  SELECT
    new_token AS contract_address,
    left(symbol, length(symbol) - 1) AS stock_ticker
  FROM xstock_deployed
),
prices AS (
  SELECT
    a.*,
    to_timestamp(bar_timestamp / 1000.0)::date AS date,
    b.share_class_shares_outstanding,
    (a.close_price * b.share_class_shares_outstanding) AS total_marketcap
  FROM daily_stock_summary a
  LEFT JOIN ticker_reference b ON a.ticker = b.ticker AND share_class_shares_outstanding IS NOT NULL
  WHERE a.ticker = ${t}
),
date_range AS (
  SELECT generate_series(
    (SELECT MIN(to_timestamp(block_timestamp)::date) FROM ondo_transfer),
    CURRENT_DATE,
    INTERVAL '1 day'
  )::date AS date
),
ondo_mints AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    stock_ticker,
    sum(value) / power(10, 8) AS shares_mints,
    count(*) AS num_mint_txs
  FROM ondo_transfer
  WHERE "from" = '0x0000000000000000000000000000000000000000'
    AND stock_ticker = ${t}
  GROUP BY 1, 2
),
ondo_burns AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    stock_ticker,
    sum(value) / power(10, 8) AS shares_burned,
    count(*) AS num_burn_txs
  FROM ondo_transfer
  WHERE "to" = '0x0000000000000000000000000000000000000000'
    AND stock_ticker = ${t}
  GROUP BY 1, 2
),
ondo_transfers AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    stock_ticker,
    sum(value) / power(10, 18) AS transfer_amount
  FROM ondo_transfer
  WHERE ("to" != '0x0000000000000000000000000000000000000000'
    AND "from" != '0x0000000000000000000000000000000000000000')
    AND stock_ticker = ${t}
  GROUP BY 1, 2
),
ondo_data AS (
  SELECT
    a.date,
    COALESCE(b.stock_ticker, ${t}) AS stock_ticker,
    b.shares_mints,
    b.num_mint_txs,
    c.shares_burned,
    c.num_burn_txs,
    d.transfer_amount,
    (d.transfer_amount * e.close_price) AS usd_transfer_value,
    e.close_price,
    'ondo' AS protocol,
    'ethereum' AS network
  FROM date_range a
  LEFT JOIN ondo_mints b ON a.date = b.date
  LEFT JOIN ondo_burns c ON a.date = c.date
  LEFT JOIN ondo_transfers d ON a.date = d.date
  LEFT JOIN prices e ON a.date = e.date
),
xstock_mints AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    b.stock_ticker,
    sum(value) / power(10, 8) AS shares_mints,
    count(*) AS num_mint_txs
  FROM xstock_transfer a
  LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
  WHERE "from" = '0x0000000000000000000000000000000000000000'
    AND b.stock_ticker = ${t}
  GROUP BY 1, 2
),
xstock_burns AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    b.stock_ticker,
    sum(value) / power(10, 8) AS shares_burned,
    count(*) AS num_burn_txs
  FROM xstock_transfer a
  LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
  WHERE "to" = '0x0000000000000000000000000000000000000000'
    AND b.stock_ticker = ${t}
  GROUP BY 1, 2
),
xstock_transfers AS (
  SELECT
    to_timestamp(block_timestamp)::date AS date,
    b.stock_ticker,
    sum(value) / power(10, 18) AS transfer_amount
  FROM xstock_transfer a
  LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
  WHERE ("to" != '0x0000000000000000000000000000000000000000'
    AND "from" != '0x0000000000000000000000000000000000000000')
    AND b.stock_ticker = ${t}
  GROUP BY 1, 2
),
xstock_data AS (
  SELECT
    a.date,
    COALESCE(b.stock_ticker, ${t}) AS stock_ticker,
    b.shares_mints,
    b.num_mint_txs,
    c.shares_burned,
    c.num_burn_txs,
    d.transfer_amount,
    (d.transfer_amount * e.close_price) AS usd_transfer_value,
    e.close_price,
    'xstock' AS protocol,
    'ethereum' AS network
  FROM date_range a
  LEFT JOIN xstock_mints b ON a.date = b.date
  LEFT JOIN xstock_burns c ON a.date = c.date
  LEFT JOIN xstock_transfers d ON a.date = d.date
  LEFT JOIN prices e ON a.date = e.date
)
SELECT * FROM xstock_data
UNION ALL
SELECT * FROM ondo_data
ORDER BY date, protocol
`;
}

export interface TransfersMintsBurnsRow {
  date: string;
  stock_ticker: string | null;
  shares_mints: string | null;
  num_mint_txs: string | null;
  shares_burned: string | null;
  num_burn_txs: string | null;
  transfer_amount: string | null;
  usd_transfer_value: string | null;
  close_price: string | null;
  protocol: string;
  network: string;
}

export async function getTransfersMintsBurns(
  ticker: string
): Promise<TransfersMintsBurnsRow[]> {
  const query = buildQuery(ticker);
  const rows = await executeSQLQuery(query);
  return (rows ?? []).map((r: Record<string, unknown>) => ({
    date: r.date as string,
    stock_ticker: r.stock_ticker != null ? String(r.stock_ticker) : null,
    shares_mints: r.shares_mints != null ? String(r.shares_mints) : null,
    num_mint_txs: r.num_mint_txs != null ? String(r.num_mint_txs) : null,
    shares_burned: r.shares_burned != null ? String(r.shares_burned) : null,
    num_burn_txs: r.num_burn_txs != null ? String(r.num_burn_txs) : null,
    transfer_amount: r.transfer_amount != null ? String(r.transfer_amount) : null,
    usd_transfer_value: r.usd_transfer_value != null ? String(r.usd_transfer_value) : null,
    close_price: r.close_price != null ? String(r.close_price) : null,
    protocol: r.protocol as string,
    network: r.network as string,
  }));
}
