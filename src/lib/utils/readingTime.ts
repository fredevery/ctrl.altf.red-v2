// src/lib/readingTime.ts

/**
 * Estimates reading time for a given text.
 * @param text - The input text to analyze.
 * @param wordsPerMinute - Average reading speed (default: 200 wpm).
 * @returns { minutes: number, words: number, text: string }
 *
 * Example usage:
 *   readingTime('This is a test.') // { minutes: 1, words: 4, text: '1 min read' }
 *   readingTime('A long article ...', 250) // { minutes: X, words: Y, text: 'X min read' }
 */
export function readingTime(
  text: string,
  wordsPerMinute: number = 200,
): { minutes: number; words: number; text: string } {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return {
    minutes,
    words,
    text: `${minutes} min read`,
  };
}
