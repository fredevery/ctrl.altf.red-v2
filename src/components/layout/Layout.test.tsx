// @vitest-environment jsdom
import React from 'react';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Layout } from './Layout';

describe('Layout', () => {
  it('renders header, footer, skip link, and children', () => {
    render(
      <Layout>
        <div data-testid="page-content">Hello World</div>
      </Layout>,
    );
    // Header
    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument();
    // Footer
    expect(
      screen.getByRole('navigation', { name: /footer navigation/i }),
    ).toBeInTheDocument();
    // Skip link
    expect(
      screen.getByRole('link', { name: /skip to main content/i }),
    ).toBeInTheDocument();
    // Children
    expect(screen.getByTestId('page-content')).toHaveTextContent('Hello World');
  });

  it('renders main content area with correct id', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>,
    );
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });
});
