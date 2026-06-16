# Website — Delta Specification

## MODIFIED Requirements

### Requirement: Footer displays links and description

**MODIFIED**: The footer SHALL now also display a link to `/skills`.

The system SHALL provide a `Footer` component that displays a short Laraskills description and links to Docs, Skills, Glossary, GitHub, MCP, and Research.

#### Scenario: Footer renders with links
- **WHEN** the `Footer` is rendered
- **THEN** it SHALL display links to Docs (`/docs`), Skills (`/skills`), Glossary (`/glossary`), GitHub (external), MCP (`/mcp`), and Research (`/research`)

### Requirement: Website has per-page metadata

**MODIFIED**: The `/skills` and `/mcp` pages SHALL also have unique per-page metadata.

#### Scenario: Metadata is unique per route
- **WHEN** a user navigates between any public routes including `/skills` and `/mcp`
- **THEN** each page SHALL have a different `<title>` and `<meta name="description">`

## ADDED Requirements

### Requirement: Sitemap includes /skills and /mcp

The generated sitemap SHALL include entries for the `/skills` and `/mcp` routes.

#### Scenario: Sitemap contains skills and mcp entries
- **WHEN** `/sitemap.xml` is fetched
- **THEN** it SHALL contain `<url>` entries for `/skills` and `/mcp`

#### Scenario: Sitemap entries have appropriate priority
- **WHEN** the sitemap is inspected
- **THEN** `/skills` SHALL have priority 0.8 and `/mcp` SHALL have priority 0.8

### Requirement: llms.txt references new pages

The `public/llms.txt` SHALL include entries for Skills and MCP public landing pages.

#### Scenario: llms.txt has skills reference
- **WHEN** `llms.txt` is read
- **THEN** it SHALL include a reference to the Skills page at `/skills`

#### Scenario: llms.txt has mcp reference
- **WHEN** `llms.txt` is read
- **THEN** it SHALL include a reference to the MCP page at `/mcp`
