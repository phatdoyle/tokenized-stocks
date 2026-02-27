import type { ReactNode } from 'react';
import { ResponsiveContainer } from 'recharts';
import { cn } from '../../lib/cn';

interface ChartContainerProps {
  children: ReactNode;
  height?: number;
  className?: string;
}

/**
 * Wraps Recharts ResponsiveContainer with consistent sizing and dark-mode config.
 */
export function ChartContainer({ children, height = 320, className }: ChartContainerProps) {
  return (
    <div className={cn('w-full', className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

/** Reusable dark tooltip wrapper for custom Recharts tooltips */
export function ChartTooltip({
  active,
  children,
}: {
  active?: boolean;
  children: ReactNode;
}) {
  if (!active) return null;
  return (
    <div className="bg-surface-700 border border-default rounded-xl p-3 shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-sm min-w-[140px]">
      {children}
    </div>
  );
}
