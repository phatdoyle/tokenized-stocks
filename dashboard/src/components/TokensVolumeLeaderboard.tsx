import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { useTokensVolume } from '../hooks/useAnalytics';
import { formatVolume18, volume18ToNumber } from '../formatVolume';
import { Card } from './ui/Card';
import { ControlBar, SelectField, SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import { getChartColor } from '../lib/chartColors';
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

export default function TokensVolumeLeaderboard() {
  const [protocol, setProtocol] = useState<Protocol>('ondo');
  const [period,   setPeriod]   = useState<Period>('7d');
  const [limit,    setLimit]    = useState<string>('20');
  const navigate = useNavigate();

  const { data, isLoading: loading, error } = useTokensVolume({ protocol, period, limit });

  return (
    <div className="space-y-6">
      <PageHeader title="Token Volume Leaderboard" subtitle="Top tokens ranked by transfer volume" />

      <ControlBar>
        <SelectField label="Protocol" value={protocol} onChange={setProtocol} options={PROTOCOL_OPTIONS} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Period</span>
          <SegmentedControl value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Limit</span>
          <select
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="bg-surface-700 border border-subtle rounded-lg px-3 py-2 text-sm text-surface-100 font-mono focus:outline-none focus:border-accent/50"
          >
            {['10', '20', '50', '100'].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </ControlBar>

      {loading && <LoadingState />}
      {error   && <ErrorState message={error.message} />}

      {!loading && !error && (!data?.byStock?.length) && <EmptyState />}

      {!loading && !error && data?.byStock?.length ? (
          <Card noPadding>
            <div className="p-5 border-b border-subtle">
              <h2 className="font-display text-sm font-semibold text-surface-100">Rankings</h2>
            </div>
            <DataTable
              data={data.byStock}
              rowKey={(item) => item.contractAddress}
              onRowClick={(item) => navigate(`/token/${item.contractAddress}`)}
              columns={[
                {
                  key: 'rank',
                  header: '#',
                  render: (_, idx) => (
                    <span className="text-secondary font-mono text-xs">{idx + 1}</span>
                  ),
                },
                {
                  key: 'token',
                  header: 'Token',
                  render: (item) => (
                    <div>
                      <div className="font-medium text-surface-100">{item.tokenName || 'Unknown'}</div>
                      <div className="text-xs text-secondary font-mono mt-0.5">
                        {item.contractAddress.slice(0, 8)}…{item.contractAddress.slice(-6)}
                      </div>
                    </div>
                  ),
                },
                {
                  key: 'volume',
                  header: 'Volume',
                  align: 'right',
                  render: (item) => (
                    <span className="font-mono text-surface-100">{formatVolume18(item.volume)}</span>
                  ),
                },
                {
                  key: 'transfers',
                  header: 'Transfers',
                  align: 'right',
                  render: (item) => (
                    <span className="font-mono text-surface-100">{Number(item.transferCount).toLocaleString()}</span>
                  ),
                },
              ]}
            />
          </Card>
      ) : null}
    </div>
  );
}
