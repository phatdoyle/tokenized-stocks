import type {
  TimeSeriesResponse,
  TokenLeaderboardResponse,
  AddressLeaderboardResponse,
  TokenStatsResponse,
  TransfersResponse,
  AddressSummaryResponse,
  GlobalStats,
  StatsByProtocolResponse,
  OnchainMarketcapResponse,
  MarketcapOverTimeResponse,
  MarketcapOnchainVsOffchainResponse,
  Protocol,
  Interval,
  Period,
  Direction,
  ByVolume,
} from './types';

const API_BASE = 'http://localhost:42069';

async function fetchAPI<T>(endpoint: string, params?: Record<string, string | undefined>): Promise<T> {
  const url = new URL(endpoint, API_BASE);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
    });
  }
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`API error: ${res.statusText}`);
  }
  return res.json();
}

export const api = {
  // Time-series
  volume: (params: { protocol?: Protocol; interval?: Interval; period?: Period; contractAddress?: string }) =>
    fetchAPI<TimeSeriesResponse>('/analytics/volume', params),

  transferCount: (params: { protocol?: Protocol; interval?: Interval; period?: Period; contractAddress?: string }) =>
    fetchAPI<TimeSeriesResponse>('/analytics/transfer-count', params),

  // Leaderboards
  tokensVolume: (params: { protocol?: Protocol; period?: Period; limit?: string }) =>
    fetchAPI<TokenLeaderboardResponse>('/analytics/tokens/volume', params),

  tokensActivity: (params: { protocol?: Protocol; period?: Period; limit?: string }) =>
    fetchAPI<TokenLeaderboardResponse>('/analytics/tokens/activity', params),

  addressesVolume: (params: { protocol?: Protocol; by?: ByVolume; period?: Period; limit?: string; contractAddress?: string }) =>
    fetchAPI<AddressLeaderboardResponse>('/analytics/addresses/volume', params),

  // Token-level
  tokenStats: (contractAddress: string, params: { protocol?: Protocol; period?: Period }) =>
    fetchAPI<TokenStatsResponse>(`/analytics/tokens/${contractAddress}/stats`, params),

  tokenTransfers: (contractAddress: string, params: { protocol?: Protocol; limit?: string; cursor?: string }) =>
    fetchAPI<TransfersResponse>(`/analytics/tokens/${contractAddress}/transfers`, params),

  tokenTransfersRecent: (contractAddress: string, params: { protocol?: Protocol; limit?: string }) =>
    fetchAPI<TransfersResponse>(`/analytics/tokens/${contractAddress}/transfers/recent`, params),

  // Address-level
  addressTransfers: (address: string, params: { direction?: Direction; protocol?: Protocol; contractAddress?: string; limit?: string; cursor?: string }) =>
    fetchAPI<TransfersResponse>(`/analytics/addresses/${address}/transfers`, params),

  addressSummary: (address: string, params: { protocol?: Protocol; period?: Period; contractAddress?: string }) =>
    fetchAPI<AddressSummaryResponse>(`/analytics/addresses/${address}/summary`, params),

  // Recent/feed
  transfersRecent: (params: { protocol?: Protocol; limit?: string; contractAddress?: string }) =>
    fetchAPI<TransfersResponse>('/analytics/transfers/recent', params),

  // Global stats
  stats: (params: { period?: Period; protocol?: Protocol }) =>
    fetchAPI<GlobalStats>('/analytics/stats', params),

  statsByProtocol: (params: { period?: Period }) =>
    fetchAPI<StatsByProtocolResponse>('/analytics/stats/by-protocol', params),

  // xStock TransferShares
  transferSharesVolume: (params: { interval?: Interval; period?: Period; contractAddress?: string }) =>
    fetchAPI<TimeSeriesResponse>('/analytics/transfer-shares/volume', params),

  // Onchain market cap
  onchainMarketcap: () =>
    fetchAPI<OnchainMarketcapResponse>('/onchain-marketcap'),

  marketcapOverTime: (ticker: string) =>
    fetchAPI<MarketcapOverTimeResponse>(`/marketcap-over-time/${encodeURIComponent(ticker)}`),

  marketcapOnchainVsOffchain: () =>
    fetchAPI<MarketcapOnchainVsOffchainResponse>('/marketcap-onchain-vs-offchain'),
};
