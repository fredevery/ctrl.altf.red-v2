import fs from 'fs/promises';
import matter from 'gray-matter';
// Add these imports for MDX serialization and syntax highlighting
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import { ZodSchema } from 'zod';

/**
 * Parses a markdown file, validates frontmatter, and returns metadata + content or mdx.
 * @param filePath Absolute path to the markdown file
 * @param schema Zod schema for frontmatter validation
 * @param options Optional config: { as: 'mdx' | 'markdown' | 'raw' }
 */
export async function parseMarkdownFile<T, C = string>(
  filePath: string,
  schema: ZodSchema<T>,
  options?: { as?: 'mdx' | 'markdown' | 'raw' },
): Promise<{ data: T; content: C }> {
  const raw = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(raw);

  if (options?.as === 'raw') {
    // If 'raw' is specified, return the raw content without parsing
    return { data: data as T, content: raw as C };
  }

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${filePath}: ${JSON.stringify(parsed.error.issues)}`,
    );
  }
  if (options?.as === 'mdx') {
    // Serialize MDX with syntax highlighting
    const mdxSource = await serialize(raw, {
      mdxOptions: {
        rehypePlugins: [rehypePrism],
      },
    });
    return { data: parsed.data, content: mdxSource as C }; // content is now an MDXRemoteSerializeResult
  }
  // If options.as === 'markdown' or not specified, return content as markdown string
  return { data: parsed.data, content: content as C };
}

/**
 * Usage Example:
 *
 * import { blogPostSchema } from './schemas';
 * const post = await parseMarkdownFile("/absolute/path/to/post.md", blogPostSchema, { as: 'mdx' });
 * // post.data is typed and validated, post.content is the serialized MDX
 */
