## Why

The homepage currently shows a simple foundation placeholder with a brand name, tagline, and two buttons. It does not explain what Laraskills is, who it is for, or why a Laravel developer should care. Visitors have no clear reason to stay or act. A polished hero section is needed to communicate the product's value proposition immediately and drive the primary conversion action.

## What Changes

- Replace the simple centered placeholder in `app/page.tsx` with a polished two-column hero layout
- Add a copyable terminal command card (`npx laraskills@beta install`) in the right column
- Add product eyebrow ("Laraskills"), main headline, and short description explaining the product
- Add primary CTA ("Install Laraskills") and secondary CTA ("View GitHub")
- Add a small trust line: "Built for Laravel developers using AI coding agents"
- Reuse existing foundation components: Button, Card, Section, PageContainer
- Add subtle background glow/grid effects within the existing dark theme
- Keep existing Header, Footer, and layout unchanged

## Capabilities

### New Capabilities
- `homepage-hero`: Polished two-column hero section for the Laraskills homepage with headline, description, CTAs, terminal command card, and trust line

### Modified Capabilities
- `homepage`: The existing homepage spec will be updated to replace the basic placeholder requirements with hero-specific requirements (headline, CTAs, terminal card, trust line, two-column layout)

## Impact

- `app/page.tsx`: Replace the simple centered placeholder with the full hero layout
- `components/` (potentially a new hero component or inline in page.tsx)
- No new pages, routes, or external UI libraries
- No changes to Header, Footer, layout, or globals.css
