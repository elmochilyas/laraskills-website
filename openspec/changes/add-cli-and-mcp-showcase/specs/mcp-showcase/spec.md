# MCP Showcase — Capability Specification

## Purpose

The MCP tools showcase demonstrates that Laraskills exposes read-only, deterministic, local-retrieval MCP tools compatible with AI coding agents (OpenCode, Claude Code, Cursor, etc.). Developers see exactly which tools are available and what each one does, building confidence in agent integration.

## ADDED Requirements

### Requirement: MCP showcase section displays 5 MCP tools

The system SHALL display an MCP tools showcase section on the homepage showing 5 read-only MCP tools in description cards.

#### Scenario: Section renders with heading and subtitle
- **WHEN** the MCP showcase section is rendered
- **THEN** it SHALL display a section heading and a descriptive subtitle explaining that Laraskills exposes read-only MCP tools

#### Scenario: Section renders 5 tool cards
- **WHEN** the MCP showcase section is rendered
- **THEN** it SHALL display exactly 5 MCP tool cards

#### Scenario: Card displays retrieve_context_bundle tool
- **WHEN** an MCP tool card for `retrieve_context_bundle` is rendered
- **THEN** it SHALL display the tool name `retrieve_context_bundle` in monospace font

#### Scenario: Card displays search_ecc tool
- **WHEN** an MCP tool card for `search_ecc` is rendered
- **THEN** it SHALL display the tool name `search_ecc` in monospace font

#### Scenario: Card displays get_knowledge_unit tool
- **WHEN** an MCP tool card for `get_knowledge_unit` is rendered
- **THEN** it SHALL display the tool name `get_knowledge_unit` in monospace font

#### Scenario: Card displays get_graph_context tool
- **WHEN** an MCP tool card for `get_graph_context` is rendered
- **THEN** it SHALL display the tool name `get_graph_context` in monospace font

#### Scenario: Card displays validate_ecc tool
- **WHEN** an MCP tool card for `validate_ecc` is rendered
- **THEN** it SHALL display the tool name `validate_ecc` in monospace font

### Requirement: Section emphasizes read-only and safety

The MCP showcase section SHALL clearly communicate that all tools are read-only, deterministic, and perform local retrieval only.

#### Scenario: Section subtitle mentions read-only
- **WHEN** the MCP showcase section is rendered
- **THEN** the section subtitle or introductory text SHALL mention that tools are "read-only"

#### Scenario: Badge indicates read-only on cards
- **WHEN** an MCP tool card is rendered
- **THEN** it SHALL display a badge or chip indicating "read-only"

### Requirement: Each tool card has a description

Each MCP tool card SHALL include a brief description of what the tool does.

#### Scenario: retrieve_context_bundle card has description
- **WHEN** the `retrieve_context_bundle` card is rendered
- **THEN** it SHALL display a description explaining it returns a context bundle for a Laravel engineering task

#### Scenario: search_ecc card has description
- **WHEN** the `search_ecc` card is rendered
- **THEN** it SHALL display a description explaining it searches the knowledge unit catalog

#### Scenario: get_knowledge_unit card has description
- **WHEN** the `get_knowledge_unit` card is rendered
- **THEN** it SHALL display a description explaining it inspects a single knowledge unit by ID

#### Scenario: get_graph_context card has description
- **WHEN** the `get_graph_context` card is rendered
- **THEN** it SHALL display a description explaining it returns prerequisites and related topics for a knowledge unit

#### Scenario: validate_ecc card has description
- **WHEN** the `validate_ecc` card is rendered
- **THEN** it SHALL display a description explaining it validates the structural integrity of the knowledge system

### Requirement: Tool names use real function names

The MCP tool names SHALL use the real function names as exposed by the Laraskills MCP server, even if they use legacy `ecc` suffixes. The section branding SHALL remain "Laraskills".

#### Scenario: Tool names are not renamed
- **WHEN** the MCP showcase section is rendered
- **THEN** tool names SHALL match the real MCP tool names (e.g., `search_ecc`, `validate_ecc`, not `search`, `validate`)

#### Scenario: Section branding is Laraskills
- **WHEN** the MCP showcase section is rendered
- **THEN** the section SHALL be presented under the "Laraskills" brand, not under "Ecc" or any other legacy name

### Requirement: MCP tool cards use responsive grid layout

The MCP tool cards SHALL be arranged in a responsive grid.

#### Scenario: Desktop shows 3-column grid
- **WHEN** the MCP showcase section is rendered on a viewport at least 1024px wide
- **THEN** the cards SHALL display in a 3-column grid (first row: 3 cards, second row: 2 cards, centered)

#### Scenario: Tablet shows 2-column grid
- **WHEN** the MCP showcase section is rendered on a viewport between 640px and 1024px
- **THEN** the cards SHALL display in a 2-column grid

#### Scenario: Mobile shows single column
- **WHEN** the MCP showcase section is rendered on a viewport narrower than 640px
- **THEN** the cards SHALL display in a single column
