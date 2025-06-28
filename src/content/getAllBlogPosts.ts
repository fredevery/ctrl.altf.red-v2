import fs from 'fs/promises';
import path from 'path';
import { parseMarkdownFile } from './parseMarkdown';
import { blogPostSchema } from './schemas';

/**
 * Loads and validates all blog posts from the content/blog directory.
 * Returns an array of { data, content, slug } objects.
 */
export async function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), 'src/content/blog');
  const files = await fs.readdir(blogDir);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(blogDir, file);
        const { data, content } = await parseMarkdownFile(
          filePath,
          blogPostSchema,
        );
        const slug = file.replace(/\.(md|mdx)$/, '');
        return { data, content, slug, filePath };
      }),
  );
  // Optionally, sort by date descending
  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
  return posts;
}

/**
 * Usage Example:
 *
 * const posts = await getAllBlogPosts();
 * // posts: Array<{ data, content, slug }>
 */
