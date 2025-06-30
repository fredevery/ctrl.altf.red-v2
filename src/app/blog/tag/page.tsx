import Link from 'next/link';

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { getAllBlogPosts } from '@/content/getAllBlogPosts';
import { extractUniqueTags } from '@/lib/utils/tagUtils';

export default async function TagListingPage() {
  const posts = await getAllBlogPosts();
  const tags = extractUniqueTags(
    posts.map((post) => ({ tags: post.data.tags || [] })),
  );

  return (
    <Container className="py-8 max-w-2xl">
      <Typography as="h1" variant="h1" className="mb-8">
        All Tags
      </Typography>
      <ul className="flex flex-wrap gap-3" aria-label="Tag list">
        {tags.length === 0 ? (
          <li>No tags found.</li>
        ) : (
          tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog/tag/${encodeURIComponent(tag)}/page/1`}
                className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm hover:underline"
              >
                {tag}
              </Link>
            </li>
          ))
        )}
      </ul>
    </Container>
  );
}
