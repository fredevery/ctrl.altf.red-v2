// src/components/ui/BlogPostCard.tsx
import Link from 'next/link';

import { formatDate } from '@/lib/utils/dateUtils';

import { Card } from './Card';
import { Typography } from './Typography';

export interface BlogPostCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  coverImage?: string;
}

export function BlogPostCard({
  slug,
  title,
  date,
  summary,
  tags,
  // coverImage,
}: BlogPostCardProps) {
  return (
    <Card
      tabIndex={0}
      className="h-full focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <header>
        <Typography as="h2" variant="h3">
          <Link
            href={`/blog/${slug}`}
            className="hover:underline focus:underline"
          >
            {title}
          </Link>
        </Typography>
        <Typography as="p" className="text-sm text-muted-foreground mt-1">
          {formatDate(date)}
        </Typography>
      </header>
      <Typography as="p" className="mt-4">
        {summary}
      </Typography>
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tags">
          {tags.map((tag) => (
            <li key={tag}>
              <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
