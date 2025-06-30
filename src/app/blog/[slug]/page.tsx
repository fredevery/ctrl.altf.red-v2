// src/app/blog/[slug]/page.tsx
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import rehypePrism from 'rehype-prism-plus';

import { Container } from '@/components/ui/Container';
import { RelatedPosts } from '@/components/ui/RelatedPosts';
import { Typography } from '@/components/ui/Typography';
import { getAllBlogPosts } from '@/content/getAllBlogPosts';
import { formatDate } from '@/lib/utils/dateUtils';

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrism],
      },
    },
  });

  return (
    <Container className="py-8 max-w-3xl">
      <article>
        <header className="mb-8">
          <Typography as="h1" variant="h1" className="mb-2">
            {post.data.title}
          </Typography>
          <Typography as="p" className="text-sm text-muted-foreground">
            {formatDate(post.data.date)}
          </Typography>
          {post.data.tags && post.data.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tags">
              {post.data.tags.map((tag: string) => (
                <li key={tag}>
                  <Link
                    href={`/blog/tag/${encodeURIComponent(tag)}`}
                    className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs hover:underline"
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </header>
        <section className="prose prose-neutral dark:prose-invert max-w-none">
          {content}
        </section>
        <RelatedPosts
          currentSlug={post.slug}
          tags={post.data.tags || []}
          allPosts={posts}
          max={3}
        />
      </article>
    </Container>
  );
}
