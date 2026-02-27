import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, PieChart, Pie } from 'recharts';
import { useStats, useStatsByProtocol, useTokensVolume, useMarketcapOnchainVsOffchain } from '../hooks/useAnalytics';
import { formatVolume18, volume18ToNumber } from '../formatVolume';
import { Card } from './ui/Card';
import { SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState } from './ui/States';
import { PageHeader } from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import { getChartColor } from '../lib/chartColors';
import type { Period, Protocol } from '../types';

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: '24h', label: '24H' },
  { value: '7d',  label: '7D'  },
  { value: '30d', label: '30D' },
  { value: '90d', label: '90D' },
];

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  stagger: number;
}

function StatCard({ label, value, icon, stagger }: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-subtle bg-surface-800/60 p-5 flex flex-col gap-3
        animate-slide-up opacity-0 stagger-${stagger}`}
      style={{ animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-secondary uppercase tracking-wider">{label}</span>
        <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-base">
          {icon}
        </span>
      </div>
      <div className="font-display text-2xl font-semibold text-surface-50 tabular-nums">{value}</div>
    </div>
  );
}

interface ProtocolCardProps {
  name: string;
  totalVolume: number;
  totalTransfers: number;
  uniqueStocks: number;
  dotColor: string;
}

function ProtocolCard({ name, totalVolume, totalTransfers, uniqueStocks, dotColor }: ProtocolCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full`} style={{ background: dotColor }} />
        <span className="font-display font-semibold text-surface-100">{name}</span>
      </div>
      <dl className="grid grid-cols-3 gap-4">
        <div>
          <dt className="text-xs text-secondary mb-1">Volume</dt>
          <dd className="font-mono text-sm text-surface-100 font-medium">
            {formatVolume18(String(totalVolume))}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-secondary mb-1">Transfers</dt>
          <dd className="font-mono text-sm text-surface-100 font-medium">
            {totalTransfers.toLocaleString()}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-secondary mb-1">Tokens</dt>
          <dd className="font-mono text-sm text-surface-100 font-medium">{uniqueStocks}</dd>
        </div>
      </dl>
    </Card>
  );
}

export default function GlobalStats() {
  const [period, setPeriod]     = useState<Period>('24h');
  const [protocol, setProtocol] = useState<Protocol | ''>('');
  const navigate = useNavigate();

  const statsQuery          = useStats({ period, protocol: protocol || undefined });
  const protocolStatsQuery  = useStatsByProtocol({ period });
  const onchainVsOffchainQuery = useMarketcapOnchainVsOffchain();
  const tokensVolumeQuery   = useTokensVolume({
    protocol: (protocol || 'ondo') as Protocol,
    period,
    limit: '20',
  });

  const totalOnchainMarketcap = (onchainVsOffchainQuery.data?.data ?? []).reduce(
    (sum, row) => sum + (row.onchain_marketcap ? parseFloat(row.onchain_marketcap) : 0),
    0
  );
  function fmtMktcap(value: number) {
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  }

  const rawOnchain = onchainVsOffchainQuery.data?.data ?? [];
  const pieDataByTicker = (() => {
    const byTicker = new Map<string, number>();
    for (const row of rawOnchain) {
      const v = row.onchain_marketcap ? parseFloat(row.onchain_marketcap) : 0;
      if (v <= 0) continue;
      const key = row.stock_ticker || 'Unknown';
      byTicker.set(key, (byTicker.get(key) ?? 0) + v);
    }
    return Array.from(byTicker.entries())
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 20);
  })();
  const pieDataByProtocol = (() => {
    const byProtocol = new Map<string, number>();
    for (const row of rawOnchain) {
      const v = row.onchain_marketcap ? parseFloat(row.onchain_marketcap) : 0;
      if (v <= 0) continue;
      const key = row.protocol || 'other';
      byProtocol.set(key, (byProtocol.get(key) ?? 0) + v);
    }
    return [
      { name: 'Ondo', value: byProtocol.get('ondo') ?? 0, color: '#00E5C3' },
      { name: 'xStock', value: byProtocol.get('xstock') ?? 0, color: '#4DA6FF' },
    ].filter((d) => d.value > 0);
  })();
  const totalPie = pieDataByTicker.reduce((s, d) => s + d.value, 0);

  const chartData = tokensVolumeQuery.data?.byStock.map((item, idx) => ({
    name:            item.tokenName || item.contractAddress.slice(0, 10) + '…',
    volume:          volume18ToNumber(item.volume),
    contractAddress: item.contractAddress,
    idx,
  })) ?? [];

  const data         = statsQuery.data;
  const protocolData = protocolStatsQuery.data;
  const loading      = statsQuery.isLoading;
  const error        = statsQuery.error;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Market Overview"
        subtitle="Real-time analytics across tokenized equities"
        action={
          <div className="flex items-center gap-3">
            {/* Protocol toggle */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-800 border border-subtle">
              {(['', 'ondo', 'xstock'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setProtocol(p)}
                  className={[
                    'px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-150',
                    protocol === p
                      ? 'bg-accent text-surface-900'
                      : 'text-secondary hover:text-surface-100',
                  ].join(' ')}
                >
                  {p === '' ? 'All' : p === 'ondo' ? 'Ondo' : 'xStock'}
                </button>
              ))}
            </div>
            <SegmentedControl
              value={period}
              onChange={setPeriod}
              options={PERIOD_OPTIONS}
            />
          </div>
        }
      />

      {loading && <LoadingState />}
      {error   && <ErrorState message={error.message} />}

      {!loading && !error && data && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <StatCard label="Total Transfers"   value={data.totalTransferCount.toLocaleString()}       icon="⇄" stagger={2} />
          <StatCard label="Unique Tokens"     value={data.uniqueTokens.toLocaleString()}             icon="◆" stagger={3} />
          <StatCard label="Active Addresses"  value={data.uniqueAddresses.toLocaleString()}          icon="◉" stagger={4} />
          {!onchainVsOffchainQuery.isLoading && (
            <StatCard label="Onchain Market Cap" value={fmtMktcap(totalOnchainMarketcap)}            icon="₿" stagger={5} />
          )}
        </div>
      )}

    

      {/* Onchain market cap pie charts */}
      {!onchainVsOffchainQuery.isLoading && (pieDataByTicker.length > 0 || pieDataByProtocol.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">Onchain Market Cap by Ticker</h2>
            </div>
            <div className="p-5">
              <ChartContainer height={280}>
                <PieChart>
                  <Pie
                    data={pieDataByTicker}
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
                    {pieDataByTicker.map((_, idx) => (
                      <Cell key={idx} fill={getChartColor(idx)} fillOpacity={0.9} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const p = payload[0]?.payload as { name: string; value: number };
                      const pct = totalPie > 0 ? ((p?.value ?? 0) / totalPie * 100).toFixed(1) : '0';
                      return (
                        <ChartTooltip active={active}>
                          <p className="text-xs text-secondary mb-1">{p?.name}</p>
                          <p className="font-mono text-surface-100">{fmtMktcap(p?.value ?? 0)}</p>
                          <p className="text-xs text-secondary">{pct}% of onchain mcap</p>
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
              <h2 className="font-display text-sm font-semibold text-surface-100">Onchain Market Cap by Protocol</h2>
            </div>
            <div className="p-5">
              <ChartContainer height={280}>
                <PieChart>
                  <Pie
                    data={pieDataByProtocol}
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
                    {pieDataByProtocol.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} fillOpacity={0.9} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const p = payload[0]?.payload as { name: string; value: number };
                      const totalProtocol = pieDataByProtocol.reduce((s, d) => s + d.value, 0);
                      const pct = totalProtocol > 0 ? ((p?.value ?? 0) / totalProtocol * 100).toFixed(1) : '0';
                      return (
                        <ChartTooltip active={active}>
                          <p className="text-xs text-secondary mb-1">{p?.name}</p>
                          <p className="font-mono text-surface-100">{fmtMktcap(p?.value ?? 0)}</p>
                          <p className="text-xs text-secondary">{pct}% of onchain mcap</p>
                        </ChartTooltip>
                      );
                    }}
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </Card>
        </div>
      )}

      {/* Volume & Transfer comparison charts */}
      {protocolData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">Volume Comparison</h2>
            </div>
            <div className="p-5">
              <ChartContainer height={240}>
                <BarChart
                  data={[
                    { name: 'Ondo', volume: volume18ToNumber(String(protocolData.ondo.totalVolume)), color: '#00E5C3' },
                    { name: 'xStock', volume: volume18ToNumber(String(protocolData.xstock.totalVolume)), color: '#4DA6FF' },
                  ]}
                  barCategoryGap="45%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#8A97A8', fontSize: 12, fontFamily: 'DM Sans' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    axisLine={false}
                    tickLine={false}
                    width={70}
                  />
                  <Tooltip
                    content={({ active, payload }) => (
                      <ChartTooltip active={active}>
                        {payload?.map((entry) => (
                          <div key="vol">
                            <p className="text-xs text-secondary mb-1">{entry.payload?.name}</p>
                            <p className="font-mono text-surface-100">{formatVolume18(entry.value as number)}</p>
                          </div>
                        ))}
                      </ChartTooltip>
                    )}
                  />
                  <Bar dataKey="volume" radius={[6, 6, 0, 0]}>
                    {[
                      { color: '#00E5C3' },
                      { color: '#4DA6FF' },
                    ].map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} fillOpacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">Transfer Comparison</h2>
            </div>
            <div className="p-5">
              <ChartContainer height={240}>
                <BarChart
                  data={[
                    { name: 'Ondo', transfers: protocolData.ondo.totalTransfers, color: '#00E5C3' },
                    { name: 'xStock', transfers: protocolData.xstock.totalTransfers, color: '#4DA6FF' },
                  ]}
                  barCategoryGap="45%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: '#8A97A8', fontSize: 12, fontFamily: 'DM Sans' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    axisLine={false}
                    tickLine={false}
                    width={60}
                  />
                  <Tooltip
                    content={({ active, payload }) => (
                      <ChartTooltip active={active}>
                        {payload?.map((entry) => (
                          <div key="txns">
                            <p className="text-xs text-secondary mb-1">{entry.payload?.name}</p>
                            <p className="font-mono text-surface-100">{Number(entry.value).toLocaleString()} txns</p>
                          </div>
                        ))}
                      </ChartTooltip>
                    )}
                  />
                  <Bar dataKey="transfers" radius={[6, 6, 0, 0]}>
                    {[
                      { color: '#00E5C3' },
                      { color: '#4DA6FF' },
                    ].map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} fillOpacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
        </div>
      )}

      {/* Token Volume Distribution */}
      {!tokensVolumeQuery.isLoading && chartData.length > 0 && (
        <Card noPadding>
          <div className="p-5 border-b border-subtle">
            <h2 className="font-display text-sm font-semibold text-surface-100">Volume Distribution (Top 20)</h2>
          </div>
          <div className="p-5">
            <ChartContainer height={300}>
              <BarChart data={chartData} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                  axisLine={false}
                  tickLine={false}
                  width={70}
                />
                <Tooltip
                  content={({ active, payload }) => (
                    <ChartTooltip active={active}>
                      {payload?.map((entry) => (
                        <div key={String(entry.dataKey)}>
                          <p className="text-xs text-secondary mb-1">{entry.payload?.name}</p>
                          <p className="text-sm font-mono text-surface-100">{formatVolume18(entry.value as number)}</p>
                        </div>
                      ))}
                    </ChartTooltip>
                  )}
                />
                <Bar
                  dataKey="volume"
                  radius={[4, 4, 0, 0]}
                  onClick={(d) => navigate(`/token/${d.contractAddress}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {chartData.map((_, idx) => (
                    <Cell key={idx} fill={getChartColor(idx)} fillOpacity={0.85} />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </Card>
      )}
    </div>
  );
}
