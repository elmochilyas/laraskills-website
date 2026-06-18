# Integrations and Research Proof — Capability Specification

## Purpose

Two homepage sections — supported coding agents/tools grid and final call-to-action — that build visitor trust through transparent tool support, with detailed evidence deferred to the `/research` page.

## Requirements

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

### Requirement: Inline credibility note inside final CTA section

The system SHALL display a small inline credibility note inside the final CTA section as a quiet footnote.

#### Scenario: Inline note appears after subtitle and before terminal card
- **WHEN** the final CTA section is rendered
- **THEN** a small `<p>` element SHALL appear after the section subtitle and before the terminal command card
- **THEN** the note SHALL read: "Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →"
- **THEN** the "Read the study →" portion SHALL be an `<a>` element linking to `/research`
- **THEN** the note SHALL use `text-xs text-text-muted` styling
- **THEN** the link SHALL use the accent color (`text-accent`)

#### Scenario: Note is visually quiet
- **WHEN** the inline note is rendered
- **THEN** it SHALL NOT be wrapped in any card, border, background, icon, or chip
- **THEN** it SHALL NOT be rendered inside a `Section` wrapper or any standalone section container
- **THEN** it SHALL be a plain text footnote within the final CTA section's content flow

#### Scenario: No inflated claims
- **WHEN** the homepage is inspected
- **THEN** it SHALL NOT claim Laraskills always outperforms generic agents, SHALL NOT call the study a benchmark, and SHALL use honest transparent language

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

The system SHALL build all proof sections using existing components without introducing new UI libraries.

#### Scenario: Sections use Section and PageContainer
- **WHEN** any proof section is rendered
- **THEN** it SHALL use the Section component as the outer wrapper and PageContainer for content width

#### Scenario: No external UI libraries are used
- **WHEN** the proof sections are inspected
- **THEN** all styling SHALL use existing CSS design tokens and Tailwind utilities

#### Scenario: Inline credibility note uses plain HTML elements
- **WHEN** the inline credibility note is rendered
- **THEN** it SHALL use simple `<p>` and `<a>` elements without any Card, Section, or custom component wrappers
