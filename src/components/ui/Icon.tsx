import clsx from 'clsx';
import { AppWindowMac, ChevronRight, X as CloseIcon, Menu } from 'lucide-react';
import React from 'react';

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

const nameMap = {
  close: CloseIcon,
  menu: Menu,
  window: AppWindowMac,
  chevronRight: ChevronRight,
};

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  name?: keyof typeof nameMap;
  size?: 'sm' | 'md' | 'lg';
  as?: React.ElementType;
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
};

export function Icon({
  children,
  name,
  size = 'md',
  className,
  as = 'span',
  ...props
}: IconProps) {
  const Comp = as;
  const LucideIcon = name ? nameMap[name] : null;
  return (
    <Comp
      className={clsx('inline-flex items-center justify-center', className)}
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon color="currentcolor" size={sizeMap[size]} />
      ) : (
        children
      )}
    </Comp>
  );
}

Icon.nameMap = nameMap;
