import fs from 'fs/promises';
import path from 'path';
import { parseMarkdownFile } from './parseMarkdown';
import { projectSchema } from './schemas';

/**
 * Loads and validates all projects from the content/projects directory.
 * Returns an array of { data, content, slug } objects.
 */
export async function getAllProjects() {
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  const files = await fs.readdir(projectsDir);
  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(projectsDir, file);
        const { data, content } = await parseMarkdownFile(
          filePath,
          projectSchema,
        );
        const slug = file.replace(/\.(md|mdx)$/, '');
        return { data, content, slug, filePath };
      }),
  );
  // Optionally, sort by date descending
  projects.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
  return projects;
}

/**
 * Usage Example:
 *
 * const projects = await getAllProjects();
 * // projects: Array<{ data, content, slug }>
 */
