// src/types/content.ts

import { z } from 'zod';
import { blogPostSchema, projectSchema } from '../content/schemas';

// Infer types from Zod schemas
export type BlogPostFrontmatter = z.infer<typeof blogPostSchema>;
export type ProjectFrontmatter = z.infer<typeof projectSchema>;

// Full blog post object (as returned by getAllBlogPosts)
export interface BlogPost {
  data: BlogPostFrontmatter;
  content: string;
  slug: string;
  filePath: string;
}

// Full project object (as returned by getAllProjects)
export interface Project {
  data: ProjectFrontmatter;
  content: string;
  slug: string;
  filePath: string;
}
