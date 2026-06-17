# MCP Section — Capability Specification

## Purpose

The homepage MCP section communicates the core value of Laraskills MCP to visitors in a compact, visual format — no full tool cards with I/O schemas. It helps visitors understand the MCP layer's purpose in 5 seconds and directs them to the public `/mcp` page for details.

## Requirements

### Requirement: Homepage MCP section displays simplified value proposition

The system SHALL display an MCP section on the homepage that communicates the core value of Laraskills MCP in a compact, visual format — no full tool cards with I/O schemas.

#### Scenario: Section displays eyebrow and heading
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL display an eyebrow label "MCP LAYER" and a heading "Local Laravel context for AI coding agents"

#### Scenario: Section displays short paragraph
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL display a paragraph of no more than 2 lines explaining that Laraskills gives AI coding agents a local MCP layer for retrieving Laravel-specific context

#### Scenario: Section displays 3 value cards
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL display exactly 3 compact value cards labeled "Read-only", "Local retrieval", and "Deterministic context", each with a brief one-line explanation

#### Scenario: Section displays 4-step flow diagram
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL display a flow diagram with 4 connected steps: Agent request → Laraskills MCP → Knowledge graph → Context bundle

#### Scenario: Section displays CTA to /mcp
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL include a call-to-action button labeled "Explore MCP docs" linking to `/mcp`

#### Scenario: Section follows existing layout patterns
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL use `Section` and `PageContainer` components for consistent layout

#### Scenario: Section does not display tool I/O schemas
- **WHEN** the MCP section is rendered on the homepage
- **THEN** it SHALL NOT display input/output signatures, terminal panels, or full tool card grids

#### Scenario: Section is responsive
- **WHEN** the MCP section is rendered on a viewport at least 768px wide
- **THEN** the 3 value cards SHALL display in a horizontal row and the flow diagram SHALL display horizontally
- **WHEN** the viewport is narrower than 768px
- **THEN** value cards and flow diagram SHALL stack vertically

### Requirement: Section appears between existing sections

The MCP section SHALL replace the old McpProtocolSection at the same position in the homepage section ordering.

#### Scenario: Section appears after CLI showcase
- **WHEN** the homepage is rendered
- **THEN** the MCP section SHALL appear after the CLI showcase section
