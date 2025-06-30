import { z } from 'zod';

/**
 * Blog Post Frontmatter Schema
 */
export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  summary: z.string().min(1, 'Summary is required'),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
  coverImage: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
});

/**
 * Project Frontmatter Schema
 */
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  description: z.string().min(1, 'Description is required'),
  tags: z.array(z.string()).optional(),
  repo: z.string().url().optional(),
  demo: z.string().url().optional(),
  image: z.string().optional(),
  featured: z.boolean().optional(),
  images: z.array(z.string()).optional(), // <-- add this line
});

/**
 * Usage Example:
 *
 * import matter from 'gray-matter';
 * import { blogPostSchema } from '@/content/schemas';
 *
 * const { data, content } = matter(markdownString);
 * const parsed = blogPostSchema.safeParse(data);
 * if (!parsed.success) {
 *   // handle validation error
 * }
 */
