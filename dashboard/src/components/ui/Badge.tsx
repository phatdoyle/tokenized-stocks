import { cn } from '../../lib/cn';

type BadgeVariant = 'default' | 'accent' | 'positive' | 'negative' | 'warning' | 'blue';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:  'bg-surface-500 text-surface-100',
  accent:   'bg-accent/15 text-accent border border-accent/25',
  positive: 'bg-positive/15 text-positive border border-positive/25',
  negative: 'bg-negative/15 text-negative border border-negative/25',
  warning:  'bg-warning/15 text-warning border border-warning/25',
  blue:     'bg-blue-400/15 text-blue-400 border border-blue-400/25',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium font-mono',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Inline positive/negative change indicator */
export function ChangeLabel({ value, className }: { value: number | string; className?: string }) {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  const isPositive = num >= 0;
  return (
    <span className={cn(
      'inline-flex items-center gap-0.5 text-xs font-mono font-medium',
      isPositive ? 'text-positive' : 'text-negative',
      className,
    )}>
      {isPositive ? '▲' : '▼'} {Math.abs(num).toFixed(2)}%
    </span>
  );
}
