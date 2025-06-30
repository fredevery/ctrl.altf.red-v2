import { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/ui/Container';
import { ExperienceTimeline } from '@/components/ui/ExperienceTimeline';
import { SkillsShowcase } from '@/components/ui/SkillsShowcase';
import { Typography } from '@/components/ui/Typography';

export const metadata: Metadata = {
  title: 'About | ctrl.altf.red',
  description:
    'About the engineer behind ctrl.altf.red – experience, skills, and contact information.',
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Container className="py-12 md:py-20">
        <Typography variant="h1" className="mb-6">
          About Me
        </Typography>
        {/* Professional Bio Section */}
        <section
          aria-labelledby="about-bio-heading"
          className="mb-12 flex flex-col md:flex-row items-start gap-8"
        >
          {/* Optional: Add a professional photo */}
          <div className="flex-shrink-0">
            {/* Use Next.js Image for optimization if available, otherwise use <img> */}
            {/* Replace src and alt with your actual image and description */}
            <Image
              src="/images/profile.jpg"
              alt="Portrait of [Your Name], Senior Full Stack Engineer"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
              width={128}
              height={128}
              priority={false}
            />
          </div>
          <div>
            <Typography variant="h2" id="about-bio-heading" className="mb-4">
              Professional Bio
            </Typography>
            <Typography as="p" className="mb-4">
              I’m a senior full stack engineer with 12+ years of experience
              building accessible, performant, and secure web applications. My
              expertise spans React, Next.js, TypeScript, and cloud-native
              architectures. I’m passionate about accessibility, performance,
              and developer experience, and I thrive on solving complex problems
              with elegant solutions.
            </Typography>
            <Typography as="p" className="mb-4">
              I’ve led teams at startups and enterprises, architected scalable
              systems, and contributed to open source. My mission is to create
              digital experiences that are fast, inclusive, and delightful for
              everyone.
            </Typography>
            <ul className="list-disc pl-5 text-base text-muted-foreground">
              <li>
                12+ years in web development, product, and leadership roles
              </li>
              <li>
                Core focus: accessibility (WCAG 2.1 AA), performance, and
                security
              </li>
              <li>Open source contributor and tech community mentor</li>
            </ul>
          </div>
        </section>
        {/* Skills Showcase */}
        <section aria-labelledby="skills-heading" className="mb-12">
          <Typography variant="h2" id="skills-heading" className="mb-4">
            Skills & Technologies
          </Typography>
          <SkillsShowcase />
        </section>
        {/* Experience / Timeline */}
        <section aria-labelledby="experience-heading" className="mb-12">
          <Typography variant="h2" id="experience-heading" className="mb-4">
            Experience
          </Typography>
          <ExperienceTimeline />
        </section>
        {/* Resume Download */}
        <section aria-labelledby="resume-heading" className="mb-12">
          <Typography variant="h2" id="resume-heading" className="mb-4">
            Resume
          </Typography>
          <a
            href="/public/resume-placeholder.txt"
            download
            className="inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Download Resume
          </a>
        </section>
        {/* Contact Information */}
        <section aria-labelledby="contact-heading" className="mb-12">
          <Typography variant="h2" id="contact-heading" className="mb-4">
            Contact
          </Typography>
          <ul className="space-y-2 text-base">
            <li>
              <span className="sr-only">Email:</span>
              <a
                href="mailto:you@example.com"
                className="flex items-center gap-2 underline hover:text-primary"
                aria-label="Email"
              >
                you@example.com
              </a>
            </li>
            <li>
              <span className="sr-only">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline hover:text-primary"
                aria-label="LinkedIn"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
            <li>
              <span className="sr-only">GitHub:</span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline hover:text-primary"
                aria-label="GitHub"
              >
                github.com/yourusername
              </a>
            </li>
          </ul>
          <Typography as="p" className="mt-4 text-muted-foreground">
            Based in [Your City, Country] &mdash; open to remote and on-site
            opportunities.
          </Typography>
        </section>
      </Container>
    </main>
  );
}
