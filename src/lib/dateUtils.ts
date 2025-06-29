// src/lib/dateUtils.ts

/**
 * Format a date to a human-readable string.
 * @param date - Date object or ISO string
 * @param format - 'long' (default) or 'short'
 * @param locale - Optional locale string (default: 'en-US')
 */
export function formatDate(
  date: Date | string,
  format: 'long' | 'short' = 'long',
  locale: string = 'en-US',
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const options: Intl.DateTimeFormatOptions =
    format === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: '2-digit', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, options).format(d);
}

/**
 * Format a date to ISO 8601 string (YYYY-MM-DD).
 * @param date - Date object or ISO string
 */
export function formatISO(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * Format a date as relative time (e.g., "2 days ago").
 * @param date - Date object or ISO string
 * @param baseDate - Optional base date (default: now)
 * @param locale - Optional locale string (default: 'en-US')
 */
export function formatRelative(
  date: Date | string,
  baseDate: Date = new Date(),
  locale: string = 'en-US',
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const diff = d.getTime() - baseDate.getTime();
  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

  if (Math.abs(days) > 0) return rtf.format(days, 'day');
  if (Math.abs(hours) > 0) return rtf.format(hours, 'hour');
  if (Math.abs(minutes) > 0) return rtf.format(minutes, 'minute');
  return rtf.format(seconds, 'second');
}
