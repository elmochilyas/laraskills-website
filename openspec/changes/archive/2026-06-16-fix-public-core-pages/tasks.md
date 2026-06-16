## 1. Glossary Data Extraction

- [x] 1.1 Create `data/glossary.ts` with typed term entries (term, definition, whyItMatters, category, relatedLinks)
- [x] 1.2 Transfer existing 9 terms into the new data module with categories and why-it-matters content
- [x] 1.3 Add related links for applicable terms

## 2. Glossary Page Redesign

- [x] 2.1 Rewrite `app/glossary/page.tsx` as a client component with search state
- [x] 2.2 Add page hero section with title, description, and visual styling
- [x] 2.3 Add search/filter input that filters terms by name or definition
- [x] 2.4 Group terms by category under category section headings
- [x] 2.5 Render each term as a structured term card (name, definition, why-it-matters, related links)
- [x] 2.6 Add empty-state handling for search with no matches
- [x] 2.7 Update Glossary JSON-LD structured data to reflect new design

## 3. Skills Page

- [x] 3.1 Create `app/skills/page.tsx` as a server component
- [x] 3.2 Add page hero explaining what skills are in Laraskills
- [x] 3.3 Add skill categories section with cards (reuse category data from docs skills page)
- [x] 3.4 Add value proposition section explaining how skills help AI coding agents
- [x] 3.5 Add CTA linking to `/docs/skills`
- [x] 3.6 Export metadata for SEO (title, description, Open Graph)

## 4. MCP Page

- [x] 4.1 Create `app/mcp/page.tsx` as a server component
- [x] 4.2 Add page hero explaining MCP in Laraskills
- [x] 4.3 Add read-only retrieval principle explanation card
- [x] 4.4 Add local deterministic retrieval explanation card
- [x] 4.5 List 5 MCP tools using `McpToolCard` component (retrieve_context_bundle, search_ecc, get_knowledge_unit, get_graph_context, validate_ecc)
- [x] 4.6 Add CTA linking to `/docs/mcp`
- [x] 4.7 Export metadata for SEO (title, description, Open Graph)

## 5. Navigation & Footer Updates

- [x] 5.1 Add `/skills` link to footer links array in `components/Footer.tsx`

## 6. SEO & Discovery

- [x] 6.1 Add `/skills` and `/mcp` routes to `app/sitemap.ts` with priority 0.8
- [x] 6.2 Add Skills and MCP references to `public/llms.txt`
