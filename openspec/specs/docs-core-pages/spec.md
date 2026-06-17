# Docs Core Pages — Capability Specification

## Purpose

Provide concise, high-value documentation pages covering installation, CLI, MCP, OpenCode setup, integrations, and skills.

## Requirements

### Requirement: /docs page serves as documentation index

The system SHALL provide a documentation index page at `/docs` that explains what Laraskills is and links to all other documentation pages.

#### Scenario: /docs page has overview content
- **WHEN** a user visits `/docs`
- **THEN** they SHALL see a short explanation of Laraskills and links to Getting Started, Installation, CLI, MCP, OpenCode Setup, Integrations, and Skills

### Requirement: /docs/getting-started page exists

The system SHALL provide a getting-started page at `/docs/getting-started` that shows the fastest path to use Laraskills.

#### Scenario: /docs/getting-started has setup guidance
- **WHEN** a user visits `/docs/getting-started`
- **THEN** they SHALL see the install command, a short explanation, and recommended next steps

### Requirement: /docs/installation page exists

The system SHALL provide an installation page at `/docs/installation` with install commands.

#### Scenario: /docs/installation has npm install command
- **WHEN** a user visits `/docs/installation`
- **THEN** they SHALL see the `npm install` command for Laraskills

#### Scenario: /docs/installation has update and doctor commands
- **WHEN** a user visits `/docs/installation`
- **THEN** they SHALL see the update and doctor/check commands

### Requirement: /docs/cli page documents CLI commands

The system SHALL provide a CLI reference page at `/docs/cli` that documents available Laraskills commands.

#### Scenario: /docs/cli lists all commands
- **WHEN** a user visits `/docs/cli`
- **THEN** they SHALL see documentation for: `install`, `retrieve`, `search`, `get`, `validate`, and `doctor`

### Requirement: /docs/mcp page explains MCP support

The system SHALL provide an MCP page at `/docs/mcp` explaining Laraskills MCP support.

#### Scenario: /docs/mcp explains read-only deterministic retrieval
- **WHEN** a user visits `/docs/mcp`
- **THEN** they SHALL read that MCP support is read-only and uses deterministic local retrieval

#### Scenario: /docs/mcp lists MCP tools
- **WHEN** a user visits `/docs/mcp`
- **THEN** they SHALL see a list of MCP tools: `retrieve_context_bundle`, `search_ecc`, `get_knowledge_unit`, `get_graph_context`, `validate_ecc`

### Requirement: /docs/opencode-setup page explains OpenCode setup

The system SHALL provide an OpenCode setup page at `/docs/opencode-setup`.

#### Scenario: /docs/opencode-setup has conceptual explanation
- **WHEN** a user visits `/docs/opencode-setup`
- **THEN** they SHALL see a conceptual explanation of how to configure OpenCode with Laraskills

#### Scenario: /docs/opencode-setup has MCP config placeholder
- **WHEN** a user visits `/docs/opencode-setup`
- **THEN** they SHALL see a sample MCP configuration placeholder

### Requirement: /docs/integrations page exists

The system SHALL provide an integrations page at `/docs/integrations` explaining supported coding agents and editors.

#### Scenario: /docs/integrations lists supported tools
- **WHEN** a user visits `/docs/integrations`
- **THEN** they SHALL see information about supported coding agents and editors

#### Scenario: /docs/integrations links to homepage if relevant
- **WHEN** a user visits `/docs/integrations`
- **THEN** the page SHALL link back to the homepage integrations section if applicable

### Requirement: /docs/skills page explains Laraskills skills

The system SHALL provide a skills overview page at `/docs/skills`.

#### Scenario: /docs/skills has skills overview
- **WHEN** a user visits `/docs/skills`
- **THEN** they SHALL see a high-level overview of Laraskills skills and categories

### Requirement: /docs/mcp shows input/output signatures for each tool

The system SHALL display input/output signatures for each MCP tool on the `/docs/mcp` page.

#### Scenario: retrieve_context_bundle shows I/O
- **WHEN** the `/docs/mcp` page is rendered
- **THEN** the `retrieve_context_bundle` tool card SHALL display its input parameters (`task: string`, `scope?: compact | standard | deep`) and output (`context_bundle: object`)

#### Scenario: search_ecc shows I/O
- **WHEN** the `/docs/mcp` page is rendered
- **THEN** the `search_ecc` tool card SHALL display its inputs (`query: string`, `limit?: number`) and output (`ranked_units: array`)

#### Scenario: get_knowledge_unit shows I/O
- **WHEN** the `/docs/mcp` page is rendered
- **THEN** the `get_knowledge_unit` tool card SHALL display its inputs (`unit_id: string`) and output (`knowledge_unit: object`)

#### Scenario: get_graph_context shows I/O
- **WHEN** the `/docs/mcp` page is rendered
- **THEN** the `get_graph_context` tool card SHALL display its inputs (`unit_id: string`, `depth?: number`) and output (`graph_context: object`)

#### Scenario: validate_ecc shows I/O
- **WHEN** the `/docs/mcp` page is rendered
- **THEN** the `validate_ecc` tool card SHALL display its input (`none`) and output (`validation_report: object`)

### Requirement: /docs/mcp shows tool badges

The system SHALL display READ-ONLY, LOCAL, and DETERMINISTIC badges per tool on `/docs/mcp`.

#### Scenario: retrieve_context_bundle shows all 3 badges
- **WHEN** `/docs/mcp` is rendered
- **THEN** `retrieve_context_bundle` SHALL display badges READ-ONLY, LOCAL, DETERMINISTIC

#### Scenario: tools with subset of badges show correctly
- **WHEN** `/docs/mcp` is rendered
- **THEN** `get_knowledge_unit` and `get_graph_context` SHALL display badges READ-ONLY and LOCAL only (no DETERMINISTIC)

### Requirement: /docs/mcp includes connection and setup notes

The system SHALL include a section about MCP connection and setup on the `/docs/mcp` page.

#### Scenario: /docs/mcp has connection info section
- **WHEN** `/docs/mcp` is rendered
- **THEN** it SHALL display a section explaining that the MCP server connects to the local knowledge base, operates in read-only mode, uses local transport, and exposes 5 tools

### Requirement: Command examples use CliCommandCard component

The system SHALL use the existing `CliCommandCard` component for displaying terminal commands on docs pages.

#### Scenario: Install command uses CliCommandCard
- **WHEN** a docs page displays a terminal command
- **THEN** it SHALL use the `CliCommandCard` component with copy-to-clipboard support

### Requirement: Code blocks are readable and copy-friendly

The system SHALL render code blocks with readable styling and copy-to-clipboard functionality where appropriate.

#### Scenario: Code blocks have readable dark styling
- **WHEN** a code block is displayed
- **THEN** it SHALL have sufficient contrast, monospace font, and a copy button if using `CliCommandCard`
