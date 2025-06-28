import React from 'react';
import clsx from 'clsx';

/**
 * Usage examples:
 *
 * // Default container
 * <Container>
 *   <Content />
 * </Container>
 *
 * // Fluid container (full width)
 * <Container fluid>
 *   <Content />
 * </Container>
 *
 * // Custom max width and padding
 * <Container maxWidth="2xl" className="py-8">
 *   <Content />
 * </Container>
 */

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | 'full';
  fluid?: boolean;
}

export function Container({
  children,
  className,
  maxWidth = '3xl',
  fluid = false,
  ...props
}: ContainerProps) {
  const widthClass = fluid ? 'w-full' : `max-w-${maxWidth} w-full`;
  return (
    <div className={clsx('mx-auto px-4', widthClass, className)} {...props}>
      {children}
    </div>
  );
}
