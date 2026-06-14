# Homepage — Capability Specification (Delta: Value & Architecture Sections)

## Purpose

This delta extends the homepage spec (`openspec/specs/homepage/spec.md`) with four new sections below the hero: project metrics, generic agent vs Laraskills comparison, three-layer architecture, and agent workflow visual.

## Requirements

### Requirement: Metrics data is sourced from a data file
The system SHALL load project metrics from a static JSON data file at `data/homepage-metrics.json` rather than hard-coding numbers in components.

#### Scenario: Metrics file contains all 7 project facts
- **WHEN** `data/homepage-metrics.json` is read
- **THEN** it SHALL contain exactly these 7 entries with `label` and `value` fields:
  - 12 Laravel skills
  - 41 always-follow rules
  - 12 agent definitions
  - 21 engineering domains
  - 2,321 knowledge units
  - 5 read-only MCP tools
  - 12 supported coding harnesses

#### Scenario: Metrics data is replaceable
- **WHEN** the metrics data file is updated
- **THEN** the homepage SHALL render the new values without any component code changes

### Requirement: Metrics section displays project statistics
The system SHALL display a metrics section below the hero showing a responsive grid of metric cards.

#### Scenario: Metrics cards display value and label
- **WHEN** a MetricsCard is rendered
- **THEN** it SHALL display a prominent `value` and a muted `label` beneath it

#### Scenario: Metrics grid is responsive
- **WHEN** the metrics section is rendered on a desktop viewport (≥1024px)
- **THEN** metrics SHALL display in a 4-column grid
- **WHEN** the viewport is between 640px and 1024px
- **THEN** metrics SHALL display in a 2-column grid
- **WHEN** the viewport is narrower than 640px
- **THEN** metrics SHALL display in a 1-column grid

#### Scenario: Section has a heading
- **WHEN** the metrics section is rendered
- **THEN** it SHALL display a section heading above the grid

### Requirement: Comparison section contrasts generic agent vs Laraskills
The system SHALL display a comparison section with two columns contrasting a generic coding agent against an agent using Laraskills.

#### Scenario: Comparison shows two sides
- **WHEN** the comparison section is rendered
- **THEN** the left column SHALL show "Generic coding agent" with 4 items, and the right column SHALL show "Agent with Laraskills" with 4 items

#### Scenario: Generic agent items describe limitations
- **WHEN** the comparison section is rendered
- **THEN** the generic agent column SHALL list these items:
  1. Guesses Laravel conventions
  2. Relies on broad framework memory
  3. Misses architecture decisions
  4. Needs long manual prompts

#### Scenario: Laraskills items describe advantages
- **WHEN** the comparison section is rendered
- **THEN** the Laraskills column SHALL list these items:
  1. Loads Laravel-specific guidance
  2. Uses focused retrieval
  3. Follows skills, rules, and checklists
  4. Works with MCP-compatible tools

#### Scenario: Columns are visually distinct
- **WHEN** the comparison section is rendered
- **THEN** the generic agent column SHALL have a muted/dark background and the Laraskills column SHALL have a brand accent border

#### Scenario: Comparison is stacked on mobile
- **WHEN** the viewport is narrower than 768px
- **THEN** the two columns SHALL stack vertically, generic agent above Laraskills

### Requirement: Architecture section explains three layers
The system SHALL display a three-layer architecture section describing the Operating, Intelligence, and Retrieval layers.

#### Scenario: Three layers are rendered
- **WHEN** the architecture section is rendered
- **THEN** it SHALL display three cards labeled "Operating layer", "Intelligence layer", and "Retrieval layer"

#### Scenario: Operating layer lists its contents
- **WHEN** the Operating layer card is rendered
- **THEN** it SHALL list: Skills, rules, agents, command references, harness configs

#### Scenario: Intelligence layer lists its contents
- **WHEN** the Intelligence layer card is rendered
- **THEN** it SHALL list: Domains, knowledge units, indexes, routing maps, dependency graph

#### Scenario: Retrieval layer lists its contents
- **WHEN** the Retrieval layer card is rendered
- **THEN** it SHALL list: CLI retrieval, search, inspect, graph context, MCP tools

#### Scenario: Each card has a numbered badge
- **WHEN** an architecture card is rendered
- **THEN** it SHALL display its layer number (1, 2, or 3) as a prominent badge

#### Scenario: Architecture cards are responsive
- **WHEN** the viewport is at least 1024px wide
- **THEN** the three cards SHALL display in a 3-column grid
- **WHEN** the viewport is narrower than 1024px
- **THEN** the cards SHALL stack vertically

### Requirement: Workflow section visualizes agent task flow
The system SHALL display a step-by-step workflow visual showing how a developer task flows through Laraskills.

#### Scenario: Six workflow steps are rendered
- **WHEN** the workflow section is rendered
- **THEN** it SHALL display these 6 steps in order:
  1. Developer task
  2. Domain routing
  3. Knowledge retrieval
  4. Skill workflow
  5. Agent implementation
  6. Validation checklist

#### Scenario: Steps are connected visually
- **WHEN** the workflow section is rendered on a desktop viewport (≥768px)
- **THEN** steps SHALL be arranged horizontally with visual connectors (arrows/lines) between them
- **WHEN** the viewport is narrower than 768px
- **THEN** steps SHALL be stacked vertically with downward connectors

#### Scenario: Each step has a label and short description
- **WHEN** a WorkflowStep is rendered
- **THEN** it SHALL display a step number, a label, and a brief description of that stage

### Requirement: All sections reuse existing layout components
The system SHALL wrap all four new sections in the existing `Section` and `PageContainer` components for consistent layout.

#### Scenario: Each section uses Section as wrapper
- **WHEN** any of the four new sections is rendered
- **THEN** it SHALL use the `Section` component as the outer wrapper with consistent vertical padding

#### Scenario: Each section uses PageContainer for content width
- **WHEN** any of the four new sections is rendered
- **THEN** its content SHALL be wrapped in `PageContainer` for consistent max-width and padding
