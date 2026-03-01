export type Protocol = 'ondo' | 'xstock';
export type Interval = '1h' | '1d';
export type Period = '24h' | '7d' | '30d' | '90d';
export type Direction = 'in' | 'out' | 'all';
export type ByVolume = 'sent' | 'received';

export interface TimeSeriesPoint {
  contractAddress: string;
  tokenName?: string;
  bucket: string;
  volume?: string;
  transferCount?: string;
}

export interface TimeSeriesResponse {
  protocol: Protocol;
  interval: string;
  byStock: TimeSeriesPoint[];
}

export interface TokenLeaderboardItem {
  contractAddress: string;
  tokenName?: string;
  volume: string;
  transferCount: string;
}

export interface TokenLeaderboardResponse {
  protocol: Protocol;
  period: string;
  byStock: TokenLeaderboardItem[];
}

export interface AddressLeaderboardItem {
  address: string;
  contractAddress: string;
  tokenName?: string;
  volume: string;
  transferCount: string;
}

export interface AddressLeaderboardResponse {
  protocol: Protocol;
  by: ByVolume;
  period: string;
  byStock: AddressLeaderboardItem[];
}

export interface TokenStats {
  contractAddress: string;
  tokenName?: string;
  volume: string;
  transferCount: string;
  uniqueSenders: string;
  uniqueReceivers: string;
}

export interface TokenStatsResponse {
  protocol: Protocol;
  stock: TokenStats;
}

export interface Transfer {
  id: string;
  contractAddress: string;
  tokenName?: string;
  from: string;
  to: string;
  value: string;
  blockNumber: string;
  blockTimestamp: string;
  transactionHash: string;
  logIndex: string;
}

export interface TransfersResponse {
  protocol: Protocol;
  contractAddress?: string;
  transfers: Transfer[];
  nextCursor?: string | null;
}

export interface AddressSummary {
  contractAddress: string;
  tokenName?: string;
  totalSent: string;
  sendCount: string;
  totalReceived: string;
  receiveCount: string;
}

export interface AddressSummaryResponse {
  protocol: Protocol;
  address: string;
  period: string;
  byStock: AddressSummary[];
}

export interface GlobalStats {
  period: string;
  totalVolume: string;
  totalTransferCount: number;
  uniqueTokens: number;
  uniqueAddresses: number;
}

export interface OnchainMarketcapItem {
  stock_ticker: string;
  protocol: string;
  onchain_supply: string | null;
  close_price: string | null;
  total_marketcap: string | null;
  onchain_marketcap: string | null;
  percent_of_mcap_onchain: string | null;
}

export interface OnchainMarketcapResponse {
  data: OnchainMarketcapItem[];
}

export interface HolderBalanceItem {
  address: string;
  ticker: string;
  contract_address: string;
  close_price: string | null;
  balance: string | null;
  usd_balance: string | null;
  protocol: string;
}

export interface HolderBalancesResponse {
  data: HolderBalanceItem[];
}

export interface MarketcapOverTimeItem {
  date: string;
  stock_ticker: string;
  contract_address: string;
  total_supply: string | null;
  close_price: number | null;
  volume: number | null;
  onchain_marketcap: string | null;
}

export interface MarketcapOverTimeResponse {
  data: MarketcapOverTimeItem[];
  ticker: string;
}

export interface MarketcapOnchainVsOffchainItem {
  stock_ticker: string;
  protocol: string;
  onchain_supply: string | null;
  close_price: string | null;
  total_marketcap: string | null;
  onchain_marketcap: string | null;
  percent_of_mcap_onchain: string | null;
}

export interface MarketcapOnchainVsOffchainResponse {
  data: MarketcapOnchainVsOffchainItem[];
}

export interface StatsByProtocolResponse {
  period: string;
  ondo: {
    totalVolume: number;
    totalTransfers: number;
    byStock: TokenLeaderboardItem[];
  };
  xstock: {
    totalVolume: number;
    totalTransfers: number;
    byStock: TokenLeaderboardItem[];
  };
}
