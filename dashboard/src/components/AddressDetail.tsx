import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAddressSummary, useAddressTransfers } from '../hooks/useAnalytics';
import { formatVolume18 } from '../formatVolume';
import { Card } from './ui/Card';
import { ControlBar, SelectField, InputField, SegmentedControl } from './ui/Controls';
import { LoadingState, ErrorState, EmptyState } from './ui/States';
import { DataTable } from './ui/DataTable';
import { PageHeader } from './ui/PageHeader';
import type { Protocol, Period, Direction } from '../types';

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
const DIRECTION_OPTIONS: { value: Direction; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'in',  label: 'In'  },
  { value: 'out', label: 'Out' },
];

function fmtTime(blockTimestamp: string) {
  return new Date(Number(blockTimestamp) * 1000).toLocaleString('en-US', {
    month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

export default function AddressDetail() {
  const { address } = useParams<{ address: string }>();
  const navigate = useNavigate();
  const [protocol,        setProtocol]        = useState<Protocol>('ondo');
  const [period,          setPeriod]          = useState<Period>('30d');
  const [contractAddress, setContractAddress] = useState<string>('');
  const [direction,       setDirection]       = useState<Direction>('all');

  const summaryQuery = useAddressSummary(address, {
    protocol, period,
    contractAddress: contractAddress || undefined,
  });
  const transfersQuery = useAddressTransfers(address, {
    direction, protocol,
    contractAddress: contractAddress || undefined,
    limit: '20',
  });

  const summary   = summaryQuery.data ?? null;
  const transfers = transfersQuery.data ?? null;
  const loading   = summaryQuery.isLoading || transfersQuery.isLoading;
  const error     = summaryQuery.error ?? transfersQuery.error;

  if (!address) return <ErrorState message="Invalid address" />;

  const truncateAddr = (addr: string) => addr.slice(0, 8) + '…' + addr.slice(-6);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Address Detail"
        subtitle={address}
      />

      <ControlBar>
        <SelectField label="Protocol" value={protocol} onChange={setProtocol} options={PROTOCOL_OPTIONS} />
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Period</span>
          <SegmentedControl value={period} onChange={setPeriod} options={PERIOD_OPTIONS} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-secondary uppercase tracking-wider">Direction</span>
          <SegmentedControl value={direction} onChange={setDirection} options={DIRECTION_OPTIONS} />
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
      {error   && <ErrorState message={error instanceof Error ? error.message : 'Unknown error'} />}

      {!loading && !error && summary && (
        <Card>
          <h2 className="font-display text-sm font-semibold text-surface-100 mb-4">Summary by Token</h2>
          {summary.byStock.length === 0 && <EmptyState message="No summary data" />}
          <div className="space-y-3">
            {summary.byStock.map((stock) => (
              <div key={stock.contractAddress} className="rounded-lg border border-subtle p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-medium text-surface-100">
                    {stock.tokenName || truncateAddr(stock.contractAddress)}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-secondary mb-1">Total Sent</div>
                    <div className="font-mono text-sm text-surface-100">{formatVolume18(stock.totalSent)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-secondary mb-1">Send Count</div>
                    <div className="font-mono text-sm text-surface-100">{Number(stock.sendCount).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-secondary mb-1">Total Received</div>
                    <div className="font-mono text-sm text-surface-100">{formatVolume18(stock.totalReceived)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-secondary mb-1">Receive Count</div>
                    <div className="font-mono text-sm text-surface-100">{Number(stock.receiveCount).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            ))}
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
                    className={[
                      'font-mono text-xs',
                      t.from.toLowerCase() === address.toLowerCase()
                        ? 'text-negative'
                        : 'text-accent hover:underline',
                    ].join(' ')}
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
                    className={[
                      'font-mono text-xs',
                      t.to.toLowerCase() === address.toLowerCase()
                        ? 'text-positive'
                        : 'text-accent hover:underline',
                    ].join(' ')}
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
                  <span className="font-mono text-xs text-secondary">
                    {t.transactionHash.slice(0, 10)}…
                  </span>
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
