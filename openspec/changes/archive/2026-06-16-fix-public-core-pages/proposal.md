## Why

The Laraskills website has three critical public routes — `/skills`, `/mcp`, and `/glossary` — that are either missing or not production-ready. `/skills` and `/mcp` 404. `/glossary` exists but is too thin to serve visitors. These are core pages that visitors and evaluators land on, and their current state undermines the project's credibility.

## What Changes

- Add a new `/skills` public landing page that explains skills, shows high-level categories, and links to `/docs/skills`
- Add a new `/mcp` public landing page that explains MCP support, lists the 5 MCP tools, and links to `/docs/mcp`
- Redesign `/glossary` with a proper hero, search/filter, category grouping, and term cards
- Update site navigation (header and footer) to expose `/skills`, `/mcp`, `/glossary`, `/docs`, `/research`
- Add SEO metadata for the two new pages
- Update sitemap to include `/skills` and `/mcp`
- Update `llms.txt` if appropriate

## Capabilities

### New Capabilities
- `skills-page`: Public landing page at `/skills` explaining skills in Laraskills, skill categories, and how they help AI coding agents
- `mcp-page`: Public landing page at `/mcp` explaining MCP support, the read-only retrieval principle, local deterministic retrieval, and the 5 MCP tools

### Modified Capabilities
- `glossary-page`: Upgrade from a thin list to a polished, searchable, categorized glossary with hero, term cards, and related links
- `website`: Update navigation components (header, footer) to expose new routes; update sitemap; add SEO metadata for `/skills` and `/mcp`; update `llms.txt`

## Impact

- New page components: `app/skills/page.tsx`, `app/mcp/page.tsx`
- Modified page component: `app/glossary/page.tsx`
- Updated layout or navigation components (header, footer)
- Updated `app/sitemap.ts` for new routes
- Updated `public/llms.txt` if applicable
- No changes to docs pages, homepage, integrations, or deployment config
- No new dependencies
