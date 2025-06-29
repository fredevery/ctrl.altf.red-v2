import { describe, expect, it } from 'vitest';

import { imagePath, imageUrl } from './imagePath';

describe('imagePath', () => {
  it('returns correct path with default base', () => {
    expect(imagePath('photo.jpg')).toBe('/images/photo.jpg');
  });

  it('removes leading slash from filename', () => {
    expect(imagePath('/avatar.png')).toBe('/images/avatar.png');
  });

  it('removes trailing slash from baseDir', () => {
    expect(imagePath('cover.jpg', '/blog-images/')).toBe(
      '/blog-images/cover.jpg',
    );
  });

  it('works with custom baseDir', () => {
    expect(imagePath('logo.svg', '/assets')).toBe('/assets/logo.svg');
  });
});

describe('imageUrl', () => {
  it('returns correct URL with default base', () => {
    expect(imageUrl('logo.svg', 'https://ctrl.altf.red')).toBe(
      'https://ctrl.altf.red/images/logo.svg',
    );
  });

  it('removes trailing slash from origin', () => {
    expect(imageUrl('logo.svg', 'https://ctrl.altf.red/', '/assets')).toBe(
      'https://ctrl.altf.red/assets/logo.svg',
    );
  });

  it('works with custom baseDir', () => {
    expect(imageUrl('cover.jpg', 'https://site.com', '/blog-images')).toBe(
      'https://site.com/blog-images/cover.jpg',
    );
  });
});
