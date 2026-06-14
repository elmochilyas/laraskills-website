## Context

The homepage currently renders a simple centered placeholder inside a Section/PageContainer: a brand name, a tagline, and two buttons. It does not communicate Laraskills' value proposition, leaving visitors without a clear reason to engage. A polished hero section is the next logical step after the website foundation was established in the previous change.

Constraints:
- Must reuse existing foundation components (Button, Card, Section, PageContainer)
- Must not add external UI libraries
- Must work within the existing dark theme and design tokens
- Must not change Header, Footer, or layout structure

## Goals / Non-Goals

**Goals:**
- Replace the placeholder homepage content with a two-column hero layout
- Left column: product eyebrow, headline, description, two CTAs, trust line
- Right column: terminal command card with a copyable install command
- Premium dark developer-tool aesthetic consistent with existing branding
- Fully responsive: two-column on desktop, stacked on mobile
- All content renders without JavaScript (static HTML)

**Non-Goals:**
- Full landing page (features, metrics, testimonials) — deferred
- Documentation pages — deferred
- Animations or interactive effects beyond basic hover states — deferred
- Any external UI libraries
- SEO/GEO metadata beyond existing defaults — deferred

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Hero component structure | Inline layout in `app/page.tsx` (no separate Hero component) | The hero is currently the only section on the homepage. A separate component adds complexity before there are multiple sections. Extract later if needed. |
| Two-column layout | Tailwind Grid (`grid-cols-1 lg:grid-cols-2`) | Native to Tailwind v4; no extra dependencies. Matches existing code patterns. |
| Terminal card | Existing `Card` component with styled `<pre>`/`<code>` block | Reuses existing component; no need for a new component. |
| Copy-to-clipboard | Simple `navigator.clipboard.writeText()` with a "Copied" feedback state | Lightweight, no library needed. Falls back gracefully if unavailable. |
| Background glow | CSS `radial-gradient` overlay on the Section background | Pure CSS, no images, consistent with the existing grid pattern approach. |
| Trust line | Small `<p>` with `text-sm text-text-muted` below CTAs | Minimal visual weight, answers "who is this for?" without a separate section. |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| `npx laraskills@beta install` may change before production | Inline TODO comment in page.tsx to verify before launch |
| Copy-to-clipboard may fail in some browsers | Feature detection (`navigator.clipboard`) — no-op if unavailable; button remains useful as a visual hint |
| Two-column layout may feel sparse on very wide screens | `max-w-[1200px]` on PageContainer constrains the content; the terminal card provides visual balance |
