'use client';

import { useTheme } from '@/lib/hooks/useTheme';

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-secondary text-secondary-foreground rounded p-2"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
