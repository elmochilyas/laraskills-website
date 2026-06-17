## MODIFIED Requirements

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
