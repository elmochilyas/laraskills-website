## MODIFIED Requirements

### Requirement: /docs/mcp page explains MCP support

#### Scenario: /docs/mcp explains read-only deterministic retrieval

#### Scenario: /docs/mcp lists MCP tools

## ADDED Requirements

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
