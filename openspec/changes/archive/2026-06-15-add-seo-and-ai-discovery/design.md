## Context

The Laraskills website is a Next.js App Router project with 10 public routes. Currently only the root layout has basic Open Graph metadata; most pages have no unique titles or descriptions. There are no sitemap, robots.txt, or AI-oriented discovery files. Next.js provides built-in APIs for all of these, so no new dependencies or external services are needed.

## Goals / Non-Goals

**Goals:**
- Every public route has a unique, descriptive `<title>` and `<meta name="description">`
- Open Graph and Twitter Card metadata for social sharing on all pages
- `sitemap.xml` generated automatically from the route tree
- `robots.txt` allowing crawling by default
- `llms.txt` for AI crawlers per the llstx standard
- `humans.txt` with brief project/team attribution
- Simple JSON-LD `WebSite` + `WebPage` structured data on key pages

**Non-Goals:**
- No analytics, tracking, or cookie banners
- No blog or content marketing
- No fake testimonials, metrics, or partnership claims
- No visual design changes or layout refactoring
- No integration-page visual polish (separate change)
- No redesign of the homepage hero or layout

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Metadata source | Static `metadata` exports in each `page.tsx` | Next.js App Router convention; no runtime cost; each page owns its metadata |
| Sitemap | `app/sitemap.ts` exporting `generateSitemaps` | Next.js built-in; zero dependencies; auto-discovers routes |
| Robots | `app/robots.ts` | Next.js built-in; simple rules without middleware overhead |
| llms.txt | Static file in `public/` | No framework needed; follows the llstx standard convention |
| humans.txt | Static file in `public/` | Standard convention; purely informational |
| JSON-LD | `<script>` tags via `dangerouslySetInnerHTML` in page components | No JSON-LD library needed; small payload; Next.js hydrates safely |
| Branding | All public copy uses "Laraskills" | Per project branding rules; avoid legacy "laravel-ecc" in user-facing text |
| Page description content | Sourced from existing page content and project context | No new copywriting required; honest descriptions of existing pages |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| Stale sitemap if new routes are added but sitemap.ts not updated | Use dynamic route generation from filesystem or manual list with a comment reminder |
| Duplicate or conflicting metadata | Use a shared helper or pattern so all pages follow the same `Metadata` shape |
| JSON-LD bloat on research/glossary pages | Keep it minimal — just `WebSite` + `WebPage` types; no article/blog types |
| llms.txt becoming outdated | List only stable top-level pages; update as part of content changes |
