import { useQuery } from "@tanstack/react-query";
import { api } from "../api";
import type {
  Protocol,
  Interval,
  Period,
  Direction,
  ByVolume,
} from "../types";

export function useVolume(params: {
  protocol?: Protocol;
  interval?: Interval;
  period?: Period;
  contractAddress?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "volume", params],
    queryFn: () => api.volume(params),
    enabled: true,
  });
}

export function useTransferCount(params: {
  protocol?: Protocol;
  interval?: Interval;
  period?: Period;
  contractAddress?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "transferCount", params],
    queryFn: () => api.transferCount(params),
    enabled: true,
  });
}

export function useTokensVolume(params: {
  protocol?: Protocol;
  period?: Period;
  limit?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "tokens", "volume", params],
    queryFn: () => api.tokensVolume(params),
    enabled: true,
  });
}

export function useTokensActivity(params: {
  protocol?: Protocol;
  period?: Period;
  limit?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "tokens", "activity", params],
    queryFn: () => api.tokensActivity(params),
    enabled: true,
  });
}

export function useAddressesVolume(params: {
  protocol?: Protocol;
  by?: ByVolume;
  period?: Period;
  limit?: string;
  contractAddress?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "addresses", "volume", params],
    queryFn: () => api.addressesVolume(params),
    enabled: true,
  });
}

export function useTokenStats(
  contractAddress: string | undefined,
  params: { protocol?: Protocol; period?: Period }
) {
  return useQuery({
    queryKey: ["analytics", "token", contractAddress, "stats", params],
    queryFn: () => api.tokenStats(contractAddress!, params),
    enabled: !!contractAddress,
  });
}

export function useTokenTransfers(
  contractAddress: string | undefined,
  params: { protocol?: Protocol; limit?: string; cursor?: string }
) {
  return useQuery({
    queryKey: ["analytics", "token", contractAddress, "transfers", params],
    queryFn: () => api.tokenTransfers(contractAddress!, params),
    enabled: !!contractAddress,
  });
}

export function useTokenTransfersRecent(
  contractAddress: string | undefined,
  params: { protocol?: Protocol; limit?: string }
) {
  return useQuery({
    queryKey: ["analytics", "token", contractAddress, "transfersRecent", params],
    queryFn: () => api.tokenTransfersRecent(contractAddress!, params),
    enabled: !!contractAddress,
  });
}

export function useAddressTransfers(
  address: string | undefined,
  params: {
    direction?: Direction;
    protocol?: Protocol;
    contractAddress?: string;
    limit?: string;
    cursor?: string;
  }
) {
  return useQuery({
    queryKey: ["analytics", "address", address, "transfers", params],
    queryFn: () => api.addressTransfers(address!, params),
    enabled: !!address,
  });
}

export function useAddressSummary(
  address: string | undefined,
  params: { protocol?: Protocol; period?: Period; contractAddress?: string }
) {
  return useQuery({
    queryKey: ["analytics", "address", address, "summary", params],
    queryFn: () => api.addressSummary(address!, params),
    enabled: !!address,
  });
}

export function useTransfersRecent(params: {
  protocol?: Protocol;
  limit?: string;
  contractAddress?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "transfers", "recent", params],
    queryFn: () => api.transfersRecent(params),
    enabled: true,
  });
}

export function useStats(params: { period?: Period; protocol?: Protocol }) {
  return useQuery({
    queryKey: ["analytics", "stats", params],
    queryFn: () => api.stats(params),
    enabled: true,
  });
}

export function useStatsByProtocol(params: { period?: Period }) {
  return useQuery({
    queryKey: ["analytics", "stats", "byProtocol", params],
    queryFn: () => api.statsByProtocol(params),
    enabled: true,
  });
}

export function useTransferSharesVolume(params: {
  interval?: Interval;
  period?: Period;
  contractAddress?: string;
}) {
  return useQuery({
    queryKey: ["analytics", "transferShares", "volume", params],
    queryFn: () => api.transferSharesVolume(params),
    enabled: true,
  });
}

export function useOnchainMarketcap() {
  return useQuery({
    queryKey: ["analytics", "onchainMarketcap"],
    queryFn: () => api.onchainMarketcap(),
    enabled: true,
  });
}

export function useMarketcapOverTime(ticker: string | undefined) {
  return useQuery({
    queryKey: ["analytics", "marketcapOverTime", ticker],
    queryFn: () => api.marketcapOverTime(ticker!),
    enabled: !!ticker,
  });
}

export function useMarketcapOnchainVsOffchain() {
  return useQuery({
    queryKey: ["analytics", "marketcapOnchainVsOffchain"],
    queryFn: () => api.marketcapOnchainVsOffchain(),
    enabled: true,
  });
}

export function useHolderBalances(params: {
  ticker?: string;
  address?: string;
  protocol?: Protocol;
}) {
  return useQuery({
    queryKey: ["analytics", "holderBalances", params],
    queryFn: () => api.holderBalances(params),
    enabled: !!(params.ticker || params.address),
  });
}
