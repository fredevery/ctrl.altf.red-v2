# Tech Stack

## Core Framework & Runtime
- **Framework:** Next.js 15.3+ (React 19.1+)
- **Runtime:** Node.js 22.17+ (LTS) (for development)
- **Package Manager:** npm or pnpm
- **TypeScript:** 5.0+ for type safety

## Styling & UI
- **CSS Framework:** Tailwind CSS 5.8+
- **CSS Architecture:** CSS Modules as fallback
- **Icons:** Lucide React or Heroicons
- **Fonts:** Next.js font optimization with Google Fonts

## Content Management
- **Markdown Processing:** 
  - `gray-matter` for frontmatter parsing
  - `remark` + `remark-html` for markdown to HTML
  - Alternative: MDX for interactive components
- **Content Validation:** Zod for frontmatter schema validation
- **Image Processing:** Next.js Image component with automatic optimization

## SEO & Feeds
- **RSS Feed:** Custom Next.js API route with `rss` library
- **Sitemap:** Next.js automatic sitemap generation
- **Meta Tags:** Next.js metadata API
- **Structured Data:** JSON-LD for rich snippets

## Development Tools
- **Build Tool:** Next.js built-in webpack + Turbopack (Next.js 13+)
- **Linting:** ESLint with Next.js config + Prettier
- **Git Hooks:** Husky + lint-staged for pre-commit checks
- **Package Bundler:** Bundled for Cloudflare Workers via `@cloudflare/next-on-pages`

## Quality Assurance
- **Accessibility:** 
  - `eslint-plugin-jsx-a11y` for static analysis
  - `@axe-core/react` for runtime testing
- **Forms:** React Hook Form with Zod validation
- **Testing:** Vitest + React Testing Library + Cypress

## Deployment & Hosting
- **Platform:** Cloudflare Pages (with Workers runtime)
- **Deployment:** Wrangler CLI or GitHub Actions
- **Edge Functions:** Cloudflare Workers for dynamic features
- **CDN:** Cloudflare global network

## Monitoring & Analytics
- **Analytics:** Plausible Analytics (privacy-focused) or Vercel Analytics
- **Performance:** Lighthouse CI in development pipeline
- **Error Tracking:** Optional Sentry integration
- **Uptime:** Cloudflare built-in monitoring

## Environment & Configuration
- **Environment Variables:** Next.js env support with `.env.local`
- **Configuration:** TypeScript config optimized for Next.js + Cloudflare
- **Database:** File-based (markdown) with optional future database migration path

## Rendering Strategy
- **Primary:** Static Site Generation (SSG) for all pages
- **Blog Posts:** Static generation at build time
- **Dynamic Routes:** Static paths with fallback for new content
- **Client Hydration:** Minimal JavaScript for interactivity

## Browser Support
- **Target:** Modern browsers (ES2022+)
- **Fallbacks:** Progressive enhancement for older browsers
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **Desktop:** Chrome 90+, Firefox 88+, Safari 14+
