## Why

The Laraskills website has minimal SEO and no AI-discovery files. Public search engines and AI crawlers cannot effectively index or understand the site, limiting organic discovery. Adding structured metadata, sitemaps, and AI-oriented files will make the site findable without requiring a marketing push or content creation.

## What Changes

- Per-page metadata (title, description, Open Graph, Twitter Cards) for all 10 routes
- `sitemap.xml` generated via Next.js built-in sitemap route
- `robots.txt` to allow crawling while blocking admin-like paths
- `llms.txt` for AI crawler consumption (per the llstx standard)
- `humans.txt` with project credits
- Simple JSON-LD `WebSite` and `WebPage` structured data on key pages
- No fake metrics, testimonials, partnership claims, or analytics

## Capabilities

### New Capabilities
- `seo-metadata`: Per-page SEO metadata, Open Graph / Twitter cards, and JSON-LD structured data for all public routes
- `ai-discovery`: Machine-readable discovery files (llms.txt, sitemap.xml, robots.txt, humans.txt)

### Modified Capabilities
- `website`: Updated requirements to include metadata generation and AI-discovery files as part of the site infrastructure

## Impact

- `app/layout.tsx` — root metadata update
- `app/*/page.tsx` — per-page metadata exports for all 10 routes
- New files: `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, `public/humans.txt`
- `app/research/page.tsx` and `app/glossary/page.tsx` — add JSON-LD structured data
- No new npm dependencies required (Next.js built-in metadata API)
- No changes to visual design, content copy, or layout structure
