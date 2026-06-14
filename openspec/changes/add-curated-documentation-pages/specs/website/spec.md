## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Footer displays glossary link

The system SHALL include a link to `/glossary` in the Footer navigation.

#### Scenario: Footer renders glossary link
- **WHEN** the `Footer` is rendered
- **THEN** it SHALL display a link to Glossary (`/glossary`)
