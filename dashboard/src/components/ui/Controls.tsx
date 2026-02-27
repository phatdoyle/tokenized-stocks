import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

// ---------------------------------------------------------------------------
// SelectField
// ---------------------------------------------------------------------------
interface SelectFieldProps<T extends string> {
  label?: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}

export function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
  className,
}: SelectFieldProps<T>) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-xs font-medium text-secondary uppercase tracking-wider">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className={cn(
          'appearance-none bg-surface-700 border border-subtle rounded-lg',
          'px-3 py-2 text-sm text-surface-100 font-mono',
          'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30',
          'transition-colors duration-150',
          'pr-8',
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238A97A8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-surface-800">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// ---------------------------------------------------------------------------
// InputField
// ---------------------------------------------------------------------------
interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  className,
}: InputFieldProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && (
        <label className="text-xs font-medium text-secondary uppercase tracking-wider">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'bg-surface-700 border border-subtle rounded-lg',
          'px-3 py-2 text-sm text-surface-100 font-mono',
          'placeholder:text-surface-400',
          'focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30',
          'transition-colors duration-150',
        )}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// ControlBar — horizontal filter row
// ---------------------------------------------------------------------------
export function ControlBar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      'flex flex-wrap gap-3 p-4 rounded-lg border border-subtle bg-surface-800/60 mb-5',
      className,
    )}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// SegmentedControl — period tabs
// ---------------------------------------------------------------------------
interface SegmentedControlProps<T extends string> {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div className={cn(
      'inline-flex items-center gap-1 p-1 rounded-lg bg-surface-800 border border-subtle',
      className,
    )}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-all duration-150',
            value === opt.value
              ? 'bg-accent text-surface-900 shadow-glow-sm'
              : 'text-secondary hover:text-surface-100',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
