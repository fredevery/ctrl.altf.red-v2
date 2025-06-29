import { describe, expect, it } from 'vitest';

import { extractUniqueTags, filterByTag } from './tagUtils';

describe('tagUtils', () => {
  const items = [
    { title: 'Post 1', tags: ['react', 'next'] },
    { title: 'Post 2', tags: ['next', 'js'] },
    { title: 'Post 3', tags: ['react', 'typescript'] },
    { title: 'Post 4', tags: ['next', 'js', 'typescript'] },
  ];

  describe('extractUniqueTags', () => {
    it('extracts all unique tags and sorts them', () => {
      expect(extractUniqueTags(items)).toEqual([
        'js',
        'next',
        'react',
        'typescript',
      ]);
    });

    it('returns empty array if no tags', () => {
      expect(extractUniqueTags([{ tags: [] }, { tags: [] }])).toEqual([]);
    });
  });

  describe('filterByTag', () => {
    it('filters items by a given tag', () => {
      const filtered = filterByTag(items, 'react');
      expect(filtered).toEqual([
        { title: 'Post 1', tags: ['react', 'next'] },
        { title: 'Post 3', tags: ['react', 'typescript'] },
      ]);
    });

    it('returns empty array if no items match', () => {
      expect(filterByTag(items, 'vue')).toEqual([]);
    });
  });
});
