import React from 'react';
import clsx from 'clsx';

/**
 * Usage examples:
 *
 * // Heading 1
 * <Typography variant="h1">Heading 1</Typography>
 *
 * // Paragraph
 * <Typography variant="p">This is a paragraph.</Typography>
 *
 * // Blockquote
 * <Typography variant="blockquote">A wise quote.</Typography>
 *
 * // Muted helper text
 * <Typography variant="muted">Muted helper text.</Typography>
 *
 * // Custom element
 * <Typography as="span" variant="h2">Span as H2 style</Typography>
 */

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
  children: React.ReactNode;
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold tracking-tight lg:text-5xl',
  h2: 'text-3xl font-semibold tracking-tight lg:text-4xl',
  h3: 'text-2xl font-semibold tracking-tight',
  h4: 'text-xl font-semibold tracking-tight',
  p: 'text-base leading-relaxed',
  blockquote: 'border-l-4 pl-4 italic text-gray-600 dark:text-gray-400',
};

export function Typography({
  as,
  variant = 'p',
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as || variant;
  return (
    <Component className={clsx(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
