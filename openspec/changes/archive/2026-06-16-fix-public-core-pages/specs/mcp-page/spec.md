# MCP Page — Capability Specification

## Purpose

Provide a public landing page at `/mcp` that explains Laraskills MCP support, the read-only retrieval principle, local deterministic retrieval, and the 5 MCP tools.

## Requirements

### Requirement: /mcp page is a public landing page

The system SHALL provide a public landing page at `/mcp` that explains Laraskills MCP capabilities and links to `/docs/mcp` for detailed reference.

#### Scenario: /mcp page exists at top-level route
- **WHEN** a user visits `/mcp`
- **THEN** an MCP landing page SHALL be displayed with the same dark premium design as the rest of the site

#### Scenario: /mcp page links to docs
- **WHEN** a user views the MCP page
- **THEN** there SHALL be a link to `/docs/mcp` for detailed documentation

### Requirement: MCP page explains what MCP does in Laraskills

The MCP page SHALL explain that Laraskills implements a read-only MCP server for local deterministic knowledge retrieval.

#### Scenario: MCP explanation is present
- **WHEN** a user views the MCP page
- **THEN** they SHALL see an explanation of what MCP does in the context of Laraskills

### Requirement: MCP page explains the read-only retrieval principle

The MCP page SHALL explain that all MCP tools are read-only — they retrieve knowledge but never modify any data.

#### Scenario: Read-only principle is explained
- **WHEN** a user views the MCP page
- **THEN** they SHALL see a clear explanation that all MCP tools are read-only

### Requirement: MCP page explains local deterministic retrieval

The MCP page SHALL explain that retrieval runs entirely locally with no external API calls, and that results are deterministic.

#### Scenario: Deterministic local retrieval is explained
- **WHEN** a user views the MCP page
- **THEN** they SHALL see an explanation of local deterministic retrieval

### Requirement: MCP page lists the 5 MCP tools

The MCP page SHALL list and describe the 5 MCP tools: `retrieve_context_bundle`, `search_ecc`, `get_knowledge_unit`, `get_graph_context`, and `validate_ecc`.

#### Scenario: Five MCP tools are displayed
- **WHEN** a user views the MCP page
- **THEN** they SHALL see all 5 MCP tools listed with their names and short descriptions, using the real tool identifiers (e.g., `search_ecc`, `validate_ecc`)

#### Scenario: Tool cards reuse McpToolCard component
- **WHEN** MCP tools are displayed
- **THEN** each tool SHALL be rendered using the existing `McpToolCard` component for consistent styling with the docs MCP page

### Requirement: MCP page has per-page metadata

The MCP page SHALL export metadata for SEO including a unique title and description.

#### Scenario: Metadata is set
- **WHEN** a search engine or social platform fetches `/mcp`
- **THEN** the page SHALL have a unique `<title>` and `<meta name="description">`
