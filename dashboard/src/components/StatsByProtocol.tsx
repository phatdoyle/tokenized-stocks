import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { useStatsByProtocol } from '../hooks/useAnalytics';
import { formatVolume18, volume18ToNumber } from '../formatVolume';
import { Card } from './ui/Card';
import { ControlBar, SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState } from './ui/States';
import { PageHeader } from './ui/PageHeader';
import { ChartContainer, ChartTooltip } from './ui/ChartContainer';
import type { Period } from '../types';

const PERIOD_OPTIONS: { value: Period; label: string }[] = [
  { value: '24h', label: '24H' },
  { value: '7d',  label: '7D'  },
  { value: '30d', label: '30D' },
  { value: '90d', label: '90D' },
];

interface MetricRowProps {
  label: string;
  value: string;
}

function MetricRow({ label, value }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-subtle last:border-0">
      <span className="text-xs text-secondary">{label}</span>
      <span className="text-sm font-mono text-surface-100 font-medium">{value}</span>
    </div>
  );
}

export default function StatsByProtocol() {
  const [period, setPeriod] = useState<Period>('7d');
  const { data, isLoading: loading, error } = useStatsByProtocol({ period });

  return (
    <div className="space-y-6">
      <PageHeader title="Protocol Comparison" subtitle="Volume and activity breakdown by protocol" />

      <ControlBar>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Period</span>
          <SegmentedControl value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>
      </ControlBar>

      {loading && <LoadingState />}
      {error   && <ErrorState message={error.message} />}

      {!loading && !error && data && (
        <>
          {/* Protocol stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ondo */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-display font-semibold text-surface-100">Ondo</span>
              </div>
              <MetricRow label="Total Volume"   value={formatVolume18(String(data.ondo.totalVolume))} />
              <MetricRow label="Total Transfers" value={data.ondo.totalTransfers.toLocaleString()} />
              <MetricRow label="Unique Tokens"   value={String(data.ondo.byStock.length)} />
            </Card>
            {/* xStock */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-display font-semibold text-surface-100">xStock</span>
              </div>
              <MetricRow label="Total Volume"   value={formatVolume18(String(data.xstock.totalVolume))} />
              <MetricRow label="Total Transfers" value={data.xstock.totalTransfers.toLocaleString()} />
              <MetricRow label="Unique Tokens"   value={String(data.xstock.byStock.length)} />
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
