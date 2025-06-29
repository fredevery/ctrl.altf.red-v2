// Ensure jsdom environment for DOM APIs like document
import { type DOMWindow, JSDOM } from 'jsdom';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { act, renderHook } from '@testing-library/react';

import { useTheme } from './useTheme';

type GlobalThis = typeof globalThis;
type GlobalDOMWindow = DOMWindow & typeof globalThis;
interface Global extends GlobalThis {
  window: (DOMWindow & typeof globalThis) | (Window & typeof globalThis);
  document: Document;
  localStorage: {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
    clear: () => void;
    length: number;
    key: (index: number) => string | null;
  };
}
// type Global = typeof globalThis & { window: DOMWindow; document: Document };

// Setup jsdom if not already present
if (typeof document === 'undefined') {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  (global as Global).window = dom.window as GlobalDOMWindow;
  (global as Global).document = dom.window.document;
}

const localStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
    length: Object.keys(store).length,
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
  };
};
(global as Global).localStorage = localStorageMock();

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('should default to system preference if no theme is stored', () => {
    // Mock matchMedia
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    const { result } = renderHook(() => useTheme());
    expect(['light', 'dark']).toContain(result.current[0]);
  });

  it('should use stored theme if available', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current[0]).toBe('dark');
  });

  it('should update theme and localStorage', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current[1]('dark');
    });
    expect(result.current[0]).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
