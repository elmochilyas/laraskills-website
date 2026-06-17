## MODIFIED Requirements

### Requirement: Supported tools grid displays coding agents and tools

The system SHALL display a unified Developer Dock section on the homepage showing all supported coding agents and tools that Laraskills works with.

#### Scenario: Dock displays all 12 tools as pills
- **WHEN** the Developer Dock section is rendered
- **THEN** it SHALL display exactly 12 tools as logo pills: OpenCode, Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, VS Code, Zed, Trae, Qwen, CodeBuddy, Kiro
- **THEN** every pill SHALL render with a verified real brand icon (no letter badges, no generic glyphs)
- **THEN** no tool SHALL render without an icon

#### Scenario: Icon source varies by tool
- **WHEN** a tool pill is rendered
- **THEN** it SHALL use the same `BrandIcon` component with the same icon source and 22px sizing as the current implementation
- **THEN** the icon SHALL render at 22px visual size with no inner cadre/container

#### Scenario: Pills are displayed in a single unified dock panel
- **WHEN** the Developer Dock section is rendered
- **THEN** all tools SHALL display inside a single dark glass panel
- **THEN** no category groupings, cards, or section headers SHALL appear between tools
- **THEN** no diagram, flow arrows, or "tools → context → output" visual SHALL appear

#### Scenario: Each pill contains icon and tool name
- **WHEN** a tool pill is rendered
- **THEN** it SHALL display the 22px icon and the tool name side by side inside a rounded pill container
- **THEN** the pill SHALL have a dark translucent background, soft border, and consistent height
- **THEN** the pill SHALL NOT contain an inner icon square/cadre

#### Scenario: Pills wrap responsively
- **WHEN** the viewport is 1024px or wider
- **THEN** pills SHALL display in a flex wrap layout with comfortable spacing
- **WHEN** the viewport is narrower than 640px
- **THEN** pills SHALL wrap naturally within the panel width

#### Scenario: Pills have subtle hover effect
- **WHEN** a pill is hovered
- **THEN** it SHALL show a subtle lift/glow effect (e.g., `hover:-translate-y-0.5 hover:shadow-lg hover:border-white/20`)
- **THEN** there SHALL be no carousel, auto-scrolling, or heavy animation

#### Scenario: Tools are loaded from a data file
- **WHEN** the Developer Dock is rendered
- **THEN** the tool names and icon keys SHALL be sourced from `data/supported-tools.json`
- **THEN** all tools SHALL have an `icon` key (no `fallbackIcon` keys)

#### Scenario: Dock section displays new copy
- **WHEN** the Developer Dock section is rendered
- **THEN** it SHALL display eyebrow "SUPPORTED STACK"
- **THEN** it SHALL display heading "Works with the tools you already trust"
- **THEN** it SHALL display subtitle "Bring Laravel-specific context into your existing AI coding workflow — terminal, editor, or assistant."

#### Scenario: Dock displays value sentence and CTA
- **WHEN** the Developer Dock section is rendered
- **THEN** it SHALL display the value sentence: "No workflow migration. No vendor lock-in. Just Laravel-aware context where your agent works."
- **THEN** it SHALL display a CTA labeled "View integration docs" linking to `/docs/integrations`
- **THEN** it SHALL display the trademark disclaimer: "Tool names and logos are trademarks of their respective owners."

#### Scenario: Dock has premium glass styling
- **WHEN** the Developer Dock section is rendered
- **THEN** the dock panel SHALL use a large rounded dark glass container with `backdrop-blur`, dark background, and subtle border
- **THEN** a subtle red/purple radial glow SHALL appear behind the dock
- **THEN** a soft top highlight line or glow SHALL be present on the panel
- **THEN** spacing SHALL be clean and the section SHALL NOT be excessively tall
- **THEN** the section SHALL look good as a standalone screenshot

### Requirement: Research section displays study evidence

(Unchanged — see base spec at `openspec/specs/integrations-and-research-proof/spec.md`)

### Requirement: Final call-to-action section closes the page

(Unchanged — see base spec at `openspec/specs/integrations-and-research-proof/spec.md`)

### Requirement: All sections reuse existing foundation components

(Unchanged — see base spec at `openspec/specs/integrations-and-research-proof/spec.md`)
