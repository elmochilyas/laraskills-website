## Context

The Laraskills website is a Next.js 16.2 App Router project with Tailwind CSS v4 (dark-only). The header already has links for `/skills`, `/mcp`, and `/glossary`, but only the glossary route exists — and its page is a thin list of 9 hardcoded terms. The `/skills` and `/mcp` routes are missing entirely. Footer links include `/mcp` and `/glossary` but not `/skills`.

The existing component library includes reusable building blocks: `PageContainer`, `Section`, `Card`, `Button`, `HeroSection`, `McpToolCard`, and `Card`. Glossary data is hardcoded inline in the page component. The sitemap is generated from a static route array.

## Goals / Non-Goals

**Goals:**
- Create `/skills` public landing page explaining skills, categories, and the value for AI coding agents
- Create `/mcp` public landing page explaining MCP support, read-only principle, deterministic retrieval, and 5 MCP tools
- Improve `/glossary` with a hero, search/filter, category grouping, and term cards
- Update footer to include `/skills`
- Add `/skills` and `/mcp` to sitemap and SEO metadata
- Update `llms.txt` to reference the new pages

**Non-Goals:**
- No changes to docs pages, homepage, integrations, or Vercel deployment
- No redesign of existing layouts or shared navigation
- No fake metrics, testimonials, or marketing claims
- No blog, analytics, or new dependencies
- No migration of glossary data to a database or MDX (stays inline)

## Decisions

### 1. Glossary data — keep inline, but restructure for categories
Current glossary data is hardcoded in `app/glossary/page.tsx`. Moving it to a separate `data/glossary.ts` file decouples data from presentation and supports adding category fields (`architecture`, `retrieval`, `agent-workflow`, `validation`) without introducing a database. The data module exports typed entries. The page imports and renders them.

**Alternatives considered:**
- JSON file: Simpler but loses TypeScript type safety for category groups.
- MDX: Over-engineered for 9 terms with no CMS requirement.
- Prisma/SQL: Unnecessary — no need for dynamic term management.

### 2. New pages — use existing server component pattern
Both `/skills` and `/mcp` will be server components with exported `metadata`, following the same pattern as existing docs pages. They reuse `PageContainer`, `Section`, `Card`, and `Button` from the component library.

### 3. Glossary search — client-side filter only
A lightweight search input at the top of the glossary that filters terms by name/definition. No debounced API calls, no server-side search. The page becomes a client component (`"use client"`) for the filter state.

**Alternatives considered:**
- Full-text search library (Fuse.js): Overkill for 9 terms.
- Server-side search: No benefit at this scale.

### 4. Category grouping — visual sections with anchors
Terms are grouped by category using visual section headings. Each category is a `<Section>` with a heading and a grid of term cards. Categories appear collapsed initially only if there are more than 15 terms (unlikely at current scale — just group visibly).

### 5. Sitemap — add routes to existing array
The existing `app/sitemap.ts` already has an array of route objects. Adding `/skills` and `/mcp` is a two-line change.

### 6. Footer — add `/skills` link
Footer already has a `footerLinks` array. Adding `{ label: "Skills", href: "/skills" }` is one line.

### 7. `llms.txt` — add entries for new pages
The existing `llms.txt` lists docs and reference sections. Add entries for the Skills overview and MCP overview under an appropriate heading.

## Risks / Trade-offs

- [Brand consistency] New pages must match the existing dark premium design language. Mitigation: Reuse existing components and CSS utilities; no new design tokens needed.
- [Glossary scope creep] Adding categories and search to glossary could expand into full CMS territory. Mitigation: Explicit non-goal — data stays inline, categories are static, search is a simple filter.
- [Header already has links] Header already includes `/skills` and `/mcp`, so they'll show 404 until pages exist. Mitigation: Create the pages in a single deploy; the links were added as forward-looking placeholders.
- [Stale glossary] Hardcoded terms mean updates require a code change. Mitigation: Acceptable for current scale; can extract to JSON later if terms grow beyond 20.
