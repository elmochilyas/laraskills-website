## Why

The Laraskills website currently has only a minimal placeholder homepage. Before building the full landing page, we need a reusable website foundation — layout, typography, colors, and core components — so all subsequent pages share a consistent, maintainable design system.

## What Changes

- Add global layout refinements (full-height html/body, dark background, subtle grid background pattern)
- Create a responsive page container component
- Define design tokens (colors, spacing, fonts) via Tailwind CSS v4 CSS-based configuration
- Build reusable Button component with variants (primary, secondary, ghost, sizes)
- Build reusable Section component for landing page sections
- Build reusable Card component
- Build Header component with navigation links (Home, Docs, Skills, MCP, Research, GitHub)
- Build Footer component with links and description
- Update homepage to use the new foundation components
- Add default metadata (title, description, open graph) in the root layout
- Remove the existing placeholder HTML from the homepage

## Capabilities

### New Capabilities
- `website-foundation`: Reusable layout, design tokens, Button, Section, Card, Header, Footer components, and metadata defaults
- `homepage`: Basic homepage built on the website foundation

### Modified Capabilities
*(none — no existing capabilities to modify)*

## Impact

- `app/globals.css`: Design tokens and base styles via Tailwind v4 CSS config
- `app/layout.tsx`: Metadata defaults, Header/Footer integration, full-height layout
- `app/page.tsx`: Replace placeholder with foundation-based homepage
- New files under `components/`: Button, Section, Card, Header, Footer, PageContainer
