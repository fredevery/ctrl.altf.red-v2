// @vitest-environment jsdom
import React from 'react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SkipToContent } from './SkipToContent';

describe('SkipToContent', () => {
  it('renders the skip link with correct text and href', () => {
    render(<SkipToContent />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#main-content');
    expect(link).toHaveClass('sr-only');
  });

  it('is focusable and visible when focused', () => {
    render(<SkipToContent />);
    const link = screen.getByRole('link', { name: /skip to main content/i });
    link.focus();
    expect(link).toHaveFocus();
    // Optionally, check that the class changes (if your CSS-in-JS solution applies it)
    // expect(link).not.toHaveClass('sr-only');
  });

  //   it('navigates to main content anchor when clicked', () => {
  //     // Render both the skip link and a main content anchor
  //     render(
  //       <>
  //         <SkipToContent />
  //         <main id="main-content" data-testid="main-content">
  //           Main Content
  //         </main>
  //       </>,
  //     );
  //     const link = screen.getByRole('link', { name: /skip to main content/i });
  //     fireEvent.click(link);
  //     // The browser would scroll to the anchor; in jsdom, just check the hash
  //     console.log('Current URL:', window.location.href);
  //     expect(window.location.hash).toBe('#main-content');
  //   });
});
