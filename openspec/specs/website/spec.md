# Website — Capability Specification

## Purpose

The Laraskills website is the public-facing showcase for the Laraskills product. It presents Laraskills as a serious open-source developer tool, explains what it does and who it helps, and makes installation and onboarding easy.

## Current State

The website uses a custom-built foundation on top of Next.js 16 with:
- App Router
- TypeScript
- Tailwind CSS v4 with CSS-based `@theme` design tokens
- ESLint
- Reusable components (Button, Section, Card, PageContainer, Header, Footer)
- Full-height dark layout with sticky footer
- A basic homepage hero section using foundation components
- Vercel-ready configuration

## Requirements

### Requirement: Design tokens are defined in globals.css
The system SHALL define all design tokens in `app/globals.css` using Tailwind CSS v4 `@theme` directive. Tokens SHALL include color palette, font stack, and spacing scale.

#### Scenario: Color tokens are defined
- **WHEN** the CSS is loaded
- **THEN** the following color tokens SHALL be available:
  - `--color-brand`: Laravel-inspired red accent (#ef4444 or similar)
  - `--color-surface`: Dark background (#0a0a0a or similar)
  - `--color-surface-alt`: Slightly lighter surface (#1a1a1a or similar)
  - `--color-border`: Subtle border (#2a2a2a or similar)
  - `--color-text`: Primary text (#e5e5e5 or similar)
  - `--color-text-muted`: Muted text (#a3a3a3 or similar)
  - `--color-text-inverse`: Text on brand background (#ffffff)

#### Scenario: Font stack is defined
- **WHEN** the CSS is loaded
- **THEN** the system SHALL use a system font stack as the default sans-serif font family

#### Scenario: Base styles are applied
- **WHEN** the CSS is loaded
- **THEN** `html` and `body` SHALL have full height (`min-height: 100dvh`), dark background (`--color-surface`), and light text color (`--color-text`)

### Requirement: PageContainer provides responsive layout wrapper
The system SHALL provide a `PageContainer` component that centers content horizontally with responsive max-width and consistent horizontal padding.

#### Scenario: PageContainer renders children centered
- **WHEN** `PageContainer` is rendered with children
- **THEN** the children SHALL be centered with `max-width: 1200px` and `margin: 0 auto`

#### Scenario: PageContainer has responsive padding
- **WHEN** `PageContainer` is rendered
- **THEN** it SHALL apply horizontal padding that scales with viewport (`px-4 sm:px-6 lg:px-8`)

### Requirement: Button component supports variants and sizes
The system SHALL provide a `Button` component that renders an accessible `<button>` or `<a>` element with support for `primary`, `secondary`, and `ghost` variants and `sm`, `md`, `lg` sizes.

#### Scenario: Primary button renders with brand styling
- **WHEN** a `Button` with `variant="primary"` is rendered
- **THEN** it SHALL have the brand accent background color and inverse text color

#### Scenario: Secondary button renders with outline styling
- **WHEN** a `Button` with `variant="secondary"` is rendered
- **THEN** it SHALL have a transparent background with a border

#### Scenario: Ghost button renders with minimal styling
- **WHEN** a `Button` with `variant="ghost"` is rendered
- **THEN** it SHALL have no background and no border until hover

#### Scenario: Button renders as a link when href is provided
- **WHEN** a `Button` is rendered with an `href` prop
- **THEN** it SHALL render as an `<a>` element instead of a `<button>`

#### Scenario: Button is keyboard accessible
- **WHEN** a `Button` is rendered
- **THEN** it SHALL be focusable and activatable via keyboard

### Requirement: Section component provides consistent page section layout
The system SHALL provide a `Section` component that wraps content with consistent vertical spacing, optional background color, and optional `id` for anchor navigation.

#### Scenario: Section renders with vertical padding
- **WHEN** a `Section` is rendered
- **THEN** it SHALL apply consistent vertical padding (`py-16 md:py-24` or similar)

#### Scenario: Section accepts an optional dark background
- **WHEN** a `Section` is rendered with `variant="dark"` or similar
- **THEN** it SHALL use the alternative surface background (`--color-surface-alt`)

### Requirement: Card component provides a content container
The system SHALL provide a `Card` component with a subtle border, rounded corners, and consistent padding for containing content.

#### Scenario: Card renders with default styling
- **WHEN** a `Card` is rendered
- **THEN** it SHALL have a border, rounded corners, and padding

### Requirement: Header displays navigation links
The system SHALL provide a `Header` component that displays the Laraskills brand name and navigation links: Home, Docs, Skills, MCP, Research, Glossary, GitHub.

#### Scenario: Header renders brand name
- **WHEN** the `Header` is rendered
- **THEN** it SHALL display "Laraskills" as the brand text, linked to `/`

#### Scenario: Header renders navigation links
- **WHEN** the `Header` is rendered
- **THEN** it SHALL display navigation links for Home (`/`), Docs (`/docs`), Skills (`/skills`), MCP (`/mcp`), Research (`/research`), Glossary (`/glossary`), and GitHub (external link)

#### Scenario: Header is sticky
- **WHEN** the `Header` is rendered
- **THEN** it SHALL be fixed or sticky at the top of the viewport

#### Scenario: Header active link highlights for nested docs routes
- **WHEN** a user visits `/docs/getting-started` or any other `/docs/*` route
- **THEN** the "Docs" navigation link SHALL be highlighted as active

### Requirement: Footer displays links and description
The system SHALL provide a `Footer` component that displays a short Laraskills description and links to Docs, Glossary, GitHub, MCP, and Research.

#### Scenario: Footer renders with description
- **WHEN** the `Footer` is rendered
- **THEN** it SHALL display a short description of Laraskills

#### Scenario: Footer renders with links
- **WHEN** the `Footer` is rendered
- **THEN** it SHALL display links to Docs (`/docs`), Glossary (`/glossary`), GitHub (external), MCP (`/mcp`), and Research (`/research`)

### Requirement: Layout includes Header and Footer
The system SHALL integrate the `Header` and `Footer` components into the root layout (`app/layout.tsx`) so they appear on every page.

#### Scenario: Root layout renders Header at top
- **WHEN** any page is rendered
- **THEN** the `Header` SHALL appear at the top of the page, above the page content

#### Scenario: Root layout renders Footer at bottom
- **WHEN** any page is rendered
- **THEN** the `Footer` SHALL appear at the bottom of the page, after the page content

#### Scenario: Page content fills remaining vertical space
- **WHEN** a page has less content than the viewport height
- **THEN** the Footer SHALL remain at the bottom of the viewport (sticky footer behavior)

### Requirement: Root layout has default metadata
The system SHALL define default metadata in the root layout including title, description, and open graph tags.

#### Scenario: Default title is set
- **WHEN** the root layout metadata is inspected
- **THEN** the default title SHALL be "Laraskills — Laravel AI Engineering Knowledge System" or similar

#### Scenario: Default description is set
- **WHEN** the root layout metadata is inspected
- **THEN** the default description SHALL describe Laraskills as a Laravel-focused AI coding-agent operating layer

#### Scenario: Open Graph metadata is set
- **WHEN** social media platforms fetch the page
- **THEN** Open Graph title, description, and site name SHALL be present

### Requirement: Website has per-page metadata
The system SHALL provide per-page `metadata` exports for each public route, extending the root layout defaults with page-specific title and description.

#### Scenario: Metadata is unique per route
- **WHEN** a user navigates between any two public routes
- **THEN** each page SHALL have a different `<title>` and `<meta name="description">`

#### Scenario: Metadata uses Next.js metadata API
- **WHEN** a `page.tsx` is rendered
- **THEN** the metadata SHALL be exported as a `metadata` object or `generateMetadata` function following Next.js App Router conventions
