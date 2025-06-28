import React from 'react';

/**
 * Usage example:
 *
 * <Layout>
 *   <main>
 *     <Container>
 *       <PageContent />
 *     </Container>
 *   </main>
 * </Layout>
 */

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Layout({ children, header, footer }: LayoutProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      {header}
      <div className="flex flex-1 flex-col">{children}</div>
      {footer}
    </div>
  );
}
