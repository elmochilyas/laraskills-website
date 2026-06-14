## Why

The homepage hero now communicates the value proposition, but it does not build trust or explain how Laraskills works. Visitors who are curious ("ok, but is it any good?") have no evidence of substance — no metrics, no comparison against generic agents, no architecture overview, and no workflow visualization. These four sections (metrics, comparison, architecture layers, workflow visual) are the next logical progression to convert curious visitors into engaged users.

## What Changes

- **Project metrics section**: A card-based row displaying 7 key numbers (12 Laravel skills, 41 always-follow rules, 12 agent definitions, 21 engineering domains, 2,321 knowledge units, 5 read-only MCP tools, 12 supported coding harnesses). Data sourced from a simple JSON data file for easy replacement later.
- **Generic agent vs Laraskills comparison**: A two-column comparison table/section contrasting what a generic coding agent does ("Guesses Laravel conventions", "Relies on broad framework memory", "Misses architecture decisions", "Needs long manual prompts") against what Laraskills provides ("Loads Laravel-specific guidance", "Uses focused retrieval", "Follows skills, rules, and checklists", "Works with MCP-compatible tools").
- **Three-layer architecture section**: Three cards describing the Operating Layer (skills, rules, agents, command references, harness configs), Intelligence Layer (domains, knowledge units, indexes, routing maps, dependency graph), and Retrieval Layer (CLI retrieval, search, inspect, graph context, MCP tools).
- **Agent workflow visual section**: A horizontal step flow: Developer task → Domain routing → Knowledge retrieval → Skill workflow → Agent implementation → Validation checklist. Built with cards and connecting visual elements (arrows/lines).

## Capabilities

### New Capabilities
- `homepage-value-value-metrics`: Metrics section displaying project statistics
- `homepage-value-comparison`: Generic agent vs Laraskills comparison section
- `homepage-value-architecture`: Three-layer architecture overview section
- `homepage-value-workflow`: Agent workflow visual section

### Modified Capabilities
- `homepage`: The homepage spec will be updated to include the four new sections after the hero

## Impact

- `app/page.tsx`: Add four new sections below the existing hero
- `components/MetricsCard.tsx`: New — reusable card for a single metric value/label
- `components/ComparisonTable.tsx`: New — two-column comparison component
- `components/ArchitectureLayerCard.tsx`: New — card for one architecture layer
- `components/WorkflowStep.tsx`: New — single step in the workflow visual
- `components/WorkflowArrow.tsx`: New — connecting arrow/line between workflow steps
- `data/homepage-metrics.json`: New — JSON data file for metrics (easy to replace)
- No new pages, routes, or external UI libraries
- No changes to Header, Footer, layout, globals.css, or existing foundation components
