import { describe, expect, it } from 'vitest';

import { formatDate, formatISO, formatRelative } from './dateUtils';

describe('dateUtils', () => {
  const testDate = new Date('2025-06-29T12:34:56Z');

  describe('formatDate', () => {
    it('formats date in long format', () => {
      expect(formatDate(testDate, 'long', 'en-US')).toBe('June 29, 2025');
    });

    it('formats date in short format', () => {
      expect(formatDate(testDate, 'short', 'en-US')).toBe('Jun 29, 25');
    });

    it('accepts ISO string input', () => {
      expect(formatDate('2025-06-29T12:34:56Z', 'long', 'en-US')).toBe(
        'June 29, 2025',
      );
    });

    it('supports different locales', () => {
      expect(formatDate(testDate, 'long', 'fr-FR')).toBe('29 juin 2025');
    });
  });

  describe('formatISO', () => {
    it('formats date to ISO string', () => {
      expect(formatISO(testDate)).toBe('2025-06-29');
    });

    it('accepts ISO string input', () => {
      expect(formatISO('2025-06-29T12:34:56Z')).toBe('2025-06-29');
    });
  });

  describe('formatRelative', () => {
    it('returns "tomorrow" for future date', () => {
      const base = new Date('2025-06-28T12:34:56Z');
      expect(formatRelative(testDate, base, 'en-US')).toBe('tomorrow');
    });

    it('returns "yesterday" for past date', () => {
      const base = new Date('2025-06-30T12:34:56Z');
      expect(formatRelative(testDate, base, 'en-US')).toBe('yesterday');
    });

    it('returns "in 1 hour" for future hour', () => {
      const base = new Date('2025-06-29T11:34:56Z');
      expect(formatRelative(testDate, base, 'en-US')).toBe('in 1 hour');
    });

    it('returns "in 1 minute" for future minute', () => {
      const base = new Date('2025-06-29T12:33:56Z');
      expect(formatRelative(testDate, base, 'en-US')).toBe('in 1 minute');
    });

    it('returns "in 1 second" for future second', () => {
      const base = new Date('2025-06-29T12:34:55Z');
      expect(formatRelative(testDate, base, 'en-US')).toBe('in 1 second');
    });

    it('supports different locales', () => {
      const base = new Date('2025-06-28T12:34:56Z');
      expect(formatRelative(testDate, base, 'fr-FR')).toBe('demain');
    });
  });
});
