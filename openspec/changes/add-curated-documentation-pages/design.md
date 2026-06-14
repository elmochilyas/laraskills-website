## Context

The Laraskills website (Next.js 16 App Router, TypeScript, Tailwind CSS v4) currently has two pages: a full homepage and a minimal research placeholder. The header and footer already link to `/docs`, `/skills`, and `/mcp` routes that return 404s. All UI components are hand-built — no external libraries. Design tokens are defined in `app/globals.css` via Tailwind `@theme`.

## Goals / Non-Goals

**Goals:**
- Create a reusable docs layout with sidebar navigation for all `/docs/*` pages
- Build 8 documentation content pages and 1 glossary page
- Add `/glossary` to site navigation
- Maintain existing dark premium design system and responsive behavior
- Keep all content inline in page components (no CMS, no markdown files)

**Non-Goals:**
- No SEO/GEO implementation or metadata optimization beyond basic page titles
- No Markdown `.md` mirror files or content pipeline
- No full knowledge base import or generation
- No stats sync, no research page rebuild beyond a potential link update
- No new external dependencies or UI libraries
- No changes to homepage content

## Decisions

### 1. Docs layout as a Next.js route group layout

Create `app/docs/layout.tsx` that adds a sidebar alongside children within the existing root layout (which already provides Header and Footer). The docs layout wraps only the content area, not the entire page.

**Why:** Next.js nested layouts compose naturally — root layout renders Header + Footer, docs layout adds sidebar + page content. This avoids duplicating Header/Footer in docs pages and keeps the sidebar scoped to `/docs/*` routes.

**Alternative considered:** A shared `DocsLayout` component imported into each page. Rejected because a route-group layout is more idiomatic for App Router and requires zero boilerplate per page.

### 2. Sidebar as a client component (`DocsSidebar`)

Build a `components/DocsSidebar.tsx` client component with navigation links for all docs pages. Responsive behavior: visible sidebar on desktop (`lg:` breakpoint), collapsible hamburger menu on mobile. Use `usePathname()` for active-link highlighting.

**Why:** Client-side route detection is needed for active link styles. A collapsible mobile menu prevents sidebar from taking too much space on small screens.

**Alternative considered:** Server component with static links and no active state. Rejected because active link highlighting improves navigation UX.

### 3. Inline content in page components

Each docs page will be a `page.tsx` file with content written directly as JSX/TSX, using existing components (`Section`, `PageContainer`, `Card`, `Button`, `CliCommandCard`, `McpToolCard`).

**Why:** This is the simplest approach — zero build pipeline, zero data fetching, zero external content dependencies. Pages are immediately editable and type-safe.

**Alternative considered:** MDX or markdown files parsed at build time. Rejected because it adds complexity and the content volume is small enough to manage inline.

### 4. Glossary page as a standalone route (not under /docs/)

Create `app/glossary/page.tsx` as a standalone page with the same visual style but independent of the docs sidebar.

**Why:** The glossary is a reference page, not documentation. Keeping it separate avoids forcing users through the docs sidebar and matches the user's requirement of `/glossary` being a top-level route.

**Alternative considered:** Placing glossary under `/docs/glossary`. Rejected because the user explicitly specified `/glossary` as a top-level route.

### 5. Header navigation update

Add `/glossary` to the Header nav links array. Update the active-link logic from strict equality (`pathname === href`) to prefix matching for `/docs` so nested `/docs/*` pages also highlight the Docs link.

**Why:** Currently the Header highlights links using `pathname === link.href`. Visiting `/docs/getting-started` would not highlight `/docs` without this change. Adding `/glossary` makes it discoverable.

## Risks / Trade-offs

- **[Risk] Sidebar nav becomes outdated as docs grow** → Mitigation: The sidebar links are defined in a single data array; adding/removing pages requires updating one file.
- **[Risk] Inline content makes editing harder for non-developers** → Mitigation: The user explicitly wants inline content. If content grows significantly, migrating to a content layer can be done later without breaking URLs.
- **[Risk] Mobile sidebar hamburger may conflict with header nav** → Mitigation: The sidebar toggle will be positioned below the header with sufficient z-index stacking.
- **[Trade-off] No search functionality** → Not in scope for this change; can be added later without restructuring pages.
