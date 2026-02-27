import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransfersRecent } from '../hooks/useAnalytics';
import { formatVolume18 } from '../formatVolume';
import { Card } from './ui/Card';
import { ControlBar, SelectField, InputField } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import type { Protocol } from '../types';

const PROTOCOL_OPTIONS: { value: Protocol; label: string }[] = [
  { value: 'ondo',   label: 'Ondo'   },
  { value: 'xstock', label: 'xStock' },
];

function fmtTime(blockTimestamp: string) {
  const ms = Number(blockTimestamp) * 1000;
  return new Date(ms).toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function RecentTransfers() {
  const [protocol,        setProtocol]        = useState<Protocol>('ondo');
  const [limit,           setLimit]           = useState<string>('50');
  const [contractAddress, setContractAddress] = useState<string>('');
  const navigate = useNavigate();

  const { data, isLoading: loading, error } = useTransfersRecent({
    protocol, limit,
    contractAddress: contractAddress || undefined,
  });

  const truncateAddr = (addr: string) => addr.slice(0, 8) + '…' + addr.slice(-6);

  return (
    <div className="space-y-6">
      <PageHeader title="Recent Transfers" subtitle="Latest on-chain token transfers" />

      <ControlBar>
        <SelectField label="Protocol" value={protocol} onChange={setProtocol} options={PROTOCOL_OPTIONS} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Limit</span>
          <select
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="bg-surface-700 border border-subtle rounded-lg px-3 py-2 text-sm text-surface-100 font-mono focus:outline-none focus:border-accent/50"
          >
            {['20', '50', '100'].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <InputField
          label="Contract (optional)"
          value={contractAddress}
          onChange={setContractAddress}
          placeholder="0x…"
          className="flex-1 min-w-[200px]"
        />
      </ControlBar>

      {loading && <LoadingState />}
      {error   && <ErrorState message={error.message} />}
      {!loading && !error && (!data || data.transfers.length === 0) && <EmptyState message="No recent transfers found" />}

      {!loading && !error && data && data.transfers.length > 0 && (
        <Card noPadding>
          <div className="p-5 border-b border-subtle flex items-center justify-between">
            <h2 className="font-display text-sm font-semibold text-surface-100">Live Feed</h2>
            <span className="flex items-center gap-1.5 text-xs text-positive">
              <span className="w-1.5 h-1.5 rounded-full bg-positive animate-pulse" />
              {data.transfers.length} transfers
            </span>
          </div>
          <DataTable
            data={data.transfers}
            rowKey={(t) => t.id}
            columns={[
              {
                key: 'token',
                header: 'Token',
                render: (t) => (
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/token/${t.contractAddress}`); }}
                    className="font-mono text-accent text-xs hover:underline"
                  >
                    {t.tokenName || truncateAddr(t.contractAddress)}
                  </button>
                ),
              },
              {
                key: 'from',
                header: 'From',
                render: (t) => (
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/address/${t.from}`); }}
                    className="font-mono text-xs text-surface-300 hover:text-accent transition-colors"
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
                    onClick={(e) => { e.stopPropagation(); navigate(`/address/${t.to}`); }}
                    className="font-mono text-xs text-surface-300 hover:text-accent transition-colors"
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
                  <span className="font-mono text-sm text-surface-100">{formatVolume18(t.value)}</span>
                ),
              },
              {
                key: 'block',
                header: 'Block',
                align: 'right',
                render: (t) => (
                  <span className="font-mono text-xs text-secondary">{t.blockNumber}</span>
                ),
              },
              {
                key: 'time',
                header: 'Time',
                align: 'right',
                render: (t) => (
                  <span className="text-xs text-secondary">{fmtTime(t.blockTimestamp)}</span>
                ),
              },
            ]}
          />
        </Card>
      )}
    </div>
  );
}
