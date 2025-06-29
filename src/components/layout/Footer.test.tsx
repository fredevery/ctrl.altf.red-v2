// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('renders all social links with correct hrefs and aria-labels', () => {
    render(<Footer />);
    expect(screen.getByLabelText('GitHub')).toHaveAttribute(
      'href',
      'https://github.com/yourusername',
    );
    expect(screen.getByLabelText('Twitter')).toHaveAttribute(
      'href',
      'https://twitter.com/yourusername',
    );
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'href',
      'mailto:you@example.com',
    );
  });

  it('renders copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    // Match the exact copyright string
    const copyrightText = `© ${year} ctrl.altf.red. All rights reserved.`;
    expect(
      screen.getByText(copyrightText, {
        selector: 'div.text-sm.text-muted-foreground',
      }),
    ).toBeInTheDocument();
  });

  it('has accessible navigation', () => {
    render(<Footer />);
    expect(
      screen.getByRole('navigation', { name: /footer navigation/i }),
    ).toBeInTheDocument();
  });
});
