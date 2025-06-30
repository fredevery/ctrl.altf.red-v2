'use client';

import { useMemo, useState } from 'react';

import { ProjectCard } from './ProjectCard';

type Project = {
  slug: string;
  data: {
    title: string;
    description: string;
    tags?: string[];
    demo?: string;
    repo?: string;
    image?: string;
  };
};

type ProjectsListWithFilterProps = {
  projects: Project[];
  allTags: string[];
};

export function ProjectsListWithFilter({
  projects,
  allTags,
}: ProjectsListWithFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (selectedTag) {
      filtered = filtered.filter((p) => p.data.tags?.includes(selectedTag));
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.data.title.toLowerCase().includes(q) ||
          p.data.description.toLowerCase().includes(q) ||
          (p.data.tags &&
            p.data.tags.some((tag) => tag.toLowerCase().includes(q))),
      );
    }
    return filtered;
  }, [projects, selectedTag, search]);

  return (
    <>
      <nav
        className="mb-4 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by technology"
      >
        <button
          type="button"
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded transition-colors ${
            !selectedTag
              ? 'bg-primary text-white'
              : 'bg-muted text-foreground hover:bg-primary/20'
          }`}
          aria-pressed={!selectedTag}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded transition-colors ${
              selectedTag === tag
                ? 'bg-primary text-white'
                : 'bg-muted text-foreground hover:bg-primary/20'
            }`}
            aria-pressed={selectedTag === tag}
          >
            {tag}
          </button>
        ))}
      </nav>
      <div className="mb-8">
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects…"
          className="w-full max-w-md rounded border border-muted bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Search projects"
        />
      </div>
      <section
        aria-label="Project list"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.data.title}
            description={project.data.description}
            tags={project.data.tags}
            demo={project.data.demo}
            repo={project.data.repo}
            image={project.data.image}
          />
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground">
            No projects found.
          </div>
        )}
      </section>
    </>
  );
}
