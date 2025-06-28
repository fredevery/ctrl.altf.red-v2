import fs from 'fs/promises';
import matter from 'gray-matter';
import { ZodSchema } from 'zod';

/**
 * Parses a markdown file, validates frontmatter, and returns metadata + content.
 * @param filePath Absolute path to the markdown file
 * @param schema Zod schema for frontmatter validation
 */
export async function parseMarkdownFile<T>(
  filePath: string,
  schema: ZodSchema<T>,
): Promise<{ data: T; content: string }> {
  const raw = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(raw);
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: ${JSON.stringify(parsed.error.issues)}`,
    );
  }
  return { data: parsed.data, content };
}

/**
 * Usage Example:
 *
 * import { blogPostSchema } from './schemas';
 * const post = await parseMarkdownFile("/absolute/path/to/post.md", blogPostSchema);
 * // post.data is typed and validated, post.content is the markdown body
 */
