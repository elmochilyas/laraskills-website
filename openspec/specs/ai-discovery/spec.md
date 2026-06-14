# AI Discovery — Capability Specification

## Purpose

This capability provides machine-readable discovery files (sitemap, robots.txt, llms.txt, humans.txt) for search engines, AI crawlers, and human visitors.

## Requirements

### Requirement: Sitemap is generated automatically
The system SHALL provide a `sitemap.xml` at the root URL that lists all public page routes for search engine crawlers.

#### Scenario: Sitemap lists all public routes
- **WHEN** a search engine fetches `/sitemap.xml`
- **THEN** it SHALL contain `<url>` entries for `/`, `/docs`, `/docs/getting-started`, `/docs/installation`, `/docs/cli`, `/docs/mcp`, `/docs/opencode-setup`, `/docs/integrations`, `/docs/skills`, `/glossary`, and `/research`

#### Scenario: Sitemap uses current date for lastmod
- **WHEN** a search engine fetches `/sitemap.xml`
- **THEN** each `<url>` entry SHALL include a `<lastmod>` tag with the current date

#### Scenario: Sitemap sets appropriate change frequency
- **WHEN** a search engine fetches `/sitemap.xml`
- **THEN** each `<url>` entry SHALL include a `<changefreq>` tag appropriate for the page type

### Requirement: Robots.txt allows crawling
The system SHALL provide a `robots.txt` file that allows all well-behaved crawlers while disallowing non-existent or admin-like paths.

#### Scenario: Robots.txt allows all crawlers on public paths
- **WHEN** a crawler fetches `/robots.txt`
- **THEN** it SHALL see `Allow: /` for `User-agent: *`

#### Scenario: Robots.txt points to sitemap
- **WHEN** a crawler fetches `/robots.txt`
- **THEN** it SHALL see a `Sitemap:` directive pointing to `/sitemap.xml`

### Requirement: llms.txt provides AI-oriented summary
The system SHALL provide an `llms.txt` file at the site root following the llstx standard, giving AI crawlers a concise summary of the site content and key URLs.

#### Scenario: llms.txt exists at public/llms.txt
- **WHEN** an AI crawler fetches `/llms.txt`
- **THEN** it SHALL find a plain-text file with a brief site summary and list of key page URLs

#### Scenario: llms.txt uses honest descriptions
- **WHEN** an AI crawler reads `/llms.txt`
- **THEN** the descriptions SHALL accurately reflect page content without fake claims or metrics

#### Scenario: llms.txt does not reference legacy branding
- **WHEN** an AI crawler reads `/llms.txt`
- **THEN** the public-facing copy SHALL use "Laraskills" not "laravel-ecc" or old ECC branding

### Requirement: humans.txt credits the project
The system SHALL provide a `humans.txt` file at the site root with basic project attribution.

#### Scenario: humans.txt exists at public/humans.txt
- **WHEN** a user fetches `/humans.txt`
- **THEN** it SHALL contain project title, description, and optional team/attribution

#### Scenario: humans.txt content is honest
- **WHEN** a user reads `/humans.txt`
- **THEN** the content SHALL be factual and not include fake team names or roles
