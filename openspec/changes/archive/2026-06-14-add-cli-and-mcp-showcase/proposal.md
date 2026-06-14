## Why

The homepage currently explains *what* Laraskills is conceptually (hero, metrics, architecture, workflow) but doesn't show *how* developers actually use it day-to-day. Visitors see the promise but not the practice. Adding a CLI showcase and an MCP tools showcase bridges that gap — proving Laraskills is a tangible, usable developer tool with real commands and agent-integratable tools.

## What Changes

- Add a **CLI showcase section** below the workflow section with terminal-style cards showing 6 practical `npx laraskills` commands (install, retrieve, search, get, validate, doctor).
- Add an **MCP tools showcase section** below the CLI section with cards describing the 5 read-only MCP tools (retrieve_context_bundle, search_ecc, get_knowledge_unit, get_graph_context, validate_ecc).
- Both sections follow existing homepage section patterns (Section + PageContainer + responsive grid).
- No changes to hero, metrics, comparison, architecture, or workflow sections.

## Capabilities

### New Capabilities
- `cli-showcase`: CLI command showcase section with terminal-style cards displaying 6 practical Laraskills commands with copy actions and visual terminal styling.
- `mcp-showcase`: MCP tools showcase section with tool cards describing 5 read-only MCP tools exposed by Laraskills for compatible coding agents.

### Modified Capabilities
- `homepage`: Add two new sections to the homepage — CLI showcase and MCP showcase — placed after the existing workflow section. The existing spec requirement R7 ("All sections reuse existing layout components") covers this implicitly, but a delta spec is needed to document the new section requirements.

## Impact

- **app/page.tsx**: Add two new sections below the workflow section; import any new components.
- **components/**: Two new reusable components likely needed: `CliCommandCard` (terminal-style card with copy) and `McpToolCard` (tool description card).
- **data/**: Optionally add a JSON data file for CLI commands and MCP tools if externalizing content.
- No CSS changes beyond Tailwind utilities already used.
- No dependency changes.
- No API or data-layer changes.
