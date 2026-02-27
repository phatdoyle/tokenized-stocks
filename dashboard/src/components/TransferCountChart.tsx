import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { useTransferCount } from '../hooks/useAnalytics';
import { Card } from './ui/Card';
import { ControlBar, SelectField, InputField, SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { PageHeader } from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import { getChartColor } from '../lib/chartColors';
import type { Protocol, Interval, Period } from '../types';

const PROTOCOL_OPTIONS: { value: Protocol; label: string }[] = [
  { value: 'ondo',   label: 'Ondo'   },
  { value: 'xstock', label: 'xStock' },
];
const INTERVAL_OPTIONS: { value: Interval; label: string }[] = [
  { value: '1h', label: '1H' },
  { value: '1d', label: '1D' },
];
const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: '24h', label: '24H' },
  { value: '7d',  label: '7D'  },
  { value: '30d', label: '30D' },
  { value: '90d', label: '90D' },
];

export default function TransferCountChart() {
  const [protocol,        setProtocol]        = useState<Protocol>('ondo');
  const [interval,        setInterval]        = useState<Interval>('1d');
  const [period,          setPeriod]          = useState<Period>('7d');
  const [contractAddress, setContractAddress] = useState<string>('');

  const { data, isLoading: loading, error } = useTransferCount({
    protocol, interval, period,
    contractAddress: contractAddress || undefined,
  });

  const bucketMap = data?.byStock.reduce((acc, item) => {
    const key    = `${item.contractAddress}-${item.tokenName || ''}`;
    const bucket = new Date(item.bucket).toISOString();
    if (!acc[bucket]) acc[bucket] = { bucket };
    acc[bucket][key] = item.transferCount ? Number(item.transferCount) : 0;
    return acc;
  }, {} as Record<string, Record<string, unknown>>) ?? {};

  const chartData = Object.values(bucketMap).sort(
    (a, b) => new Date(a.bucket as string).getTime() - new Date(b.bucket as string).getTime(),
  );

  const stockKeys = Array.from(
    new Set(data?.byStock.map((item) => `${item.contractAddress}-${item.tokenName || ''}`) ?? []),
  );

  const fmtDate = (v: string) =>
    new Date(v).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="space-y-6">
      <PageHeader title="Transfer Count" subtitle="Number of on-chain transfers per time bucket" />

      <ControlBar>
        <SelectField label="Protocol" value={protocol} onChange={setProtocol} options={PROTOCOL_OPTIONS} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Interval</span>
          <SegmentedControl value={interval} onChange={setInterval} options={INTERVAL_OPTIONS} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Period</span>
          <SegmentedControl value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>
        <InputField
          label="Contract (optional)"
          value={contractAddress}
          onChange={setContractAddress}
          placeholder="0x…"
          className="flex-1 min-w-[200px]"
        />
      </ControlBar>

      <Card noPadding>
        <div className="p-5 border-b border-subtle">
          <h2 className="font-display text-sm font-semibold text-surface-100">
            Transfer Count · {period.toUpperCase()} · {interval.toUpperCase()} intervals
          </h2>
        </div>
        <div className="p-5">
          {loading && <LoadingState />}
          {error   && <ErrorState message={error.message} />}
          {!loading && !error && chartData.length === 0 && <EmptyState />}
          {!loading && !error && chartData.length > 0 && (
            <ChartContainer height={380}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis
                  dataKey="bucket"
                  tickFormatter={fmtDate}
                  tick={{ fill: '#8A97A8', fontSize: 11, fontFamily: 'JetBrains Mono' }}
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
                  content={({ active, payload, label }) => (
                    <ChartTooltip active={active}>
                      <p className="text-xs text-secondary font-mono mb-2">{label ? fmtDate(label) : ''}</p>
                      {payload?.map((entry) => (
                        <div key={String(entry.dataKey)} className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entry.color }} />
                          <span className="text-xs text-secondary truncate max-w-[120px]">
                            {String(entry.name).split('-')[1] || String(entry.name).split('-')[0]}
                          </span>
                          <span className="text-xs font-mono text-surface-100 ml-auto">
                            {Number(entry.value).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </ChartTooltip>
                  )}
                />
                <Legend
                  formatter={(name: string) => name.split('-')[1] || name.split('-')[0]}
                  wrapperStyle={{ fontSize: 12, paddingTop: 16 }}
                />
                {stockKeys.map((key, idx) => (
                  <Line
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={getChartColor(idx)}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, strokeWidth: 0 }}
                    name={key}
                  />
                ))}
              </LineChart>
            </ChartContainer>
          )}
        </div>
      </Card>
    </div>
  );
}
