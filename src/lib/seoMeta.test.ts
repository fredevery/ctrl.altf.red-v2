import { describe, expect, it } from 'vitest';

import { type MetaTag, seoMeta } from './seoMeta';

describe('seoMeta', () => {
  it('generates standard meta tags', () => {
    const tags = seoMeta({
      title: 'Test Title',
      description: 'Test description.',
      url: 'https://ctrl.altf.red/test',
      image: 'https://ctrl.altf.red/images/test.jpg',
      siteName: 'ctrl.altf.red',
      twitterSite: '@ctrlaltfred',
    });

    expect(tags).toEqual([
      { name: 'description', content: 'Test description.' },
      { property: 'og:title', content: 'Test Title' },
      { property: 'og:description', content: 'Test description.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ctrl.altf.red/test' },
      { property: 'og:site_name', content: 'ctrl.altf.red' },
      {
        property: 'og:image',
        content: 'https://ctrl.altf.red/images/test.jpg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Test Title' },
      { name: 'twitter:description', content: 'Test description.' },
      {
        name: 'twitter:image',
        content: 'https://ctrl.altf.red/images/test.jpg',
      },
      { name: 'twitter:site', content: '@ctrlaltfred' },
    ]);
  });

  it('omits image tags if no image provided', () => {
    const tags = seoMeta({
      title: 'No Image',
      description: 'No image here.',
      url: 'https://ctrl.altf.red/no-image',
    });

    expect(
      tags.some((tag) => tag && (tag as MetaTag).property === 'og:image'),
    ).toBe(false);
    expect(
      tags.some((tag) => tag && (tag as MetaTag).name === 'twitter:image'),
    ).toBe(false);
  });

  it('uses custom type and twitter card', () => {
    const tags = seoMeta({
      title: 'Article',
      description: 'An article.',
      url: 'https://ctrl.altf.red/article',
      type: 'article',
      twitterCard: 'summary',
    });

    expect(tags).toEqual(
      expect.arrayContaining([
        { property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary' },
      ]),
    );
  });
});
