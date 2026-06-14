## Context

The Laraskills homepage currently has 7 sections ending with the MCP showcase. Visitors need to see wider tool support and research evidence before converting. The three new sections (supported tools grid, research/evidence summary, final CTA) must integrate seamlessly into the existing dark developer-tool aesthetic using the same foundation components.

## Goals / Non-Goals

**Goals:**
- Add 3 homepage sections after the MCP showcase: supported tools grid, research/evidence, final CTA
- Reuse existing Section, PageContainer, Card, Button components wherever possible
- Data-driven tools list (JSON file) to keep markup clean
- Honest research section with no inflated claims
- Mobile responsive throughout
- Wire up a `/research` placeholder route for the "Read the research" link

**Non-Goals:**
- No documentation pages (no `/docs` content yet)
- No SEO/GEO files
- No testimonials or fake GitHub stats
- No external UI libraries
- No new design system tokens beyond what already exists

## Decisions

1. **Component approach for the tools grid**
   - Create a new `SupportedToolCard` component (or use Card inline) — each tool gets a Card with name and optional icon slot
   - The grid layout: responsive columns (2 cols mobile, 3 cols tablet, 4 cols desktop) to avoid looking like fake partner logos
   - Tools list stored in `data/supported-tools.json` for easy editing
   - No tool icons/logos initially (keeps it clean and avoids trademark concerns)

2. **Research/evidence section**
   - Use a single Card or simple layout with a metrics-like presentation for the 4 research facts
   - Display facts as styled stat items: "9 isolated OpenCode runs", "3 Laravel scenarios", "100% test & Pint pass rate", "Required-context mode won 2 of 3"
   - Include text: "In the original ECC attribution study..." phrasing for transparency
   - Add a "Read the research →" link pointing to `/research` placeholder
   - Keep tone honest — state results plainly without claiming "always beats baseline"

3. **Final CTA section**
   - Centered layout with heading reinforcing the message
   - Terminal/Card showing `npx laraskills@beta install`
   - Primary button "Install Laraskills" linking to GitHub
   - Secondary button "View GitHub" (same as hero)
   - Tertiary "Read the docs" link — use a ghost-style link with placeholder `href="/docs"`
   - Reuse the copy-to-clipboard pattern from the hero section

4. **Route for /research**
   - Simple page route `app/research/page.tsx` with minimal placeholder content
   - Uses existing layout (Header + Footer)
   - Placeholder text: "Research — coming soon"

5. **Data architecture**
   - `data/supported-tools.json`: array of tool objects `{ name: string }`
   - No additional data files needed; research facts are small enough to inline

## Risks / Trade-offs

- **Tools grid without logos may feel sparse** → The grid layout and Card styling provides enough visual structure; logos can be added later
- **Research section stats may age** → Facts are from a specific study; the section wording should frame them as current results, not permanent guarantees
- **"Read the docs" links to non-existent `/docs`** → Clearly note it as a placeholder; the task can flag it for follow-up when docs exist
- **Final CTA repeats hero CTA** → Deliberate: the hero gets the first click, the final CTA gets the committed visitor after reading all evidence
