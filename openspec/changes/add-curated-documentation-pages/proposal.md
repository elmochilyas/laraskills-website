## Why

The Laraskills website currently has only a homepage and a research placeholder. The header and footer already link to `/docs`, `/skills`, and `/mcp` routes that return 404s. Adding concise, high-value documentation pages will let visitors understand how to install, use, and connect Laraskills without duplicating the full knowledge base or turning the site into a documentation mirror.

## What Changes

- Create a reusable **docs layout** with sidebar navigation for all `/docs/*` pages
- Create **8 documentation pages** covering installation, CLI, MCP, OpenCode setup, integrations, and skills
- Create a **glossary page** at `/glossary` defining key Laraskills terms
- Add `/glossary` link to the site header navigation
- Update header active-link logic to handle nested `/docs/*` routes
- No SEO/GEO files, no Markdown mirrors, no stats sync, no research page rebuild

## Capabilities

### New Capabilities

- `docs-layout`: Reusable layout wrapper for `/docs/*` pages with sidebar navigation, responsive design, and dark premium styling consistent with the existing site
- `docs-core-pages`: Eight content pages under `/docs/` (index, getting-started, installation, cli, mcp, opencode-setup, integrations, skills) using the docs layout
- `glossary-page`: Standalone glossary page at `/glossary` defining operating layer, intelligence layer, retrieval layer, MCP, knowledge unit, routing map, skill workflow, required-context mode, and deterministic retrieval

### Modified Capabilities

- `website`: Header navigation requires a `/glossary` link and updated active-link highlighting for nested `/docs/*` routes; Footer may require a `/glossary` link if appropriate

## Impact

- `app/layout.tsx`: No changes needed (header/footer are already there)
- `app/page.tsx`: No changes to homepage content
- `app/docs/`: New route group with layout and pages
- `app/glossary/`: New route page
- `components/`: New `DocsLayout` component; minor updates to `Header` for active-link logic
- `data/`: No new data files required (content will be inline in page components)
- No new dependencies, no external UI libraries
