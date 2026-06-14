# SEO Metadata — Capability Specification

## Purpose

This capability adds per-page SEO metadata, Open Graph tags, Twitter cards, and minimal JSON-LD structured data across all public routes.

## Requirements

### Requirement: Every public page has a unique title
The system SHALL provide a unique, descriptive `<title>` for each public page route via Next.js `metadata` export.

#### Scenario: Homepage has a descriptive title
- **WHEN** a user visits `/`
- **THEN** the `<title>` SHALL contain "Laraskills" as the primary brand name

#### Scenario: Docs subpages have route-specific titles
- **WHEN** a user visits `/docs/getting-started`
- **THEN** the `<title>` SHALL include the page topic (e.g., "Getting Started") and "Laraskills" as suffix

#### Scenario: Glossary page has a distinct title
- **WHEN** a user visits `/glossary`
- **THEN** the `<title>` SHALL describe the page as a glossary of Laravel AI engineering terms

#### Scenario: Research page has a distinct title
- **WHEN** a user visits `/research`
- **THEN** the `<title>` SHALL describe the page as research and related work

### Requirement: Every public page has a unique meta description
The system SHALL provide a unique, honest `<meta name="description">` for each public page route reflecting the actual page content.

#### Scenario: Homepage description states product purpose
- **WHEN** a user views the homepage source
- **THEN** the meta description SHALL describe Laraskills as a Laravel AI coding-agent operating layer

#### Scenario: Docs subpages have content-aligned descriptions
- **WHEN** a user views a docs subpage source
- **THEN** the meta description SHALL reflect the specific topic of that docs page (e.g., installation, CLI, MCP)

#### Scenario: Glossary description states it is a terminology reference
- **WHEN** a user views the glossary page source
- **THEN** the meta description SHALL indicate it is a glossary/reference of Laravel AI engineering terms

#### Scenario: Research description states it covers related work
- **WHEN** a user views the research page source
- **THEN** the meta description SHALL indicate it covers related projects and research

### Requirement: Open Graph metadata exists on every page
The system SHALL provide Open Graph `og:title`, `og:description`, `og:type`, and `og:site_name` metadata for each public page route.

#### Scenario: Open Graph title matches page title
- **WHEN** a social media platform fetches a page
- **THEN** `og:title` SHALL match the page's `<title>`

#### Scenario: Open Graph description matches meta description
- **WHEN** a social media platform fetches a page
- **THEN** `og:description` SHALL match the page's `<meta name="description">`

#### Scenario: Open Graph site name is Laraskills
- **WHEN** a social media platform fetches any page
- **THEN** `og:site_name` SHALL be "Laraskills"

#### Scenario: Open Graph type is website
- **WHEN** a social media platform fetches any page
- **THEN** `og:type` SHALL be "website"

### Requirement: Twitter Card metadata exists on every page
The system SHALL provide Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`) metadata for each public page route.

#### Scenario: Twitter card type is summary_large_image
- **WHEN** Twitter fetches a page
- **THEN** `twitter:card` SHALL be "summary_large_image"

#### Scenario: Twitter title and description match Open Graph
- **WHEN** Twitter fetches a page
- **THEN** `twitter:title` and `twitter:description` SHALL match their Open Graph counterparts

### Requirement: JSON-LD structured data exists on key pages
The system SHALL provide JSON-LD structured data of type `WebSite` on the homepage and `WebPage` on research and glossary pages, using honest descriptions without fake metrics.

#### Scenario: Homepage has WebSite JSON-LD
- **WHEN** a search engine crawler reads the homepage
- **THEN** it SHALL find a `<script type="application/ld+json">` with `@type: "WebSite"` and `name: "Laraskills"`

#### Scenario: Research page has WebPage JSON-LD
- **WHEN** a search engine crawler reads the research page
- **THEN** it SHALL find a `<script type="application/ld+json">` with `@type: "WebPage"` and an honest description

#### Scenario: Glossary page has WebPage JSON-LD
- **WHEN** a search engine crawler reads the glossary page
- **THEN** it SHALL find a `<script type="application/ld+json">` with `@type: "WebPage"` and an honest description
