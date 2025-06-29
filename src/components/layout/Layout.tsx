import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { SkipToContent } from './SkipToContent';

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
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 min-h-[60vh]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
