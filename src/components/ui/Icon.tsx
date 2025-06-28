import React from 'react';
import clsx from 'clsx';

/**
 * Usage examples:
 *
 * // Inline SVG icon
 * <Icon>
 *   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
 *     <path d="..." />
 *   </svg>
 * </Icon>
 *
 * // With size and color
 * <Icon size="lg" className="text-blue-600">
 *   <SomeSvgIcon />
 * </Icon>
 *
 * // As a button icon
 * <button>
 *   <Icon size="sm" aria-label="Close">
 *     <CloseIcon />
 *   </Icon>
 * </button>
 */

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
};

export function Icon({
  children,
  size = 'md',
  className,
  as = 'span',
  ...props
}: IconProps) {
  const Comp = as;
  return (
    <Comp
      className={clsx(
        'inline-flex items-center justify-center',
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
