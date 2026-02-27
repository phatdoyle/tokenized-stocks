import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTokenStats, useTokenTransfersRecent } from '../hooks/useAnalytics';
import { formatVolume18 } from '../formatVolume';
import { Card } from './ui/Card';
import { ControlBar, SelectField, SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState } from './ui/States';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import type { Protocol, Period } from '../types';

const PROTOCOL_OPTIONS: { value: Protocol; label: string }[] = [
  { value: 'ondo',   label: 'Ondo'   },
  { value: 'xstock', label: 'xStock' },
];
const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: '24h', label: '24H' },
  { value: '7d',  label: '7D'  },
  { value: '30d', label: '30D' },
  { value: '90d', label: '90D' },
];

interface MetricCardProps {
  label: string;
  value: string;
}
function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-subtle bg-surface-800/60 p-4 flex flex-col gap-2">
      <span className="text-xs text-secondary uppercase tracking-wider">{label}</span>
      <span className="font-mono font-semibold text-surface-50 text-lg tabular-nums">{value}</span>
    </div>
  );
}

function fmtTime(blockTimestamp: string) {
  const ms = Number(blockTimestamp) * 1000;
  return new Date(ms).toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function TokenDetail() {
  const { contractAddress } = useParams<{ contractAddress: string }>();
  const navigate = useNavigate();
  const [protocol, setProtocol] = useState<Protocol>('ondo');
  const [period,   setPeriod]   = useState<Period>('7d');

  const statsQuery     = useTokenStats(contractAddress, { protocol, period });
  const transfersQuery = useTokenTransfersRecent(contractAddress, { protocol, limit: '20' });
  const marketcapQuery = useOnchainMarketcap();

  const ticker = useMemo(() => {
    const item = (marketcapQuery.data?.data ?? []).find(
      (d) => d.contract_address?.toLowerCase() === contractAddress?.toLowerCase(),
    );
    return item?.stock_ticker ?? undefined;
  }, [marketcapQuery.data?.data, contractAddress]);

  const { data: timeData, isLoading: timeLoading } = useMarketcapOverTime(ticker);

  const stats     = statsQuery.data ?? null;
  const transfers = transfersQuery.data ?? null;
  const loading   = statsQuery.isLoading || transfersQuery.isLoading;

  const areaData = timeData?.data?.map((d) => ({
    date: d.date,
    onchain_marketcap: d.onchain_marketcap ? parseFloat(d.onchain_marketcap) : 0,
  })) ?? [];
  const error     = statsQuery.error ?? transfersQuery.error;

  if (!contractAddress) {
    return <ErrorState message="Invalid contract address" />;
  }

  const truncateAddr = (addr: string) => addr.slice(0, 8) + '…' + addr.slice(-6);

  return (
    <div className="space-y-6">
      <PageHeader
        title={stats?.stock.tokenName ?? 'Token Detail'}
        subtitle={contractAddress}
      />

      <ControlBar>
        <SelectField label="Protocol" value={protocol} onChange={setProtocol} options={PROTOCOL_OPTIONS} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Period</span>
          <SegmentedControl value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>
      </ControlBar>

      {loading && <LoadingState />}
      {error   && <ErrorState message={error instanceof Error ? error.message : 'Unknown error'} />}

      {!loading && !error && stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard label="Volume"           value={formatVolume18(stats.stock.volume)} />
          <MetricCard label="Transfers"        value={Number(stats.stock.transferCount).toLocaleString()} />
          <MetricCard label="Unique Senders"   value={Number(stats.stock.uniqueSenders).toLocaleString()} />
          <MetricCard label="Unique Receivers" value={Number(stats.stock.uniqueReceivers).toLocaleString()} />
        </div>
      )}

      {ticker && (
        <Card noPadding>
          <div className="p-5 border-b border-subtle">
            <h2 className="font-display text-sm font-semibold text-surface-100">Market Cap Over Time · {ticker}</h2>
          </div>
          <div className="p-5">
            {timeLoading && <LoadingState message="Loading time series…" />}
            {!timeLoading && areaData.length === 0 && <EmptyState message={`No market cap history for ${ticker}`} />}
            {!timeLoading && areaData.length > 0 && (
              <ChartContainer height={320}>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="mcGradToken" x1="0" y1="0" x2="0" y2="1">
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
                    fill="url(#mcGradToken)"
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ChartContainer>
            )}
          </div>
        </Card>
      )}

      {!loading && !error && transfers && transfers.transfers.length > 0 && (
        <Card noPadding>
          <div className="p-5 border-b border-subtle">
            <h2 className="font-display text-sm font-semibold text-surface-100">Recent Transfers</h2>
          </div>
          <DataTable
            data={transfers.transfers}
            rowKey={(t) => t.id}
            columns={[
              {
                key: 'from',
                header: 'From',
                render: (t) => (
                  <button
                    onClick={() => navigate(`/address/${t.from}`)}
                    className="font-mono text-xs text-accent hover:underline"
                  >
                    {truncateAddr(t.from)}
                  </button>
                ),
              },
              {
                key: 'to',
                header: 'To',
                render: (t) => (
                  <button
                    onClick={() => navigate(`/address/${t.to}`)}
                    className="font-mono text-xs text-accent hover:underline"
                  >
                    {truncateAddr(t.to)}
                  </button>
                ),
              },
              {
                key: 'value',
                header: 'Value',
                align: 'right',
                render: (t) => (
                  <span className="font-mono text-surface-100">{formatVolume18(t.value)}</span>
                ),
              },
              {
                key: 'block',
                header: 'Block',
                align: 'right',
                render: (t) => <span className="font-mono text-xs text-secondary">{t.blockNumber}</span>,
              },
              {
                key: 'hash',
                header: 'Tx Hash',
                render: (t) => (
                  <a
                    href={`https://etherscan.io/tx/${t.transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs text-accent hover:underline"
                  >
                    {t.transactionHash.slice(0, 10)}…
                  </a>
                ),
              },
              {
                key: 'time',
                header: 'Time',
                align: 'right',
                render: (t) => <span className="text-xs text-secondary">{fmtTime(t.blockTimestamp)}</span>,
              },
            ]}
          />
        </Card>
      )}
    </div>
  );
}
