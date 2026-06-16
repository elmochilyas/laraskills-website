# Glossary Page — Delta Specification

## MODIFIED Requirements

### Requirement: /glossary page defines key terms

**MODIFIED**: The glossary page SHALL now include a page hero section, category grouping of terms, and a search/filter input.

The system SHALL provide a glossary page at `/glossary` that defines key Laraskills terminology with a hero, search/filter, category grouping, and term cards.

#### Scenario: /glossary page exists at top-level route
- **WHEN** a user visits `/glossary`
- **THEN** a glossary page SHALL be displayed with the same dark premium design as the rest of the site

#### Scenario: Glossary page has a hero section
- **WHEN** a user visits `/glossary`
- **THEN** the page SHALL display a hero at the top with title, description, and visual prominence matching other public pages

#### Scenario: Glossary has search/filter input
- **WHEN** a user visits `/glossary`
- **THEN** they SHALL see a search input that filters terms by name or definition as they type

### Requirement: Glossary terms are displayed consistently

**MODIFIED**: Terms SHALL now be grouped by category and displayed as term cards with term name, short definition, why-it-matters explanation, and related links.

The glossary SHALL display all terms grouped by category using term cards, each containing term name, definition, why-it-matters context, and optional related links.

#### Scenario: Terms are grouped by category
- **WHEN** a user views the glossary
- **THEN** terms SHALL be organized under category headings (Architecture, Retrieval, Agent Workflow, Validation)

#### Scenario: Term cards show structured content
- **WHEN** a user views a term
- **THEN** each term SHALL display the term name, a short definition, and a "why it matters" section explaining its significance

#### Scenario: Term cards may include related links
- **WHEN** a term has related documentation or pages
- **THEN** a related link SHALL be displayed below the definition

## ADDED Requirements

### Requirement: Glossary data is extracted to a data module

The glossary SHALL source its terms from a dedicated data module (`data/glossary.ts`) that exports typed term entries including category, definition, whyItMatters, and optional relatedLinks.

#### Scenario: Glossary data module is importable
- **WHEN** the glossary page component imports the data module
- **THEN** it SHALL receive typed term entries with fields: term name, definition, whyItMatters, category, and optional relatedLinks

### Requirement: Glossary search is client-side

The glossary SHALL provide a client-side search filter that matches terms by name or definition without server requests.

#### Scenario: Search filters terms by name
- **WHEN** a user types a term name into the search input
- **THEN** only terms matching the search text SHALL be displayed

#### Scenario: Search filters terms by definition
- **WHEN** a user types text that appears in a term definition
- **THEN** matching terms SHALL be displayed

#### Scenario: Empty search shows all terms
- **WHEN** the search input is empty
- **THEN** all terms SHALL be displayed
