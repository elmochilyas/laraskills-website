## Why

The footer is the last element visitors see, and currently it looks disconnected from the premium dark developer-tool aesthetic of the rest of the Laraskills homepage. Spacing feels loose, the brand block lacks polish, link columns are basic, and the GitHub action is too small. A polished footer is a trust signal for an open-source developer tool.

## What Changes

- Refine footer spacing, padding, and overall layout for a compact premium feel
- Replace the harsh top border with a subtle glow/gradient divider
- Improve brand block: logo sizing, description placement, GitHub icon as a proper callout
- Upgrade link column headings with accent styling and refined hover states
- Polish the GitHub/Connect action as a more visible external link
- Refine the bottom row: copyright left, back-to-top right on desktop; clean stack on mobile
- Ensure the footer background transitions smoothly from the final CTA section

No content changes — all existing links and copy are preserved.

## Capabilities

### New Capabilities

- `footer-polish`: Visual redesign of the existing Footer component — spacing, typography, borders, hover states, and responsive layout refinements. UI-only; no behavior changes.

### Modified Capabilities

<!-- No spec-level behavior changes — this is a pure visual/UI redesign of the existing Footer component. All links, content, and functionality remain identical. -->

## Impact

- `components/Footer.tsx` — full visual redesign (no structural/behavior changes)
- No changes to: homepage sections, final CTA, docs, MCP, SEO, routing, metadata, deployment, analytics
- No dependency changes
- No new components required
