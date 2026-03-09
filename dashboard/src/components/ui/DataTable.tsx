import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface Column<T> {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  render: (item: T, index: number) => ReactNode;
  sortable?: boolean;
  sortValue?: (item: T) => string | number;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  rowKey: (item: T, index: number) => string;
  sortKey?: string | null;
  sortDirection?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  className?: string;
}

function SortIcon({ direction }: { direction: 'asc' | 'desc' | null }) {
  if (!direction) {
    return (
      <span className="inline-block ml-1 opacity-40" aria-hidden>
        ↕
      </span>
    );
  }
  return (
    <span className="inline-block ml-1" aria-hidden>
      {direction === 'asc' ? '↑' : '↓'}
    </span>
  );
}

/**
 * Reusable dark-themed data table.
 */
export function DataTable<T>({
  columns,
  data,
  onRowClick,
  rowKey,
  sortKey = null,
  sortDirection = 'desc',
  onSort,
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-xl border border-subtle', className)}>
      <table className="w-full min-w-full text-sm">
        <thead>
          <tr className="border-b border-subtle bg-surface-800/80">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'px-4 py-3 text-xs font-medium text-secondary uppercase tracking-wider',
                  col.align === 'right' && 'text-right',
                  col.align === 'center' && 'text-center',
                  col.align !== 'right' && col.align !== 'center' && 'text-left',
                  col.sortable && onSort && 'cursor-pointer select-none hover:text-surface-100 transition-colors',
                )}
                onClick={col.sortable && onSort ? () => onSort(col.key) : undefined}
              >
                {col.header}
                {col.sortable && <SortIcon direction={sortKey === col.key ? sortDirection : null} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-subtle">
          {data.map((item, idx) => (
            <tr
              key={rowKey(item, idx)}
              onClick={() => onRowClick?.(item)}
              className={cn(
                'transition-colors duration-100',
                onRowClick && 'cursor-pointer hover:bg-surface-700/50',
              )}
              style={{ animationDelay: `${idx * 0.02}s` }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    'px-4 py-3 text-surface-200 whitespace-nowrap',
                    col.align === 'right' && 'text-right',
                    col.align === 'center' && 'text-center',
                  )}
                >
                  {col.render(item, idx)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
