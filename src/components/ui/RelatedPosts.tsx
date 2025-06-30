import { BlogPostCard } from './BlogPostCard';

interface RelatedPostsProps {
  currentSlug: string;
  tags: string[];
  allPosts: {
    slug: string;
    data: {
      title: string;
      date: string;
      summary: string;
      tags?: string[];
      coverImage?: string;
    };
  }[];
  max?: number;
}

export function RelatedPosts({
  currentSlug,
  tags,
  allPosts,
  max = 3,
}: RelatedPostsProps) {
  if (!tags || tags.length === 0) return null;

  // Find posts that share at least one tag, excluding the current post
  const related = allPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        post.data.tags &&
        post.data.tags.some((tag) => tags.includes(tag)),
    )
    // Sort by most recent
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    )
    .slice(0, max);

  if (related.length === 0) return null;

  return (
    <aside aria-label="Related posts" className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {related.map((post) => (
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
    </aside>
  );
}
