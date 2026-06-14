## ADDED Requirements

### Requirement: Website has per-page metadata
The system SHALL provide per-page `metadata` exports for each public route, extending the root layout defaults with page-specific title and description.

#### Scenario: Metadata is unique per route
- **WHEN** a user navigates between any two public routes
- **THEN** each page SHALL have a different `<title>` and `<meta name="description">`

#### Scenario: Metadata uses Next.js metadata API
- **WHEN** a `page.tsx` is rendered
- **THEN** the metadata SHALL be exported as a `metadata` object or `generateMetadata` function following Next.js App Router conventions
