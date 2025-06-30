import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BlogPostCard } from '@/components/ui/BlogPostCard';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { getAllBlogPosts } from '@/content/getAllBlogPosts';

const PAGE_SIZE = 6;

interface TagPageProps {
  params: { tag: string; page: string };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag, page } = await params;
  const pageNum = parseInt(page, 10) || 1;
  const posts = await getAllBlogPosts();
  const filteredPosts = posts.filter((post) => post.data.tags?.includes(tag));
  if (filteredPosts.length === 0) notFound();

  const sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  if (pageNum < 1 || pageNum > totalPages) notFound();

  const start = (pageNum - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedPosts = sortedPosts.slice(start, end);

  return (
    <Container className="py-8">
      <Typography as="h1" variant="h1" className="mb-8">
        Posts tagged <span className="text-primary">{tag}</span>
      </Typography>
      <section aria-label={`Blog posts tagged ${tag}`}>
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
          href={`/blog/tag/${encodeURIComponent(tag)}/page/${pageNum - 1}`}
          aria-disabled={pageNum <= 1}
          tabIndex={pageNum <= 1 ? -1 : 0}
          className={`px-4 py-2 rounded border ${
            pageNum <= 1
              ? 'opacity-50 pointer-events-none'
              : 'hover:bg-primary/10 focus:bg-primary/10'
          }`}
        >
          Previous
        </Link>
        <span>
          Page {pageNum} of {totalPages}
        </span>
        <Link
          href={`/blog/tag/${encodeURIComponent(tag)}/page/${pageNum + 1}`}
          aria-disabled={pageNum >= totalPages}
          tabIndex={pageNum >= totalPages ? -1 : 0}
          className={`px-4 py-2 rounded border ${
            pageNum >= totalPages
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
