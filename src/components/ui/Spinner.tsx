import React from 'react';
import clsx from 'clsx';

/**
 * Usage examples:
 *
 * // Default spinner
 * <Spinner />
 *
 * // Large spinner, custom color
 * <Spinner size="lg" className="text-blue-600" />
 *
 * // Inline spinner with text
 * <span className="inline-flex items-center gap-2">
 *   <Spinner size="sm" /> Loading...
 * </span>
 */

interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
};

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  return (
    <svg
      className={clsx('animate-spin', sizeMap[size], className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}
