# Docs Layout — Capability Specification

## Purpose

Provide a reusable documentation layout with sidebar navigation for all `/docs/*` pages, consistent with the site's dark premium design system.

## Requirements

### Requirement: Docs layout provides sidebar navigation for /docs/* routes

The system SHALL provide a route-group layout at `app/docs/layout.tsx` that renders a sidebar navigation alongside page content for all routes under `/docs/`.

#### Scenario: Docs layout renders sidebar and content
- **WHEN** a user navigates to any `/docs/*` page
- **THEN** the sidebar SHALL be visible alongside the page content

#### Scenario: Docs layout preserves root Header and Footer
- **WHEN** a user visits any `/docs/*` page
- **THEN** the site Header and Footer (from root layout) SHALL still be rendered

### Requirement: Sidebar displays links to all docs pages

The system SHALL provide a `DocsSidebar` component that displays navigation links to all documentation pages.

#### Scenario: Sidebar renders all doc links
- **WHEN** the sidebar is rendered
- **THEN** it SHALL display links to: Getting Started, Installation, CLI, MCP, OpenCode Setup, Integrations, and Skills

#### Scenario: Sidebar highlights active page
- **WHEN** a user is on a docs page
- **THEN** the corresponding sidebar link SHALL be visually highlighted as active

### Requirement: Sidebar is responsive

The system SHALL render the sidebar as a visible left-hand column on desktop screens and as a collapsible hamburger menu on mobile screens.

#### Scenario: Sidebar visible on desktop
- **WHEN** the viewport is `lg` (1024px) or wider
- **THEN** the sidebar SHALL be visible as a fixed or static left-hand column

#### Scenario: Sidebar collapses on mobile
- **WHEN** the viewport is smaller than `lg` (1024px)
- **THEN** the sidebar SHALL be hidden by default, with a toggle button to show/hide it

### Requirement: Sidebar uses existing design system

The sidebar SHALL use the same dark premium styling, color tokens, and typography as the rest of the site.

#### Scenario: Sidebar uses site color tokens
- **WHEN** the sidebar is rendered
- **THEN** it SHALL use `--color-surface`, `--color-surface-alt`, `--color-text`, `--color-text-muted`, and `--color-brand` tokens from the design system

### Requirement: Sidebar renders docs index link

The sidebar SHALL include a link to the main `/docs` page at the top of the navigation.

#### Scenario: Sidebar links to docs index
- **WHEN** the sidebar is rendered
- **THEN** the first link SHALL be "Overview" or "Documentation" pointing to `/docs`
