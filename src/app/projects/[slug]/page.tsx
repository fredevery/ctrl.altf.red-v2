import { notFound } from 'next/navigation';

import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectGallery } from '@/components/ui/ProjectGallery';
import { Typography } from '@/components/ui/Typography';
import { getAllProjects } from '@/content/getAllProjects';

// Example: import { MDXRemote } from 'next-mdx-remote/rsc';
// import { getMdxSource } from '@/lib/mdx';

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await getAllProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // If you have a utility to parse MDX, use it here:
  // const mdxSource = await getMdxSource(project.content);

  return (
    <Container className="py-12">
      <Typography variant="h1" className="mb-4">
        {project.data.title}
      </Typography>
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        {project.data.demo && (
          <a
            href={project.data.demo}
            className="inline-block rounded bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        {project.data.repo && (
          <a
            href={project.data.repo}
            className="inline-block rounded bg-muted px-4 py-2 text-foreground font-semibold shadow hover:bg-muted/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        )}
      </div>
      {project.data.images && project.data.images.length > 0 && (
        <ProjectGallery
          images={project.data.images}
          slug={project.slug}
          altBase={project.data.title}
        />
      )}
      <div className="mb-6">
        <ProjectCard
          slug={project.slug}
          title={project.data.title}
          description={project.data.description}
          tags={project.data.tags}
          demo={project.data.demo}
          repo={project.data.repo}
          image={project.data.image}
        />
      </div>
      <article className="prose dark:prose-invert max-w-none">
        {/* If using MDX: */}
        {/* <MDXRemote source={mdxSource} /> */}
        {/* If using Markdown: */}
        {/* <MarkdownRenderer content={project.content} /> */}
        <p>{project.content}</p>
      </article>
    </Container>
  );
}
