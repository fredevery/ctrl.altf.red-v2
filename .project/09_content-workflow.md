# Content Management Workflow

## Adding or Updating Blog Posts

- Write new blog posts as markdown or MDX files in `/content/blog/`.
- Include required frontmatter (see Content Structure document).
- Add images to `/public/images/blog/` as needed.
- Commit changes to a feature branch and open a pull request (PR) for review.
- Review and merge PR to main branch to publish.

## Adding or Updating Projects

- Add or update project markdown/MDX files in `/content/projects/`.
- Include required frontmatter.
- Add project images/screenshots to `/public/images/projects/`.
- Commit and PR as above.

## Review Process

- All content changes should be reviewed via PR before merging.
- Check for correct formatting, frontmatter, and image paths.
- Optionally, preview the site locally or in a staging environment before merging.

## Publishing

- Merging to the main branch triggers a new deployment.
- Blog posts and projects appear on the site after deployment.

## Optional Enhancements

- Use GitHub Actions or similar CI to run tests and previews on PRs.
- Schedule posts by setting a future date in frontmatter and filtering unpublished posts in the build process.
