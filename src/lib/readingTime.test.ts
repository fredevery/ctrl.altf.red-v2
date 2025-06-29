import { describe, expect, it } from 'vitest';

import { readingTime } from './readingTime';

describe('readingTime', () => {
  it('returns 1 min read for short text', () => {
    const result = readingTime('This is a test.');
    expect(result).toEqual({ minutes: 1, words: 4, text: '1 min read' });
  });

  it('calculates correct minutes for longer text', () => {
    const text = Array(401).fill('word').join(' '); // 401 words
    const result = readingTime(text);
    expect(result.minutes).toBe(3); // 401/200 = 2.005, ceil = 3
    expect(result.words).toBe(401);
    expect(result.text).toBe('3 min read');
  });

  it('uses custom words per minute', () => {
    const text = Array(500).fill('word').join(' ');
    const result = readingTime(text, 250);
    expect(result.minutes).toBe(2); // 500/250 = 2
    expect(result.words).toBe(500);
    expect(result.text).toBe('2 min read');
  });

  it('handles empty string as 1 min read', () => {
    const result = readingTime('');
    expect(result).toEqual({ minutes: 1, words: 0, text: '1 min read' });
  });
});
