## Why

The homepage currently showcases Laraskills features (metrics, comparison, architecture, workflow, CLI, MCP) but lacks two critical trust-building sections: proof that Laraskills works across many coding tools, and honest research evidence backing its claims. Visitors need to see wide tool support and credible research results before committing to install.

## What Changes

- Add a **supported coding agents/tools grid** section showing 12 tools Laraskills works with
- Add a **research/evidence summary** section with honest, transparent study results
- Add a **final call-to-action section** with install command and links
- Wire up a Research page route (`/research`) as a placeholder for the "Read the research" link
- No new external UI libraries; reuse existing foundation components (Section, PageContainer, Card, Button)

## Capabilities

### New Capabilities
- `integrations-and-research-proof`: Three homepage sections — supported tools grid, research/evidence summary, and final call-to-action — designed to build visitor trust through transparent tool support and honest research evidence.

### Modified Capabilities
- `homepage`: Add requirement that three new proof sections display after the existing MCP showcase section, in order: supported tools grid, research/evidence, final CTA.

## Impact

- `app/page.tsx` — add three new sections after the MCP showcase section
- `components/` — may create new components for the tools grid and research summary if existing components are insufficient
- `data/` — may add a JSON data file for the supported tools list
- `app/research/` — placeholder route for "Read the research" link target
- No changes to `homepage-metrics.json`
