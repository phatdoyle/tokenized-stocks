/**
 * Minimal className merger — avoids adding clsx/tailwind-merge as dependencies.
 * Filters falsy values and joins with a space.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
