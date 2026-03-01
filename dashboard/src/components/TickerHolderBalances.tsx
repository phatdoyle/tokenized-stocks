import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useHolderBalances, useMarketcapOverTime } from '../hooks/useAnalytics';
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

export default function TickerHolderBalances() {
  const { ticker } = useParams<{ ticker: string }>();
  const { data, isLoading, error } = useHolderBalances({
    ticker: ticker?.toUpperCase(),
  });
  const { data: timeData, isLoading: timeLoading } = useMarketcapOverTime(
    ticker?.toUpperCase(),
  );

  const rawData = data?.data ?? [];

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

      {!isLoading && !error && rawData.length > 0 && (
        <>
          {/* Protocol summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {byProtocol.map((p) => (
              <Card key={p.protocol} className="p-5">
                <h3 className="text-xs font-medium text-secondary uppercase tracking-wider mb-3">
                  {p.protocol}
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
          </div>

          {/* Address table */}
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
        </>
      )}

      {/* Market Cap Over Time — show when ticker page is ready */}
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
                      tickFormatter={fmtDate}
                      tick={{
                        fill: '#8A97A8',
                        fontSize: 11,
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
    </div>
  );
}
