import { executeSQLQuery } from "../../../executeSqlQuery";

/** Escape ticker for safe use in a SQL string literal (single-quote escape). */
function escapeTickerLiteral(ticker: string): string {
  return `'${ticker.replace(/'/g, "''")}'`;
}

function buildQuery(ticker: string): string {
  const t = escapeTickerLiteral(ticker);
  return `
  WITH daily AS (
    SELECT
      date,
      stock_ticker,
      contract_address,
      network,
      sum(amount) AS amount
    FROM (
      SELECT
        to_timestamp(block_timestamp)::date AS date,
        stock_ticker,
        contract_address,
        network,
        sum(value / power(10, 18)) AS amount
      FROM ondo_transfer
      WHERE "from" = '0x0000000000000000000000000000000000000000'
        AND stock_ticker = ${t}
      GROUP BY 1, 2, 3, 4
      UNION ALL
      SELECT
        to_timestamp(block_timestamp)::date AS date,
        stock_ticker,
        contract_address,
        network,
        -sum(value / power(10, 18)) AS amount
      FROM ondo_transfer
      WHERE "to" = '0x0000000000000000000000000000000000000000'
        AND stock_ticker = ${t}
      GROUP BY 1, 2, 3, 4
      UNION ALL
      SELECT
       to_timestamp(a.block_timestamp)::date AS date,
        LEFT(b.symbol, LENGTH(b.symbol) - 1) as stock_ticker,
        a.contract_address,
        a.network,
        sum(a.value / power(10, 18)) AS amount
      FROM xstock_transfer a
      left join xstock_deployed b
      on a.contract_address = b.new_token
      WHERE "to" = '0x0000000000000000000000000000000000000000'
        AND stock_ticker = ${t}
      GROUP BY 1, 2, 3, 4
      UNION ALL
      SELECT
        to_timestamp(a.block_timestamp)::date AS date,
        LEFT(b.symbol, LENGTH(b.symbol) - 1) as stock_ticker,
        a.contract_address,
        a.network,
        sum(a.value / power(10, 18)) AS amount
      FROM xstock_transfer a
      left join xstock_deployed b
      on a.contract_address = b.new_token
      WHERE "from" = '0x0000000000000000000000000000000000000000'
        AND stock_ticker = ${t}
      GROUP BY 1, 2, 3, 4
    ) t
    GROUP BY 1, 2, 3, 4
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
    FROM daily_stock_summary
    WHERE ticker = ${t}
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
`;
}

export interface OnchainMarketcapOverTimeRow {
  date: string;
  stock_ticker: string;
  contract_address: string;
  network: string;
  total_supply: string | null;
  close_price: string | null;
  volume: string | null;
  onchain_marketcap: string | null;
}

export async function getOnchainMarketcapOverTime(
  ticker: string
): Promise<OnchainMarketcapOverTimeRow[]> {
  const query = buildQuery(ticker);
  const rows = await executeSQLQuery(query);
  return (rows ?? []).map((r: Record<string, unknown>) => ({
    date: r.date as string,
    stock_ticker: r.stock_ticker as string,
    contract_address: r.contract_address as string,
    network: r.network as string,
    total_supply: r.total_supply != null ? String(r.total_supply) : null,
    close_price: r.close_price != null ? String(r.close_price) : null,
    volume: r.volume != null ? String(r.volume) : null,
    onchain_marketcap: r.onchain_marketcap != null ? String(r.onchain_marketcap) : null,
  }));
}
