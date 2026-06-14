## Context

The Laraskills website is currently a bare Next.js scaffold with a single placeholder homepage. Before building the full landing page, we need a shared foundation so that all future pages share consistent layout, styling, and reusable components. The design direction calls for a premium developer-tool aesthetic with a dark interface, Laravel-inspired red accent, and clean typography.

## Goals / Non-Goals

**Goals:**
- Establish design tokens (colors, typography, spacing) via Tailwind CSS v4 CSS-based configuration
- Build reusable layout primitives (PageContainer, full-height html/body, dark background)
- Build reusable UI components (Button, Section, Card)
- Build structural components (Header with nav, Footer with links)
- Update the root layout with metadata defaults and Header/Footer integration
- Replace the placeholder homepage with a basic layout that uses the new foundation

**Non-Goals:**
- Full landing page design (hero, features, etc.) — deferred to a future change
- Documentation pages — deferred
- SEO/GEO metadata beyond defaults — deferred
- Animations or interactive effects — deferred
- Any external UI libraries — the foundation is built from scratch

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Design token mechanism | Tailwind CSS v4 CSS `@theme` directive | Tailwind v4 supports CSS-based token configuration natively; no custom plugin or JS config needed. Tokens live in `globals.css`. |
| Component directory | `components/` at project root | Standard Next.js convention; matches existing `@/*` alias. |
| Component naming | PascalCase, `.tsx` extension | Matches standard React conventions already established in the project. |
| Button variants | CSS classes via Tailwind utility approach | Avoids a complex variant API; each variant is a preset className composition. |
| Navigation data | Static array in Header component | Simple enough that external data or CMS is not justified yet. |
| Footer content | Static, defined inline in Footer component | No need for data fetching; content is minimal and branding-only. |
| Fonts | System font stack from Tailwind (no custom fonts yet) | Avoids external font loading until the design is finalized. Geist fonts were removed in the initial scaffold cleanup. |
| Grid background | Pure CSS using `background-image` with radial gradients | No images needed; lightweight, no dependencies, matches the developer-tool aesthetic. |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| Over-engineering the component API (too many props before usage) | Keep components minimal; add props only when a concrete use case requires them. |
| Tailwind v4 `@theme` may not support all token types needed | Tailwind v4 CSS-based configuration supports arbitrary custom properties; fallback to inline `var()` if needed. |
| Components may need refactoring when the full landing page is built | Expected and acceptable — the foundation is meant to evolve. Start with what we know today. |
