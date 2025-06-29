// src/lib/slugify.ts

/**
 * Converts a string to a URL-friendly slug.
 * - Lowercases
 * - Trims whitespace
 * - Replaces spaces and underscores with hyphens
 * - Removes non-alphanumeric characters (except hyphens)
 *
 * Example usage:
 *   slugify('Hello World!') // "hello-world"
 *   slugify('  My_Project_Title  ') // "my-project-title"
 *   slugify('Café & Croissant') // "cafe-croissant"
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .trim()
    .replace(/[_\s]+/g, '-') // Replace spaces/underscores with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end
}
