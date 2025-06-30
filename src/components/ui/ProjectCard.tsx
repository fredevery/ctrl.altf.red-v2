import Link from 'next/link';
import { FC } from 'react';

import { Card } from './Card';
import { Typography } from './Typography';

export type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  demo?: string;
  repo?: string;
  image?: string;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  slug,
  title,
  description,
  tags,
  demo,
  repo,
  image,
}) => (
  <Link
    href={`/projects/${slug}`}
    className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
    aria-label={`View details for project: ${title}`}
  >
    <Card className="h-full flex flex-col transition-shadow group-hover:shadow-lg group-focus:shadow-lg">
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="mb-4 rounded-lg object-cover w-full h-40 transition-opacity group-hover:opacity-90"
          loading="lazy"
        />
      )}
      <Typography variant="h2" className="mb-2 group-hover:underline">
        {title}
      </Typography>
      <Typography variant="p" className="mb-4 text-muted-foreground">
        {description}
      </Typography>
      <div className="mt-auto flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        {demo && <span className="text-accent underline">Demo</span>}
        {repo && <span className="text-accent underline">GitHub</span>}
      </div>
    </Card>
  </Link>
);
