// src/lib/tagUtils.ts

/**
 * Extracts unique tags from an array of items.
 * @param items - Array of objects with a 'tags' property (string[]).
 * @returns Array of unique tags, sorted alphabetically.
 *
 * Example usage:
 *   extractUniqueTags([{ tags: ['react', 'next'] }, { tags: ['next', 'js'] }])
 *   // ['js', 'next', 'react']
 */
export function extractUniqueTags<T extends { tags: string[] }>(
  items: T[],
): string[] {
  const tagSet = new Set<string>();
  for (const item of items) {
    item.tags.forEach((tag) => tagSet.add(tag));
  }
  return Array.from(tagSet).sort();
}

/**
 * Filters items by a given tag.
 * @param items - Array of objects with a 'tags' property (string[]).
 * @param tag - Tag to filter by.
 * @returns Filtered array of items containing the tag.
 *
 * Example usage:
 *   filterByTag([{ tags: ['react'] }, { tags: ['next'] }], 'react')
 *   // [{ tags: ['react'] }]
 */
export function filterByTag<T extends { tags: string[] }>(
  items: T[],
  tag: string,
): T[] {
  return items.filter((item) => item.tags.includes(tag));
}

// Deprecated: Use extractUniqueTags instead for generic tag extraction
// export function getAllTags(posts: BlogPost[]): string[] {
//   const tagSet = new Set<string>();
//   posts.forEach((post) => {
//     post.tags?.forEach((tag) => tagSet.add(tag));
//   });
//   return Array.from(tagSet).sort();
// }
