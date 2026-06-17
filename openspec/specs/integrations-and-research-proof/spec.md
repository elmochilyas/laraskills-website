# Integrations and Research Proof — Capability Specification

## Purpose

Three homepage sections — supported coding agents/tools grid, research/evidence summary, and final call-to-action — that build visitor trust through transparent tool support and honest research evidence.

## Requirements

### Requirement: Supported tools grid displays coding agents and tools

The system SHALL display a responsive grid of supported coding agents and tools that Laraskills works with.

#### Scenario: Grid displays 12 supported tools
- **WHEN** the supported tools section is rendered
- **THEN** it SHALL display exactly 12 tools in a grid and top cloud: OpenCode, Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, VS Code, Zed, Trae, Qwen, CodeBuddy, Kiro
- **THEN** every tool SHALL render with a verified real brand icon (no letter badges, no generic glyphs)
- **THEN** no tool SHALL render without an icon

#### Scenario: Icon source varies by tool
- **WHEN** a tool entry is rendered
- **THEN** it SHALL use a `@lobehub/icons` Color component (7 tools), `@lobehub/icons` Mono component (3 tools), or inline SVG path (2 tools: VS Code, Zed)
- **THEN** the icon SHALL render at 22px visual size
- **THEN** the icon SHALL NOT be wrapped in an inner cadre/container

#### Scenario: Top cloud and group cards use identical rendering
- **WHEN** a tool appears in both the top cloud and a group card
- **THEN** it SHALL use the same `BrandIcon` component with the same icon source and sizing

#### Scenario: Each tool is displayed in a container
- **WHEN** a tool entry is rendered in the top cloud
- **THEN** it SHALL display inside a pill with the tool name and 22px icon, with no inner square wrapper
- **WHEN** a tool entry is rendered in a group card
- **THEN** it SHALL display as an inline row with the tool name and 22px icon, with no inner square wrapper

#### Scenario: Grid is responsive
- **WHEN** the viewport is at least 1024px wide
- **THEN** the grid SHALL display in 3 columns
- **WHEN** the viewport is between 640px and 1024px
- **THEN** the grid SHALL display in 3 columns
- **WHEN** the viewport is narrower than 640px
- **THEN** the grid SHALL display in 1 column

#### Scenario: Tools are loaded from a data file
- **WHEN** the tools section is rendered
- **THEN** the tool names and icon keys SHALL be sourced from `data/supported-tools.json`
- **THEN** all tools SHALL have an `icon` key (no `fallbackIcon` keys)

#### Scenario: Grid heading describes tool support
- **WHEN** the supported tools section is rendered
- **THEN** it SHALL display a section heading and subtitle explaining that Laraskills works with these coding agents

### Requirement: Research section displays study evidence

The system SHALL display a research/evidence summary section presenting transparent study results.

#### Scenario: Section displays 4 research facts
- **WHEN** the research section is rendered
- **THEN** it SHALL display these 4 facts:
  - 9 isolated OpenCode runs
  - 3 Laravel implementation scenarios
  - 100% test and Pint pass rate
  - Required-context mode won 2 of 3 scenarios

#### Scenario: Facts are presented as styled stat items
- **WHEN** a research fact is rendered
- **THEN** it SHALL display a prominent value and a descriptive label below it

#### Scenario: Section includes honest framing text
- **WHEN** the research section is rendered
- **THEN** it SHALL include text explicitly noting these are study results, without claiming Laraskills always beats baseline agents

#### Scenario: Section includes a "Read the research" link
- **WHEN** the research section is rendered
- **THEN** it SHALL include a link labeled "Read the research" pointing to `/research`

#### Scenario: No inflated claims are made
- **WHEN** the research section is inspected
- **THEN** it SHALL NOT claim Laraskills always outperforms generic agents, and SHALL use honest transparent language

### Requirement: Final call-to-action section closes the page

The system SHALL display a final call-to-action section at the bottom of the homepage with install command and navigation links.

#### Scenario: Section displays install command
- **WHEN** the final CTA section is rendered
- **THEN** it SHALL display the install command `npx laraskills@beta install` in a styled block

#### Scenario: Section displays primary CTA button
- **WHEN** the final CTA section is rendered
- **THEN** it SHALL include a primary Button labeled "Install Laraskills" linking to the GitHub repository

#### Scenario: Section displays secondary CTA button
- **WHEN** the final CTA section is rendered
- **THEN** it SHALL include a secondary Button labeled "View GitHub" linking to the GitHub repository

#### Scenario: Section displays tertiary docs link
- **WHEN** the final CTA section is rendered
- **THEN** it SHALL include a tertiary link labeled "Read the docs" with `href="/docs"` as a placeholder

#### Scenario: Section heading reinforces value proposition
- **WHEN** the final CTA section is rendered
- **THEN** it SHALL display a heading and subtitle that reinforce the Laraskills value proposition

### Requirement: All sections reuse existing foundation components

The system SHALL build all three proof sections using existing components without introducing new UI libraries.

#### Scenario: Sections use Section and PageContainer
- **WHEN** any proof section is rendered
- **THEN** it SHALL use the Section component as the outer wrapper and PageContainer for content width

#### Scenario: No external UI libraries are used
- **WHEN** the proof sections are inspected
- **THEN** all styling SHALL use existing CSS design tokens and Tailwind utilities
