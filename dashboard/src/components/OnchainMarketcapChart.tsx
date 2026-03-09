import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { D3Treemap } from './D3Treemap';
import type { OnchainMarketcapItem } from '../types';
import { useOnchainMarketcap, useMarketcapOverTime } from '../hooks/useAnalytics';
import { Card } from './ui/Card';
import { ControlBar, SelectField } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import { getChartColor } from '../lib/chartColors';

function fmtMktcap(value: number) {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function fmtDate(value: string | number) {
  if (value == null) return '';
  const d = typeof value === 'string' ? new Date(value) : new Date(value);
  return isNaN(d.getTime()) ? String(value) : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function OnchainMarketcapChart() {
  const { data, isLoading: loading, error } = useOnchainMarketcap();
  const navigate = useNavigate();

  const EXCLUDED_TICKERS = ['TBLL'];
  const symbols = useMemo(
    () => [...new Set((data?.data ?? []).map((d) => d.stock_ticker).filter((t) => t && !EXCLUDED_TICKERS.includes(t)))].sort() as string[],
    [data?.data],
  );

  const [selectedTicker, setSelectedTicker] = useState<string>('');
  const [groupByNetwork, setGroupByNetwork] = useState(false);
  const [sortKey, setSortKey] = useState<string | null>('total');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    if (symbols.length > 0 && !symbols.includes(selectedTicker)) {
      setSelectedTicker(symbols[0]!);
    }
  }, [symbols, selectedTicker]);

  useEffect(() => {
    setSortKey('total');
  }, [groupByNetwork]);

  const effectiveTicker = symbols.includes(selectedTicker) ? selectedTicker : symbols[0];

  const { data: timeData, isLoading: timeLoading } = useMarketcapOverTime(effectiveTicker);

  const rawData: OnchainMarketcapItem[] = data?.data ?? [];

  const groupedTableData = useMemo(() => {
    const map = new Map<
      string,
      { stock_ticker: string; close_price: string | null; ondo_marketcap: number; xstock_marketcap: number; securitize_marketcap: number; total_marketcap: number }
    >();
    for (const item of rawData) {
      const ticker = item.stock_ticker;
      if (!ticker || EXCLUDED_TICKERS.includes(ticker)) continue;
      const mcap = item.onchain_marketcap ? parseFloat(item.onchain_marketcap) : 0;
      const existing = map.get(ticker);
      if (!existing) {
        map.set(ticker, {
          stock_ticker: ticker,
          close_price: item.close_price,
          ondo_marketcap: item.protocol === 'ondo' ? mcap : 0,
          xstock_marketcap: item.protocol === 'xstock' ? mcap : 0,
          securitize_marketcap: item.protocol === 'securitized' ? mcap : 0,
          total_marketcap: mcap,
        });
      } else {
        if (item.protocol === 'ondo') existing.ondo_marketcap += mcap;
        else if (item.protocol === 'xstock') existing.xstock_marketcap += mcap;
        else if (item.protocol === 'securitized') existing.securitize_marketcap += mcap;
        existing.total_marketcap = existing.ondo_marketcap + existing.xstock_marketcap + existing.securitize_marketcap;
      }
    }
    return Array.from(map.values()).sort((a, b) => b.total_marketcap - a.total_marketcap);
  }, [rawData]);

  const networks = useMemo(() => {
    const set = new Set<string>();
    for (const item of rawData) {
      const n = item.network ?? 'unknown';
      if (n) set.add(n);
    }
    return [...set].sort();
  }, [rawData]);

  const groupedByNetworkTableData = useMemo(() => {
    type Row = { stock_ticker: string; networks: Record<string, number>; total_marketcap: number };
    const map = new Map<string, Row>();
    for (const item of rawData) {
      const ticker = item.stock_ticker;
      const network = item.network ?? 'unknown';
      if (!ticker || EXCLUDED_TICKERS.includes(ticker)) continue;
      const mcap = item.onchain_marketcap ? parseFloat(item.onchain_marketcap) : 0;
      const existing = map.get(ticker);
      if (!existing) {
        const networks: Record<string, number> = { [network]: mcap };
        map.set(ticker, {
          stock_ticker: ticker,
          networks,
          total_marketcap: mcap,
        });
      } else {
        existing.networks[network] = (existing.networks[network] ?? 0) + mcap;
        existing.total_marketcap += mcap;
      }
    }
    return Array.from(map.values()).sort((a, b) => b.total_marketcap - a.total_marketcap);
  }, [rawData]);

  const treemapData = useMemo(() => {
    return groupedTableData
      .filter((d) => d.total_marketcap > 0)
      .sort((a, b) => b.total_marketcap - a.total_marketcap)
      .slice(0, 20)
        .map((item, idx) => {
        const tickerColor = getChartColor(idx);
        const children = [
          item.ondo_marketcap > 0 && {
            name: 'Ondo',
            value: item.ondo_marketcap,
            fill: tickerColor,
            stock_ticker: item.stock_ticker,
          },
          item.xstock_marketcap > 0 && {
            name: 'xStock',
            value: item.xstock_marketcap,
            fill: tickerColor,
            stock_ticker: item.stock_ticker,
          },
          item.securitize_marketcap > 0 && {
            name: 'Securitize',
            value: item.securitize_marketcap,
            fill: tickerColor,
            stock_ticker: item.stock_ticker,
          },
        ].filter(Boolean) as { name: string; value: number; fill: string; stock_ticker: string }[];
        return {
          name: item.stock_ticker,
          stock_ticker: item.stock_ticker,
          fill: tickerColor,
          children,
        };
      })
      .filter((d) => d.children.length > 0);
  }, [groupedTableData]);

  const total = groupedTableData
    .filter((d) => d.total_marketcap > 0)
    .slice(0, 20)
    .reduce((s, d) => s + d.total_marketcap, 0);

  const areaData = timeData?.data?.map((d) => ({
    date:            d.date,
    onchain_marketcap: d.onchain_marketcap ? parseFloat(d.onchain_marketcap) : 0,
  })) ?? [];

  const tickerOptions = [...symbols].sort().map((s) => ({ value: s, label: s }));

  type ProtocolRow = { stock_ticker: string; ondo_marketcap: number; xstock_marketcap: number; securitize_marketcap: number; total_marketcap: number };
  type NetworkRow = { stock_ticker: string; networks: Record<string, number>; total_marketcap: number };
  const tableData = groupByNetwork ? groupedByNetworkTableData : groupedTableData;
  const sortedTableData = useMemo(() => {
    if (!sortKey) return tableData;
    if (groupByNetwork) {
      const rows = tableData as NetworkRow[];
      const getSortValue = (r: NetworkRow) =>
        sortKey === 'ticker' ? r.stock_ticker : sortKey === 'total' ? r.total_marketcap : (r.networks[sortKey] ?? 0);
      return [...rows].sort((a, b) => {
        const va = getSortValue(a);
        const vb = getSortValue(b);
        const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
        return sortDirection === 'asc' ? cmp : -cmp;
      });
    }
    const rows = tableData as ProtocolRow[];
    const col = [
      { key: 'ticker', sortValue: (r: ProtocolRow) => r.stock_ticker },
      { key: 'ondo', sortValue: (r: ProtocolRow) => r.ondo_marketcap },
      { key: 'xstock', sortValue: (r: ProtocolRow) => r.xstock_marketcap },
      { key: 'securitize', sortValue: (r: ProtocolRow) => r.securitize_marketcap },
      { key: 'total', sortValue: (r: ProtocolRow) => r.total_marketcap },
    ].find((c) => c.key === sortKey);
    if (!col) return tableData;
    return [...rows].sort((a, b) => {
      const va = col.sortValue(a);
      const vb = col.sortValue(b);
      const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
      return sortDirection === 'asc' ? cmp : -cmp;
    });
  }, [tableData, sortKey, sortDirection, groupByNetwork]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('desc');
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Onchain Market Cap"
        subtitle="Token supply × price — computed from onchain data"
      />

      {loading && <LoadingState />}
      {error   && <ErrorState message={error.message} />}
      {!loading && !error && groupedTableData.length === 0 && <EmptyState />}

      {!loading && !error && groupedTableData.length > 0 && (
        <>
          {/* Distribution + table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card noPadding className="flex flex-col min-h-[400px]">
              <div className="p-5 border-b border-subtle shrink-0 flex items-center justify-between gap-4">
                <h2 className="font-display text-sm font-semibold text-surface-100">Distribution</h2>
                <span className="font-mono text-sm font-medium text-accent">{fmtMktcap(total)} total</span>
              </div>
              <div className="flex-1 min-h-0 p-5 flex min-h-[280px]">
                <D3Treemap
                  data={treemapData}
                  total={total}
                  fmtValue={fmtMktcap}
                  onNodeClick={(node) => node.stock_ticker && navigate(`/ticker/${node.stock_ticker}`)}
                  className="flex-1"
                />
              </div>
            </Card>

            <Card noPadding>
              <div className="p-5 border-b border-subtle flex items-center justify-between gap-4">
                <h2 className="font-display text-sm font-semibold text-surface-100">Marketcap</h2>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={groupByNetwork}
                    onChange={(e) => setGroupByNetwork(e.target.checked)}
                    className="rounded border-subtle bg-surface-700 text-accent focus:ring-accent/50"
                  />
                  <span className="text-xs font-medium text-secondary">Group by network</span>
                </label>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
              {groupByNetwork ? (
                <DataTable<NetworkRow>
                  data={sortedTableData as NetworkRow[]}
                  rowKey={(item) => item.stock_ticker}
                  onRowClick={(item) => navigate(`/ticker/${item.stock_ticker}`)}
                  sortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                  columns={[
                    {
                      key: 'ticker',
                      header: 'Ticker',
                      sortable: true,
                      sortValue: (item) => item.stock_ticker,
                      render: (item) => (
                        <span className="font-mono font-semibold text-accent">{item.stock_ticker}</span>
                      ),
                    },
                    ...networks.map((net) => ({
                      key: net,
                      header: net.charAt(0).toUpperCase() + net.slice(1),
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item: NetworkRow) => item.networks[net] ?? 0,
                      render: (item: NetworkRow) => (
                        <span className="font-mono text-surface-200">
                          {(item.networks[net] ?? 0) > 0 ? fmtMktcap(item.networks[net]!) : '—'}
                        </span>
                      ),
                    })),
                    {
                      key: 'total',
                      header: 'Total',
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item) => item.total_marketcap,
                      render: (item) => (
                        <span className="font-mono text-surface-100 font-medium">
                          {fmtMktcap(item.total_marketcap)}
                        </span>
                      ),
                    },
                  ]}
                />
              ) : (
                <DataTable<ProtocolRow>
                  data={sortedTableData as ProtocolRow[]}
                  rowKey={(item) => item.stock_ticker}
                  onRowClick={(item) => navigate(`/ticker/${item.stock_ticker}`)}
                  sortKey={sortKey}
                  sortDirection={sortDirection}
                  onSort={handleSort}
                  columns={[
                    {
                      key: 'ticker',
                      header: 'Ticker',
                      sortable: true,
                      sortValue: (item) => item.stock_ticker,
                      render: (item) => (
                        <span className="font-mono font-semibold text-accent">{item.stock_ticker}</span>
                      ),
                    },
                    {
                      key: 'ondo',
                      header: 'Ondo',
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item) => item.ondo_marketcap,
                      render: (item) => (
                        <span className="font-mono text-surface-200">
                          {item.ondo_marketcap > 0 ? fmtMktcap(item.ondo_marketcap) : '—'}
                        </span>
                      ),
                    },
                    {
                      key: 'xstock',
                      header: 'Xstock',
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item) => item.xstock_marketcap,
                      render: (item) => (
                        <span className="font-mono text-surface-200">
                          {item.xstock_marketcap > 0 ? fmtMktcap(item.xstock_marketcap) : '—'}
                        </span>
                      ),
                    },
                    {
                      key: 'securitize',
                      header: 'Securitize',
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item) => item.securitize_marketcap,
                      render: (item) => (
                        <span className="font-mono text-surface-200">
                          {item.securitize_marketcap > 0 ? fmtMktcap(item.securitize_marketcap) : '—'}
                        </span>
                      ),
                    },
                    {
                      key: 'total',
                      header: 'Total',
                      align: 'right' as const,
                      sortable: true,
                      sortValue: (item) => item.total_marketcap,
                      render: (item) => (
                        <span className="font-mono text-surface-100 font-medium">
                          {fmtMktcap(item.total_marketcap)}
                        </span>
                      ),
                    },
                  ]}
                />
              )}
              </div>
            </Card>
          </div>

          {/* Market Cap Over Time */}
          <Card noPadding>
            <div className="p-5 border-b border-subtle flex items-center justify-between gap-4">
              <h2 className="font-display text-sm font-semibold text-surface-100">Market Cap Over Time</h2>
              {tickerOptions.length > 0 && (
                <ControlBar className="!p-0 !border-0 !bg-transparent !mb-0">
                  <SelectField
                    label=""
                    value={effectiveTicker ?? ''}
                    onChange={setSelectedTicker}
                    options={tickerOptions}
                    className="min-w-[100px]"
                  />
                </ControlBar>
              )}
            </div>
            <div className="p-5">
              {timeLoading && <LoadingState message="Loading time series…" />}
              {!timeLoading && areaData.length === 0 && <EmptyState message={`No time series data for ${effectiveTicker}`} />}
              {!timeLoading && areaData.length > 0 && (
                <ChartContainer height={320}>
                  <AreaChart data={areaData}>
                    <defs>
                      <linearGradient id="mcGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#00E5C3" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#00E5C3" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={fmtDate}
                      tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 'auto']}
                      tickFormatter={fmtMktcap}
                      tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                      axisLine={false}
                      tickLine={false}
                      width={70}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => (
                        <ChartTooltip active={active}>
                          <p className="text-xs text-secondary font-mono mb-1">{label ? fmtDate(label) : ''}</p>
                          {payload?.map((entry) => (
                            <p key="mc" className="font-mono text-surface-100">
                              {fmtMktcap(entry.value as number)}
                            </p>
                          ))}
                        </ChartTooltip>
                      )}
                    />
                    <Area
                      type="monotone"
                      dataKey="onchain_marketcap"
                      stroke="#00E5C3"
                      strokeWidth={2}
                      fill="url(#mcGrad)"
                      dot={false}
                      activeDot={{ r: 4, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ChartContainer>
              )}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
