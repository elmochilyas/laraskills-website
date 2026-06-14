## Context

Four homepage sections need to be designed and built as the next feature after the hero section. The existing design system (dark theme, Tailwind v4 CSS, foundation components) and the premium developer-tool aesthetic must be preserved. All four sections should feel cohesive and follow the same visual language as the hero.

Constraints:
- Must reuse existing foundation components (Section, PageContainer, Card) where possible
- Must not add external UI libraries
- Must work within the existing dark theme and design tokens
- Must not change Header, Footer, layout, or existing components
- Metrics must be easy to replace later (no hard-coded numbers in components)
- No heavy animation; hover states only
- Mobile responsive

## Goals / Non-Goals

**Goals:**
- Metrics section: 7 metrics displayed in a responsive card grid (4 columns desktop, 2 tablet, 1 mobile)
- Comparison section: Side-by-side comparison cards on desktop, stacked on mobile
- Architecture section: Three-layer breakdown with clear visual hierarchy, cards for each layer
- Workflow section: Horizontal step flow on desktop with connecting arrows, vertical stacked on mobile
- All sections use Section + PageContainer wrappers consistent with hero
- Metrics loaded from `data/homepage-metrics.json` (easy to inject generated data later)
- Dark developer-tool aesthetic consistent with hero

**Non-Goals:**
- CLI/MCP showcase section — deferred
- Integrations/research section — deferred
- Any documentation pages
- SEO/GEO file additions
- Fake testimonials or social proof
- Animated counters or spinning numbers
- Automated stats sync script
- Heavy animation or parallax effects

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Metrics data source | Static JSON file (`data/homepage-metrics.json`) | Easy to replace with generated data later; keeps components clean |
| Metrics layout | Tailwind grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) | Responsive without extra code; matches existing patterns |
| Comparison layout | Two-column Card side-by-side on desktop, stacked on mobile | Clear visual contrast; reuses existing Card component |
| Comparison visual | Left column darker background, right column with brand accent border | Reinforces "before vs after" narrative |
| Architecture layout | Three-column grid on desktop, stacked on mobile | Equal visual weight for each layer |
| Architecture cards | Numbered badges, layer name, bullet list of contents | Scannable; clear hierarchy |
| Workflow visual | Horizontal flexbox row with arrow connectors on desktop, vertical on mobile | Clean, simple, no heavy animation |
| Workflow step styling | Compact Card with step number, label, and short description | Consistent with other sections; no need for animation |
| Component scope | Separate small components per section (MetricsCard, ComparisonTable, etc.) | Keeps `page.tsx` clean; easy to test and maintain |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| Metrics numbers will change over time | JSON data file means only the data file needs updating; component stays the same |
| 4 new sections make the homepage long | Each section is independently scrollable; users can scan. The hero remains the primary entry point. |
| Workflow arrows may be complex on responsive layouts | Use simple CSS-based connectors (borders/rotated elements) rather than SVG or canvas; stack vertically on mobile to avoid arrow complexity |
| "12 supported coding harnesses" may need explanation | Add a subtle footnote or tooltip mechanism if needed; keep the main metric label clean |
