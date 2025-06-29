// src/lib/seoMeta.ts

/**
 * Generates a standard set of SEO meta tags for a page.
 * @param options - SEO options (title, description, url, image, etc.)
 * @returns Array of meta tag objects (for use with Next.js or React)
 *
 * Example usage:
 *   seoMeta({
 *     title: 'My Page',
 *     description: 'A description.',
 *     url: 'https://ctrl.altf.red/page',
 *     image: 'https://ctrl.altf.red/images/cover.jpg'
 *   })
 */

export type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

export function seoMeta(options: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
}): MetaTag[] {
  const {
    title,
    description,
    url,
    image,
    type = 'website',
    siteName = 'ctrl.altf.red',
    twitterCard = 'summary_large_image',
    twitterSite = '@yourtwitter',
  } = options;

  return [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:url', content: url },
    { property: 'og:site_name', content: siteName },
    image && { property: 'og:image', content: image },
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    image && { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: twitterSite },
  ].filter(Boolean) as MetaTag[];
}
