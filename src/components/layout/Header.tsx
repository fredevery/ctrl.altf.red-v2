'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { ThemeToggle } from '../ui/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

function DesktopNav() {
  return (
    <ul className="hidden md:flex gap-6 items-center">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:text-primary transition-colors font-medium"
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
}

function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      menuRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Icon name={mobileOpen ? 'close' : 'menu'} size="md" />
        </Button>
      </div>
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          {/* Mobile Menu */}
          <div
            ref={menuRef}
            tabIndex={-1}
            className="fixed top-0 right-0 left-0 z-50 bg-background border-b animate-slideDown"
            role="dialog"
            aria-modal="true"
          >
            <ul className="flex flex-col gap-2 px-4 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <style jsx global>{`
            @keyframes slideDown {
              from {
                transform: translateY(-100%);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            .animate-slideDown {
              animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            }
          `}</style>
        </>
      )}
    </>
  );
}

export function Header() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur sticky top-0 z-50">
      <nav
        className="container mx-auto flex items-center justify-between py-3"
        aria-label="Main navigation"
      >
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Icon name="window" size="lg" />
          ctrl.altf.red
        </Link>
        <DesktopNav />
        <MobileNav />
      </nav>
    </header>
  );
}
