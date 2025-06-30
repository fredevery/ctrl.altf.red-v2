// src/app/blog/page/[page]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { getAllBlogPosts } from '@/content/getAllBlogPosts';
import { extractUniqueTags } from '@/lib/utils/tagUtils';

const PAGE_SIZE = 6;

interface BlogPageProps {
  params: { page: string };
  searchParams?: { tag?: string };
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  const page = parseInt(params.page, 10) || 1;
  const posts = await getAllBlogPosts();
  const tags = extractUniqueTags(
    posts.map((post) => ({ tags: post.data.tags || [] })),
  );
  const selectedTag = searchParams?.tag || null;

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.data.tags?.includes(selectedTag))
    : posts;

  const sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  if (page < 1 || page > totalPages) notFound();
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedPosts = sortedPosts.slice(start, end);

  return (
    <Container className="py-8">
      <Typography as="h1" variant="h1" className="mb-8">
        Blog
      </Typography>
      <nav aria-label="Filter by tag" className="mb-8">
        <ul className="flex flex-wrap gap-2">
          <li>
            <Link
              href={`/blog/page/1`}
              className={!selectedTag ? 'font-bold underline' : ''}
              aria-pressed={!selectedTag}
            >
              All
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/blog/page/1?tag=${encodeURIComponent(tag)}`}
                className={selectedTag === tag ? 'font-bold underline' : ''}
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section aria-label="Blog posts">
        <ul className="grid gap-8 md:grid-cols-2">
          {paginatedPosts.map((post) => (
            <li key={post.slug}>
              <BlogPostCard
                slug={post.slug}
                title={post.data.title}
                date={post.data.date}
                summary={post.data.summary}
                tags={post.data.tags}
                coverImage={post.data.coverImage}
              />
            </li>
          ))}
        </ul>
      </section>
      <nav
        className="flex justify-center items-center gap-4 mt-12"
        aria-label="Pagination"
      >
        <Link
          href={`/blog/page/${page - 1}${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`}
          aria-disabled={page <= 1}
          tabIndex={page <= 1 ? -1 : 0}
          className={`px-4 py-2 rounded border ${
            page <= 1
              ? 'opacity-50 pointer-events-none'
              : 'hover:bg-primary/10 focus:bg-primary/10'
          }`}
        >
          Previous
        </Link>
        <span>
          Page {page} of {totalPages}
        </span>
        <Link
          href={`/blog/page/${page + 1}${selectedTag ? `?tag=${encodeURIComponent(selectedTag)}` : ''}`}
          aria-disabled={page >= totalPages}
          tabIndex={page >= totalPages ? -1 : 0}
          className={`px-4 py-2 rounded border ${
            page >= totalPages
              ? 'opacity-50 pointer-events-none'
              : 'hover:bg-primary/10 focus:bg-primary/10'
          }`}
        >
          Next
        </Link>
      </nav>
    </Container>
  );
}
