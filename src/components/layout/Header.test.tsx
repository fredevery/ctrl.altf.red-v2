// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { Header } from './Header';

describe('Header', () => {
  it('renders logo and navigation links (desktop)', () => {
    render(<Header />);
    expect(screen.getByText('ctrl.altf.red')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders theme toggle', () => {
    render(<Header />);
    expect(
      screen
        .getAllByRole('button')
        .some((btn) =>
          btn.getAttribute('aria-label')?.toLowerCase().includes('theme'),
        ),
    ).toBe(true);
  });

  it('opens and closes mobile menu', () => {
    render(<Header />);
    // Find the mobile menu button (should have aria-label "Open menu")
    const menuButton = screen.getByLabelText(/open menu/i);
    fireEvent.click(menuButton);
    // After opening, links should be visible in the mobile menu
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // Find the "Home" link inside the mobile menu dialog
    const dialog = screen.getByRole('dialog');
    expect(
      within(dialog).getByRole('link', { name: 'Home' }),
    ).toBeInTheDocument();
    // Close the menu
    const closeButton = screen.getByLabelText(/close menu/i);
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('has accessible navigation', () => {
    render(<Header />);
    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument();
  });
});
