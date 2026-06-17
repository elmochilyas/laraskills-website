# Icon System Improvements — Capability Specification

## Purpose

Consistent, premium icon rendering for all 12 supported tools in the integrations section. Icons are sourced from `@lobehub/icons` (Color/Mono variants) with documented inline SVG paths as a last resort. No letter badges, monograms, or generic category glyphs are used. Icons render directly in pill/card containers at 22px without an inner cadre.

## Requirements

### Requirement: All 12 tools have verified real brand icons

Every tool in the integrations section SHALL have a verified real brand icon. No letter badges, monograms, or generic category glyphs SHALL be used as fallbacks.

#### Scenario: Tools with lobehub Color variant render brand-colored icon
- **WHEN** a tool has a `@lobehub/icons` Color export (Claude Code, Gemini CLI, Codex CLI, Trae, Qwen, CodeBuddy, Kiro)
- **THEN** it SHALL render the Color component directly without color overrides
- **THEN** brand colors from the SVG SHALL be preserved

#### Scenario: Tools with lobehub Mono only render white icon
- **WHEN** a tool only has a `@lobehub/icons` Mono export (OpenCode, Cursor, GitHub Copilot)
- **THEN** it SHALL render the Mono component with `style={{ color: "#fff" }}`

#### Scenario: Tools without lobehub entry use documented inline SVG path
- **WHEN** a tool has no lobehub entry (VS Code, Zed)
- **THEN** it SHALL render via a verified inline SVG path with white fill
- **THEN** the path source SHALL be documented (e.g., Microsoft VS Code brand SVG for VS Code)

#### Scenario: No fallback icons exist
- **WHEN** `BrandIcon` is called with an `iconKey` not found in the registry
- **THEN** it SHALL return null
- **THEN** it SHALL NOT render a letter badge, monogram, or generic glyph

### Requirement: Icons render directly without inner cadre

Icon components SHALL NOT be wrapped in an inner cadre/container div. The pill or card container SHALL provide the only background and spacing.

#### Scenario: No wrapper div around icons
- **WHEN** `BrandIcon` renders an icon
- **THEN** it SHALL NOT wrap the icon in a `h-8 w-8 rounded-lg` div or any other bounding container
- **THEN** the icon SHALL render at 22px visual size directly in its parent

### Requirement: Icon source is prioritized

The icon source selection SHALL follow this priority:
1. `@lobehub/icons` Color export (preserves brand colors)
2. `@lobehub/icons` Mono export (renders white on container background)
3. Documented inline SVG path (for tools without lobehub entries)
4. No fallback (returns null if neither source is available)

#### Scenario: Priority enforcement
- **WHEN** a tool has a lobehub entry
- **THEN** it SHALL use the lobehub component (not an inline SVG path)
- **WHEN** a tool does not have a lobehub entry
- **THEN** it SHALL use the inline SVG path from the registry

### Requirement: VS Code icon is correct

The VS Code icon SHALL use the official Visual Studio Code stable icon path sourced from Microsoft's brand assets.

#### Scenario: VS Code renders official logo
- **WHEN** VS Code is rendered in the integrations section
- **THEN** it SHALL display the official blue ribbon icon path
- **THEN** it SHALL NOT display a simplified bracket pair
- **THEN** it SHALL NOT display a letter "V"
- **THEN** it SHALL NOT display a generic editor icon

### Requirement: BrandIcon is the single rendering component

Both the top integration cloud and group cards SHALL render tool icons through `BrandIcon` exclusively.

#### Scenario: IntegrationCloudItem uses BrandIcon
- **WHEN** IntegrationCloudItem renders a tool
- **THEN** it SHALL render `<BrandIcon iconKey={tool.icon} />` unconditionally

#### Scenario: IntegrationGroupCard uses BrandIcon
- **WHEN** IntegrationGroupCard renders a tool
- **THEN** it SHALL render `<BrandIcon iconKey={tool.icon} />` for each tool

### Requirement: No simple-icons dependency

The system SHALL NOT depend on the `simple-icons` npm package. Any icon data previously sourced from simple-icons SHALL be inlined in the registry.

#### Scenario: Registry is self-contained
- **WHEN** the icon registry is inspected
- **THEN** it SHALL contain all necessary icon data as lobehub component references or inline SVG paths
- **THEN** it SHALL NOT import from `lib/simple-icons.ts` or any other external icon data file

### Requirement: FallbackIcon, glyphs, and generator script are removed

The following SHALL be deleted and SHALL NOT exist in the codebase:
- `lib/_gen.js` (icon generator script)
- `lib/simple-icons.ts` (generated icon data file)
- `lib/glyphs.ts` (generic category glyphs)
- `FallbackIcon` component or monogram fallback logic in BrandIcon
- `fallbackIcon` prop in IntegrationCloudItem, IntegrationGroupCard, or page.tsx
