// src/content/validateContent.ts

import { getAllBlogPosts } from './getAllBlogPosts';
import { getAllProjects } from './getAllProjects';
import { blogPostSchema, projectSchema } from './schemas';

async function validateContent() {
  let hasErrors = false;

  // Validate blog posts
  const blogPosts = await getAllBlogPosts();
  blogPosts.forEach((post, idx) => {
    const result = blogPostSchema.safeParse(post);
    if (!result.success) {
      hasErrors = true;
      console.error(`❌ Blog post #${idx + 1} failed validation:`);
      console.error(`  File: ${post.filePath || 'unknown'}`);
      console.error(result.error.format());
    }
  });

  // Validate projects
  const projects = await getAllProjects();
  projects.forEach((project, idx) => {
    const result = projectSchema.safeParse(project);
    if (!result.success) {
      hasErrors = true;
      console.error(`❌ Project #${idx + 1} failed validation:`);
      console.error(`  File: ${project.filePath || 'unknown'}`);
      console.error(result.error.format());
    }
  });

  if (hasErrors) {
    console.error('\nContent validation failed. Please fix the above errors.');
    process.exit(1);
  } else {
    console.log('✅ All content is valid!');
  }
}

validateContent();
