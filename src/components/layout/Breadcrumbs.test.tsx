// @vitest-environment jsdom
import * as nextNavigation from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import type { Mock } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from './Breadcrumbs';

// Mock usePathname from next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Breadcrumbs', () => {
  it('renders Home as the only crumb on root path', () => {
    (nextNavigation.usePathname as Mock).mockReturnValue('/');
    render(<Breadcrumbs />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Home' }),
    ).not.toBeInTheDocument();
  });

  it('renders correct crumbs for nested path', () => {
    (nextNavigation.usePathname as Mock).mockReturnValue('/blog/my-post');
    render(<Breadcrumbs />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
      'href',
      '/blog',
    );
    expect(screen.getByText('My Post')).toHaveAttribute('aria-current', 'page');
  });

  it('has correct aria-label and structure', () => {
    (nextNavigation.usePathname as Mock).mockReturnValue('/projects/awesome');
    render(<Breadcrumbs />);
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Awesome')).toHaveAttribute('aria-current', 'page');
  });
});
