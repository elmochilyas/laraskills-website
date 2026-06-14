# Homepage — Capability Specification (Delta)

## Purpose

This delta spec documents additions and modifications to the homepage capability required by the CLI and MCP showcase sections. The existing homepage spec (`openspec/specs/homepage/spec.md`) remains the source of truth for unmodified requirements.

## ADDED Requirements

### Requirement: CLI showcase section displays Laraskills commands

The system SHALL display a CLI showcase section below the workflow section showing 6 practical `npx laraskills` commands in terminal-style cards.

#### Scenario: Section follows existing layout pattern
- **WHEN** the CLI showcase section is rendered
- **THEN** it SHALL use `Section` and `PageContainer` for consistent layout, with a heading and subtitle above a responsive grid

#### Scenario: Section appears after workflow
- **WHEN** the homepage is rendered
- **THEN** the CLI showcase section SHALL appear after the workflow section

### Requirement: MCP showcase section displays read-only MCP tools

The system SHALL display an MCP showcase section below the CLI showcase section showing 5 read-only MCP tools in description cards.

#### Scenario: Section follows existing layout pattern
- **WHEN** the MCP showcase section is rendered
- **THEN** it SHALL use `Section` and `PageContainer` for consistent layout, with a heading and subtitle above a responsive grid

#### Scenario: Section appears after CLI showcase
- **WHEN** the homepage is rendered
- **THEN** the MCP showcase section SHALL appear after the CLI showcase section

## MODIFIED Requirements

### Requirement: All sections reuse existing layout components

The system SHALL wrap all content sections in the existing `Section` and `PageContainer` components for consistent layout.

#### Scenario: Each content section uses Section as wrapper
- **WHEN** any content section on the homepage is rendered
- **THEN** it SHALL use the `Section` component as the outer wrapper with consistent vertical padding

#### Scenario: Each content section uses PageContainer for content width
- **WHEN** any content section on the homepage is rendered
- **THEN** its content SHALL be wrapped in `PageContainer` for consistent max-width and padding
