# Content Structure

## Blog Posts

- Location: `/content/blog/*.mdx` (or `.md`)
- Each post should include frontmatter:
  - `title`: string
  - `date`: YYYY-MM-DD
  - `tags`: array of strings
  - `excerpt`: string (short summary)
  - `coverImage`: string (optional, path to image)
  - `draft`: boolean (optional)

## Projects

- Location: `/content/projects/*.mdx` (or `.md`)
- Frontmatter fields:
  - `title`: string
  - `date`: YYYY-MM-DD
  - `description`: string
  - `tech`: array of strings
  - `link`: string (URL to project/demo)
  - `repo`: string (optional, URL to source code)
  - `coverImage`: string (optional)

## Images

- Location: `/public/images/`
- Used for blog covers, project screenshots, and profile photos.

## Example Blog Post Frontmatter

```yaml
---
title: "My First Blog Post"
date: "2025-06-28"
tags: ["nextjs", "cloudflare", "portfolio"]
excerpt: "A quick introduction to my new portfolio site."
coverImage: "/images/blog/first-post.png"
draft: false
---
```
