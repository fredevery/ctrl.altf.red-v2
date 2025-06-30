// src/app/projects/page.tsx
import { Container } from '@/components/ui/Container';
import { ProjectsListWithFilter } from '@/components/ui/ProjectsListWithFilter';
import { Typography } from '@/components/ui/Typography';
import { getAllProjects } from '@/content/getAllProjects';

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  // Collect all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.data.tags || [])),
  ).sort();

  return (
    <Container className="py-12">
      <Typography variant="h1" className="mb-8">
        Projects
      </Typography>
      <ProjectsListWithFilter projects={projects} allTags={allTags} />
    </Container>
  );
}
