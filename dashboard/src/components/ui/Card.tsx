import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a subtle teal hover glow border */
  hoverable?: boolean;
  /** Remove default padding */
  noPadding?: boolean;
}

/**
 * Base card surface — dark glass panel with subtle border.
 */
export function Card({ children, className, hoverable = false, noPadding = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-subtle bg-surface-card shadow-card',
        hoverable && 'transition-all duration-200 cursor-pointer bg-surface-card-hover',
        !noPadding && 'p-6',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  icon?: ReactNode;
}

export function CardHeader({ title, subtitle, action, icon }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-sm">
            {icon}
          </div>
        )}
        <div>
          <h2 className="font-display text-base font-semibold text-surface-100 leading-tight">{title}</h2>
          {subtitle && <p className="text-xs text-secondary mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
