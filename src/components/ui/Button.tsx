import { type VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';

/**
 * Usage examples:
 *
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Primary variant (default)
 * <Button variant="primary">Primary</Button>
 *
 * // Secondary variant
 * <Button variant="secondary">Secondary</Button>
 *
 * // Outline variant, large size
 * <Button variant="outline" size="lg">Outline Large</Button>
 *
 * // Ghost variant, small size, with custom class
 * <Button variant="ghost" size="sm" className="my-custom-class">Ghost Small</Button>
 *
 * // Destructive variant, disabled
 * <Button variant="destructive" disabled>Delete</Button>
 *
 * // Render as anchor link
 * <Button asChild href="https://example.com" variant="primary">Go to Example</Button>
 */

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-900',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        icon: 'h-8 w-8 p-0',
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export interface AnchorButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & AnchorButtonProps) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

Button.displayName = 'Button';
