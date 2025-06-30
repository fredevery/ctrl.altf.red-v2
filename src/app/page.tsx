import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { getAllBlogPosts } from '@/content/getAllBlogPosts';
import { getAllProjects } from '@/content/getAllProjects';

export default async function Home() {
  // Get recent blog posts and featured projects
  const blogPosts = await getAllBlogPosts();
  const projects = await getAllProjects();

  // Get the 3 most recent blog posts
  const recentPosts = blogPosts.slice(0, 3);

  // Get the 3 featured projects (assuming featured projects are marked in frontmatter or just taking first 3)
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
        <Container maxWidth="4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Typography
                  variant="h1"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  Senior Full Stack
                  <span className="text-blue-600 dark:text-blue-400">
                    {' '}
                    Engineer
                  </span>
                </Typography>
                <Typography
                  variant="p"
                  className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  I build scalable, accessible web applications with modern
                  technologies. Passionate about clean code, user experience,
                  and performance optimization.
                </Typography>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                <Image
                  src="/images/profile.jpg"
                  alt="Professional headshot of [Your Name], Senior Full Stack Engineer"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction/Bio Section */}
      <section className="py-20">
        <Container maxWidth="4xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Typography variant="h2" className="text-center">
              About Me
            </Typography>
            <Typography
              variant="p"
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              With over [X] years of experience in full-stack development, I
              specialize in building high-performance web applications using
              React, Node.js, TypeScript, and cloud technologies. I&apos;m
              passionate about creating accessible, scalable solutions that
              deliver exceptional user experiences.
            </Typography>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                >
                  [X]+
                </Typography>
                <Typography
                  variant="p"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Years Experience
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                >
                  [X]+
                </Typography>
                <Typography
                  variant="p"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Projects Completed
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                >
                  [X]+
                </Typography>
                <Typography
                  variant="p"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Technologies
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h3"
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                >
                  [X]+
                </Typography>
                <Typography
                  variant="p"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Happy Clients
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container maxWidth="6xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="h2">Featured Projects</Typography>
              <Typography
                variant="p"
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                Here are some of my recent projects that showcase my skills in
                full-stack development, UI/UX design, and modern web
                technologies.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card
                  key={project.slug}
                  className="group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={
                        project.data.image ||
                        '/images/projects/default-project.jpg'
                      }
                      alt={`Screenshot of ${project.data.title} project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <Typography variant="h3" className="text-xl">
                      {project.data.title}
                    </Typography>
                    <Typography
                      variant="p"
                      className="text-gray-600 dark:text-gray-300 line-clamp-3"
                    >
                      {project.data.description}
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {project.data.tags?.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2">
                      {project.data.demo && (
                        <Button variant="primary" size="sm" asChild>
                          <a
                            href={project.data.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.data.title}`}
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.data.repo && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.data.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.data.title}`}
                          >
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20">
        <Container maxWidth="6xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Typography variant="h2">Latest Blog Posts</Typography>
              <Typography
                variant="p"
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                I write about web development, best practices, and the latest
                technologies. Here are my most recent articles.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Typography
                        variant="p"
                        className="text-sm text-gray-500 dark:text-gray-400"
                      >
                        {new Date(post.data.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>
                      <Typography
                        variant="h3"
                        className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      >
                        {post.data.title}
                      </Typography>
                    </div>
                    <Typography
                      variant="p"
                      className="text-gray-600 dark:text-gray-300 line-clamp-3"
                    >
                      {post.data.summary}
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {post.data.tags?.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="p-0 h-auto font-medium"
                    >
                      <Link href={`/blog/${post.slug}`}>Read More →</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <Container maxWidth="4xl">
          <div className="text-center space-y-8 text-white">
            <Typography variant="h2" className="text-white">
              Let&apos;s Work Together
            </Typography>
            <Typography
              variant="p"
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you&apos;re looking for a full-stack developer
              or want to discuss a potential collaboration, I&apos;d love to
              hear from you.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <a href="/resume.pdf" download aria-label="Download resume PDF">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
