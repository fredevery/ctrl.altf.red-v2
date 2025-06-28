import React from 'react';
import clsx from 'clsx';

/**
 * Usage examples:
 *
 * // Basic Card
 * <Card>
 *   <CardHeader>Header</CardHeader>
 *   <CardBody>Body content goes here.</CardBody>
 *   <CardFooter>Footer</CardFooter>
 * </Card>
 *
 * // Card with outline variant
 * <Card variant="outline">
 *   <CardHeader>Outlined Header</CardHeader>
 *   <CardBody>Outlined body.</CardBody>
 * </Card>
 *
 * // Card as a section element with shadow
 * <Card asChild variant="shadow">
 *   <CardHeader>Shadowed Header</CardHeader>
 *   <CardBody>Shadowed body.</CardBody>
 * </Card>
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'shadow';
  asChild?: boolean;
}

export function Card({
  className,
  children,
  variant = 'default',
  asChild = false,
  ...props
}: CardProps) {
  const base = 'rounded-lg bg-white dark:bg-gray-900 transition-shadow';
  const variants = {
    default: 'border border-gray-200 dark:border-gray-800',
    outline: 'border-2 border-primary-500',
    shadow: 'shadow-lg border border-transparent',
  };
  const Comp = asChild ? 'section' : 'div';
  return (
    <Comp className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'border-b border-gray-200 p-4 dark:border-gray-800',
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('p-4', className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'border-t border-gray-200 p-4 dark:border-gray-800',
        className,
      )}
      {...props}
    />
  );
}
