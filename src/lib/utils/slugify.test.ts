import { describe, expect, it } from 'vitest';

import { slugify } from './slugify';

describe('slugify', () => {
  it('converts spaces to hyphens and lowercases', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('trims whitespace and handles underscores', () => {
    expect(slugify('  My_Project_Title  ')).toBe('my-project-title');
  });

  it('removes special characters except hyphens', () => {
    expect(slugify('Café & Croissant!')).toBe('cafe-croissant');
  });

  it('removes multiple hyphens', () => {
    expect(slugify('Hello---World')).toBe('hello-world');
  });

  it('removes hyphens from start and end', () => {
    expect(slugify('---Hello World---')).toBe('hello-world');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('handles only special characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('');
  });
});
