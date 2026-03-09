import { executeSQLQuery } from "../../../executeSqlQuery";

const QUERY = `
  WITH prices AS (
    SELECT
	  a.*,
	  to_timestamp(a.bar_timestamp / 1000.0)::date AS bar_date,
	  b.share_class_shares_outstanding,
	  (a.close_price * b.share_class_shares_outstanding) AS total_marketcap
	FROM daily_stock_summary a
	LEFT JOIN ticker_reference b ON a.ticker = b.ticker
	INNER JOIN (
	  SELECT ticker, MAX(bar_timestamp) AS max_ts
	  FROM daily_stock_summary
	  GROUP BY ticker
	) latest ON a.ticker = latest.ticker AND a.bar_timestamp = latest.max_ts
  ),
  xstocks_tickers AS (
    SELECT
      new_token AS contract_address,
      left(symbol, length(symbol) - 1) AS stock_ticker
    FROM xstock_deployed
  ),
  total_supply AS (
    SELECT stock_ticker, contract_address, 'ondo' AS protocol, sum(value / power(10, 18)) AS amount
    FROM ondo_transfer
    WHERE "from" = '0x0000000000000000000000000000000000000000'
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT stock_ticker, contract_address, 'ondo' AS protocol, -sum(value / power(10, 18)) AS amount
    FROM ondo_transfer
    WHERE "to" = '0x0000000000000000000000000000000000000000'
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT b.stock_ticker, b.contract_address, 'xstock' AS protocol, sum(a.value / power(10, 18)) AS amount
    FROM xstock_transfer a
    LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
    WHERE a."from" = '0x0000000000000000000000000000000000000000'
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT b.stock_ticker, b.contract_address, 'xstock' AS protocol, -sum(a.value / power(10, 18)) AS amount
    FROM xstock_transfer a
    LEFT JOIN xstocks_tickers b ON a.contract_address = b.contract_address
    WHERE a."to" = '0x0000000000000000000000000000000000000000'
    GROUP BY 1, 2, 3
    UNION ALL
    SELECT 'EXOD' as stock_ticker, '213345970' as contract_address, 'securitized' as protocol, sum(amount / power(10,8)) as amount
    FROM algorand_asset_balances
    WHERE amount > 0 AND address != 'MAKF3GL52O5O6ENRRLJSEJRLTR74E323JBZIWMMGLZT5PNZ4NDTEEODN7A'
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
`;

export interface OnchainMarketcapRow {
  stock_ticker: string;
  protocol: string;
  onchain_supply: string | null;
  close_price: string | null;
  total_marketcap: string | null;
  onchain_marketcap: string | null;
  percent_of_mcap_onchain: string | null;
}

export async function getOnchainMarketcap(): Promise<OnchainMarketcapRow[]> {
  const rows = await executeSQLQuery(QUERY);
  return (rows ?? []).map((r: Record<string, unknown>) => ({
    stock_ticker: r.stock_ticker as string,
    protocol: r.protocol as string,
    onchain_supply: r.onchain_supply != null ? String(r.onchain_supply) : null,
    close_price: r.close_price != null ? String(r.close_price) : null,
    total_marketcap: r.total_marketcap != null ? String(r.total_marketcap) : null,
    onchain_marketcap: r.onchain_marketcap != null ? String(r.onchain_marketcap) : null,
    percent_of_mcap_onchain: r.percent_of_mcap_onchain != null ? String(r.percent_of_mcap_onchain) : null,
  }));
}
