# Skills Page — Capability Specification

## Purpose

Provide a public landing page at `/skills` that explains what Laraskills skills are, shows high-level skill categories, and describes how skills help AI coding agents follow Laravel workflows.

## Requirements

### Requirement: /skills page is a public landing page

The system SHALL provide a public landing page at `/skills` that explains Laraskills skills to visitors and links to `/docs/skills` for detailed reference.

#### Scenario: /skills page exists at top-level route
- **WHEN** a user visits `/skills`
- **THEN** a skills landing page SHALL be displayed with the same dark premium design as the rest of the site

#### Scenario: /skills page links to docs
- **WHEN** a user views the skills page
- **THEN** there SHALL be a link to `/docs/skills` for detailed documentation

### Requirement: Skills page explains what skills are

The skills page SHALL explain what skills are in the context of Laraskills — structured, repeatable capabilities that bundle knowledge, rules, and retrieval workflows.

#### Scenario: Skills explanation is present
- **WHEN** a user views the skills page
- **THEN** they SHALL see an explanation of what skills are and how they work

### Requirement: Skills page shows high-level categories

The skills page SHALL display high-level skill categories that correspond to real Laraskills skill workflows.

#### Scenario: Skill categories are displayed
- **WHEN** a user views the skills page
- **THEN** they SHALL see a set of skill category cards with names and descriptions, matching the categories defined in the docs skills page

#### Scenario: Category cards use Card component
- **WHEN** skill categories are displayed
- **THEN** each category SHALL be rendered in a `Card` component with consistent styling

### Requirement: Skills page explains value for AI agents

The skills page SHALL explain how skills help AI coding agents follow Laravel development workflows more effectively.

#### Scenario: Value proposition is present
- **WHEN** a user views the skills page
- **THEN** they SHALL see a section explaining how skills benefit AI coding agents

### Requirement: Skills page has per-page metadata

The skills page SHALL export metadata for SEO including a unique title and description.

#### Scenario: Metadata is set
- **WHEN** a search engine or social platform fetches `/skills`
- **THEN** the page SHALL have a unique `<title>` and `<meta name="description">`
