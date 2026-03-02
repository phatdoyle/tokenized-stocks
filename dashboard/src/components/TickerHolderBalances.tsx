import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useHolderBalances, useMarketcapOverTime, useTransfersMintsBurns } from '../hooks/useAnalytics';
import { Card } from './ui/Card';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';

function fmtUsd(value: number) {
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

function fmtBalance(value: number) {
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
  return value.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function fmtDate(value: string | number) {
  if (value == null) return '';
  const d = typeof value === 'string' ? new Date(value) : new Date(value);
  return isNaN(d.getTime()) ? String(value) : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Compact number format for chart axes (avoids truncation). */
function fmtChartNumber(v: number): string {
  const n = Number(v);
  if (!Number.isFinite(n)) return '0';
  const abs = Math.abs(n);
  const sign = n < 0 ? '-' : '';
  if (abs >= 1e9) return `${sign}${(abs / 1e9).toFixed(1)}B`;
  if (abs >= 1e6) return `${sign}${(abs / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `${sign}${(abs / 1e3).toFixed(1)}K`;
  return `${sign}${abs.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

/** Shorter date for chart x-axis (less overlap). */
function fmtDateShort(value: string | number): string {
  if (value == null) return '';
  const d = typeof value === 'string' ? new Date(value) : new Date(value);
  return isNaN(d.getTime()) ? String(value) : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function TickerHolderBalances() {
  const { ticker } = useParams<{ ticker: string }>();
  const { data, isLoading, error } = useHolderBalances({
    ticker: ticker?.toUpperCase(),
  });
  const { data: timeData, isLoading: timeLoading } = useMarketcapOverTime(
    ticker?.toUpperCase(),
  );
  const { data: transfersData, isLoading: transfersLoading } = useTransfersMintsBurns(
    ticker?.toUpperCase(),
  );

  const rawData = data?.data ?? [];
  const transfersRaw = transfersData?.data ?? [];

  const byProtocol = useMemo(() => {
    const map = new Map<
      string,
      { protocol: string; balance: number; usd_balance: number }
    >();
    for (const item of rawData) {
      const p = item.protocol || 'unknown';
      const bal = item.balance ? parseFloat(item.balance) : 0;
      const usd = item.usd_balance ? parseFloat(item.usd_balance) : 0;
      const existing = map.get(p);
      if (!existing) {
        map.set(p, { protocol: p, balance: bal, usd_balance: usd });
      } else {
        existing.balance += bal;
        existing.usd_balance += usd;
      }
    }
    return Array.from(map.values());
  }, [rawData]);

  const byAddress = useMemo(() => {
    const map = new Map<
      string,
      { address: string; balance: number; usd_balance: number }
    >();
    for (const item of rawData) {
      const addr = item.address;
      const bal = item.balance ? parseFloat(item.balance) : 0;
      const usd = item.usd_balance ? parseFloat(item.usd_balance) : 0;
      const existing = map.get(addr);
      if (!existing) {
        map.set(addr, { address: addr, balance: bal, usd_balance: usd });
      } else {
        existing.balance += bal;
        existing.usd_balance += usd;
      }
    }
    return Array.from(map.values()).sort(
      (a, b) => b.usd_balance - a.usd_balance,
    );
  }, [rawData]);

  const areaData =
    timeData?.data?.map((d) => ({
      date: d.date,
      onchain_marketcap: d.onchain_marketcap
        ? parseFloat(d.onchain_marketcap)
        : 0,
    })) ?? [];

  // Group transfers-mints-burns by date for chart
  const transfersChartData = useMemo(() => {
    const byDate = new Map<
      string,
      { date: string; shares_mints: number; shares_burned: number; usd_transfer_value: number }
    >();
    for (const row of transfersRaw) {
      const d = row.date;
      const mints = row.shares_mints ? parseFloat(row.shares_mints) : 0;
      const burned = row.shares_burned ? parseFloat(row.shares_burned) : 0;
      const usd = row.usd_transfer_value ? parseFloat(row.usd_transfer_value) : 0;
      const existing = byDate.get(d);
      if (!existing) {
        byDate.set(d, { date: d, shares_mints: mints, shares_burned: -burned, usd_transfer_value: usd });
      } else {
        existing.shares_mints += mints;
        existing.shares_burned -= burned;
        existing.usd_transfer_value += usd;
      }
    }
    return Array.from(byDate.values()).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [transfersRaw]);

  // Sum usd_transfer_value by protocol for cards
  const transfersByProtocol = useMemo(() => {
    const map = new Map<string, number>();
    for (const row of transfersRaw) {
      const p = row.protocol || 'unknown';
      const usd = row.usd_transfer_value ? parseFloat(row.usd_transfer_value) : 0;
      map.set(p, (map.get(p) ?? 0) + usd);
    }
    return Array.from(map.entries()).map(([protocol, usd_transfer_value]) => ({
      protocol,
      usd_transfer_value,
    }));
  }, [transfersRaw]);

  if (!ticker) {
    return (
      <div className="space-y-6">
        <PageHeader title="Holder Balances" subtitle="Select a ticker" />
        <EmptyState message="No ticker specified" />
      </div>
    );
  }

  const displayTicker = ticker.toUpperCase();

  return (
    <div className="space-y-6">
      <PageHeader
        title={`${displayTicker} Holder Balances`}
        subtitle="Token balances by protocol and address"
        action={
          <Link
            to="/"
            className="text-sm font-medium text-secondary hover:text-accent transition-colors"
          >
            ← Back to Market Cap
          </Link>
        }
      />

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error.message} />}

      {!isLoading && !error && rawData.length === 0 && (
        <EmptyState message={`No holder data for ${displayTicker}`} />
      )}

      {/* All cards in top row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {byProtocol.map((p) => (
          <Card key={`holder-${p.protocol}`} className="p-5">
            <h3 className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
              {p.protocol} — Holder Balance
            </h3>
            <div className="space-y-1">
              <p className="font-mono text-lg font-semibold text-surface-100">
                {fmtUsd(p.usd_balance)}
              </p>
              <p className="font-mono text-sm text-secondary">
                {fmtBalance(p.balance)} tokens
              </p>
            </div>
          </Card>
        ))}
        {!transfersLoading &&
          transfersByProtocol.map((p) => (
            <Card key={`transfer-${p.protocol}`} className="p-5">
              <h3 className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                {p.protocol} — Transfer Volume
              </h3>
              <p className="font-mono text-lg font-semibold text-surface-100">
                {fmtUsd(p.usd_transfer_value)}
              </p>
              <p className="text-xs text-secondary mt-1">Total USD transfer value</p>
            </Card>
          ))}
      </div>

      {transfersLoading && ticker && (
        <Card className="p-5">
          <LoadingState message="Loading transfers data…" />
        </Card>
      )}

      {/* Charts — one per row */}
      <div className="grid grid-cols-1 gap-4">
        {/* Market Cap Over Time */}
        {!isLoading && !error && (
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">
                Market Cap Over Time — {displayTicker}
              </h2>
            </div>
            <div className="p-5">
              {timeLoading && (
                <LoadingState message="Loading time series…" />
              )}
              {!timeLoading && areaData.length === 0 && (
                <EmptyState
                  message={`No time series data for ${displayTicker}`}
                />
              )}
              {!timeLoading && areaData.length > 0 && (
                <ChartContainer height={320}>
                  <AreaChart data={areaData}>
                    <defs>
                      <linearGradient
                        id="mcGradTicker"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#00E5C3"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="#00E5C3"
                          stopOpacity={0.02}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.05)"
                    />
                    <XAxis
                      dataKey="date"
                      tickFormatter={fmtDateShort}
                      interval="preserveStartEnd"
                      tick={{
                        fill: '#8A97A8',
                        fontSize: 10,
                        fontFamily: 'JetBrains Mono',
                      }}
                      axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                      tickLine={false}
                    />
                    <YAxis
                      domain={[0, 'auto']}
                      tickFormatter={fmtUsd}
                      tick={{
                        fill: '#8A97A8',
                        fontSize: 11,
                        fontFamily: 'JetBrains Mono',
                      }}
                      axisLine={false}
                      tickLine={false}
                      width={70}
                    />
                    <Tooltip
                      content={({ active, payload, label }) => (
                        <ChartTooltip active={active}>
                          <p className="text-xs text-secondary font-mono mb-1">
                            {label ? fmtDate(label) : ''}
                          </p>
                          {payload?.map((entry) => (
                            <p
                              key="mc"
                              className="font-mono text-surface-100"
                            >
                              {fmtUsd(entry.value as number)}
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
                      fill="url(#mcGradTicker)"
                      dot={false}
                      activeDot={{ r: 4, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ChartContainer>
              )}
            </div>
          </Card>
        )}

        {/* Mints & Burns */}
        {!transfersLoading && transfersChartData.length > 0 && (
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">
                Mints & Burns — {displayTicker}
              </h2>
            </div>
            <div className="p-5">
              <ChartContainer height={320}>
                <BarChart data={transfersChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={fmtDateShort}
                    interval="preserveStartEnd"
                    tick={{ fill: '#8A97A8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(v) => fmtChartNumber(Number(v))}
                    tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    axisLine={false}
                    tickLine={false}
                    width={55}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => (
                      <ChartTooltip active={active}>
                        <p className="text-xs text-secondary font-mono mb-2">
                          {label ? fmtDate(label) : ''}
                        </p>
                        {payload?.map((entry) => {
                          const key = String(entry.dataKey);
                          if (key === 'shares_mints') {
                            return (
                              <p key={key} className="font-mono text-[#00E5C3]">
                                Mints: {(entry.value as number).toLocaleString(undefined, { maximumFractionDigits: 2 })} shares
                              </p>
                            );
                          }
                          if (key === 'shares_burned') {
                            return (
                              <p key={key} className="font-mono text-[#E55C00]">
                                Burns: {Math.abs(entry.value as number).toLocaleString(undefined, { maximumFractionDigits: 2 })} shares
                              </p>
                            );
                          }
                          return null;
                        })}
                      </ChartTooltip>
                    )}
                  />
                  <Bar
                    dataKey="shares_mints"
                    fill="#00E5C3"
                    radius={[4, 4, 0, 0]}
                    name="Mints"
                  />
                  <Bar
                    dataKey="shares_burned"
                    fill="#E55C00"
                    radius={[0, 0, 4, 4]}
                    name="Burns"
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </Card>
        )}

        {/* USD Transfer Value */}
        {!transfersLoading && transfersChartData.length > 0 && (
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">
                USD Transfer Value — {displayTicker}
              </h2>
            </div>
            <div className="p-5">
              <ChartContainer height={320}>
                <AreaChart data={transfersChartData}>
                  <defs>
                    <linearGradient id="usdTransferGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4DA6FF" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#4DA6FF" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={fmtDateShort}
                    interval="preserveStartEnd"
                    tick={{ fill: '#8A97A8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.07)' }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 'auto']}
                    tickFormatter={fmtUsd}
                    tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    axisLine={false}
                    tickLine={false}
                    width={70}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => (
                      <ChartTooltip active={active}>
                        <p className="text-xs text-secondary font-mono mb-1">
                          {label ? fmtDate(label) : ''}
                        </p>
                        {payload?.map((entry) => (
                          <p key="usd" className="font-mono text-[#4DA6FF]">
                            {fmtUsd(entry.value as number)}
                          </p>
                        ))}
                      </ChartTooltip>
                    )}
                  />
                  <Area
                    type="monotone"
                    dataKey="usd_transfer_value"
                    stroke="#4DA6FF"
                    strokeWidth={2}
                    fill="url(#usdTransferGrad)"
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </Card>
        )}
      </div>

      {/* Address table — bottom */}
      {!isLoading && !error && rawData.length > 0 && (
        <Card noPadding>
          <div className="p-5 border-b border-subtle">
            <h2 className="font-display text-sm font-semibold text-surface-100">
              Balances by Address
            </h2>
          </div>
          <div className="max-h-[500px] overflow-y-auto">
            <DataTable
              data={byAddress}
              rowKey={(item) => item.address}
              columns={[
                {
                  key: 'address',
                  header: 'Address',
                  render: (item) => (
                    <a
                      href={`https://etherscan.io/address/${item.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-accent truncate max-w-[200px] block hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.address}
                    </a>
                  ),
                },
                {
                  key: 'balance',
                  header: 'Balance',
                  align: 'right',
                  render: (item) => (
                    <span className="font-mono text-surface-200">
                      {fmtBalance(item.balance)}
                    </span>
                  ),
                },
                {
                  key: 'usd',
                  header: 'USD Value',
                  align: 'right',
                  render: (item) => (
                    <span className="font-mono font-medium text-surface-100">
                      {fmtUsd(item.usd_balance)}
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </Card>
      )}
    </div>
  );
}
