---
applyTo: '**'
priority: 1
---

## Project-Specific Instructions for Portfolio Website

### Project Overview
- Personal portfolio website for senior full stack engineer
- Built with Next.js 15.3+ (React 19.1+), TypeScript 5.0+, Tailwind CSS 5.8+
- Deployed to Cloudflare Pages with Workers runtime
- Target: WCAG 2.1 AA compliance, Core Web Vitals < 2.5s LCP

### Tech Stack Standards
- Use Next.js Image component for all images with WebP/AVIF optimization
- Implement React Hook Form with Zod validation for forms
- Follow Conventional Commits specification: `type(scope): description`
- Use ESLint with jsx-a11y plugin, Prettier, and TypeScript strict mode
- Test with Vitest + React Testing Library + Cypress + axe-core

### Content Structure
- Blog posts: `/content/blog/*.mdx` with frontmatter (title, date, tags, excerpt)
- Projects: `/content/projects/*.mdx` with frontmatter (title, description, tech, link, repo)
- Images: `/public/images/` with descriptive alt text required
- Use semantic HTML (nav, main, aside, footer) and proper heading hierarchy

### Quality Requirements
- 80%+ test coverage for utilities and business logic
- Color contrast 4.5:1 minimum for normal text, 3:1 for large text
- Keyboard navigation for all interactive elements
- Bundle size: JS < 250KB, CSS < 50KB, images < 200KB for heroes
- Security headers: CSP, HSTS, X-Frame-Options, referrer policy

### Workflow Standards
- Branch naming: `feature/[number]-[description]`, `bugfix/*`, `hotfix/*`
- PR requirements: tests pass, accessibility checked, performance assessed
- Pre-commit hooks: ESLint fix, Prettier format, accessibility lint
- Deployment: Wrangler CLI to Cloudflare Pages, RSS feed generation

### Development Priorities
1. Accessibility first (WCAG 2.1 AA compliance)
2. Performance optimization (Core Web Vitals targets)
3. Security best practices (CSP, form validation, dependency audits)
4. SEO optimization (meta tags, structured data, sitemap)
5. Mobile-first responsive design

### Key Files & Directories
- Project docs: `.project/` (refer to 00_index.md for navigation)
- Wireframes: `.project/wireframes/` for all design elements
- Content: `/content/blog/` and `/content/projects/`
- Images: `/public/images/blog/` and `/public/images/projects/`