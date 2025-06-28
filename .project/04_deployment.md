# Deployment

## Steps
1. Build the Next.js app for Cloudflare Workers using next-on-pages.
2. Deploy using Wrangler CLI.
3. Configure environment variables in Cloudflare dashboard if needed.
4. To update blog content, add or edit markdown files in the content/blog directory and push to the repository.
5. Generate or update RSS feed during build process.
6. Run accessibility and SEO checks before deployment.

## References
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [axe-core accessibility testing](https://www.deque.com/axe/)
