import { useState, useMemo, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell,
} from 'recharts';
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

  const EXCLUDED_TICKERS = ['TBLL'];
  const symbols = useMemo(
    () => [...new Set((data?.data ?? []).map((d) => d.stock_ticker).filter((t) => t && !EXCLUDED_TICKERS.includes(t)))].sort() as string[],
    [data?.data],
  );

  const [selectedTicker, setSelectedTicker] = useState<string>('');

  useEffect(() => {
    if (symbols.length > 0 && !symbols.includes(selectedTicker)) {
      setSelectedTicker(symbols[0]!);
    }
  }, [symbols, selectedTicker]);

  const effectiveTicker = symbols.includes(selectedTicker) ? selectedTicker : symbols[0];

  const { data: timeData, isLoading: timeLoading } = useMarketcapOverTime(effectiveTicker);

  const rawData: OnchainMarketcapItem[] = data?.data ?? [];

  const groupedTableData = useMemo(() => {
    const map = new Map<
      string,
      { stock_ticker: string; close_price: string | null; ondo_marketcap: number; xstock_marketcap: number; total_marketcap: number }
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
          total_marketcap: mcap,
        });
      } else {
        if (item.protocol === 'ondo') existing.ondo_marketcap = mcap;
        else if (item.protocol === 'xstock') existing.xstock_marketcap = mcap;
        existing.total_marketcap = existing.ondo_marketcap + existing.xstock_marketcap;
      }
    }
    return Array.from(map.values()).sort((a, b) => b.total_marketcap - a.total_marketcap);
  }, [rawData]);

  const allPieData = groupedTableData.map((item, idx) => ({
    name: item.stock_ticker,
    value: item.total_marketcap,
    stock_ticker: item.stock_ticker,
    idx,
  })).filter((d) => d.value > 0);

  const pieData = [...allPieData]
    .sort((a, b) => b.value - a.value)
    .slice(0, 20);

  const total = pieData.reduce((s, d) => s + d.value, 0);

  const areaData = timeData?.data?.map((d) => ({
    date:            d.date,
    onchain_marketcap: d.onchain_marketcap ? parseFloat(d.onchain_marketcap) : 0,
  })) ?? [];

  const tickerOptions = symbols.map((s) => ({ value: s, label: s }));

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
            <Card noPadding>
              <div className="p-5 border-b border-subtle">
                <h2 className="font-display text-sm font-semibold text-surface-100">Distribution</h2>
              </div>
              <div className="p-5">
                <ChartContainer height={280}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={110}
                      paddingAngle={2}
                      label={({ name }) => name}
                      labelLine
                    >
                      {pieData.map((_entry, idx) => (
                        <Cell key={idx} fill={getChartColor(idx)} fillOpacity={0.9} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (!active || !payload?.length) return null;
                        const p = payload[0]?.payload;
                        const pct = total > 0 ? ((p?.value ?? 0) / total * 100).toFixed(1) : '0';
                        return (
                          <ChartTooltip active={active}>
                            <p className="text-xs text-secondary mb-1">{p?.name}</p>
                            <p className="font-mono text-surface-100">{fmtMktcap(p?.value ?? 0)}</p>
                            <p className="text-xs text-secondary">{pct}% share</p>
                          </ChartTooltip>
                        );
                      }}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </Card>

            <Card noPadding>
              <div className="p-5 border-b border-subtle">
                <h2 className="font-display text-sm font-semibold text-surface-100">All Tokens</h2>
              </div>
              <div className="max-h-[400px] overflow-y-auto">
              <DataTable
                data={groupedTableData}
                rowKey={(item) => item.stock_ticker}
                columns={[
                  {
                    key: 'ticker',
                    header: 'Ticker',
                    render: (item) => (
                      <span className="font-mono font-semibold text-accent">{item.stock_ticker}</span>
                    ),
                  },
                  {
                    key: 'price',
                    header: 'Price',
                    align: 'right',
                    render: (item) => (
                      <span className="font-mono text-surface-100">
                        {item.close_price != null
                          ? `$${parseFloat(item.close_price).toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                          : '—'}
                      </span>
                    ),
                  },
                  {
                    key: 'ondo',
                    header: 'Ondo',
                    align: 'right',
                    render: (item) => (
                      <span className="font-mono text-surface-200">
                        {item.ondo_marketcap > 0 ? fmtMktcap(item.ondo_marketcap) : '—'}
                      </span>
                    ),
                  },
                  {
                    key: 'xstock',
                    header: 'Xstock',
                    align: 'right',
                    render: (item) => (
                      <span className="font-mono text-surface-200">
                        {item.xstock_marketcap > 0 ? fmtMktcap(item.xstock_marketcap) : '—'}
                      </span>
                    ),
                  },
                  {
                    key: 'total',
                    header: 'Total',
                    align: 'right',
                    render: (item) => (
                      <span className="font-mono text-surface-100 font-medium">
                        {fmtMktcap(item.total_marketcap)}
                      </span>
                    ),
                  },
                ]}
              />
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
