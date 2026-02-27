import { cn } from '../../lib/cn';

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = 'Loading data…', className }: LoadingStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 gap-4', className)}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-surface-500" />
        <div className="absolute inset-0 rounded-full border-2 border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-spin" />
      </div>
      <p className="text-sm text-secondary">{message}</p>
    </div>
  );
}

interface ErrorStateProps {
  message?: string;
  className?: string;
}

export function ErrorState({ message = 'Something went wrong', className }: ErrorStateProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center py-12 gap-3',
      'bg-negative/5 border border-negative/20 rounded-xl',
      className,
    )}>
      <div className="w-10 h-10 rounded-full bg-negative/15 flex items-center justify-center text-negative text-xl">
        ⚠
      </div>
      <p className="text-sm text-negative/80">{message}</p>
    </div>
  );
}

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export function EmptyState({ message = 'No data available', className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 gap-3', className)}>
      <div className="w-10 h-10 rounded-full bg-surface-600 flex items-center justify-center text-secondary text-lg">
        ∅
      </div>
      <p className="text-sm text-secondary">{message}</p>
    </div>
  );
}
