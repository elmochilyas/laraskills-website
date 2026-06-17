## MODIFIED Requirements

### Requirement: MCP showcase section displays 5 MCP tools

#### Scenario: Section renders with heading and subtitle
- **WHEN** the MCP showcase section is rendered
- **THEN** it SHALL display a section heading and a descriptive subtitle explaining that Laraskills exposes read-only MCP tools
- **WHEN** the MCP section is rendered on the homepage
- **THEN** the section heading SHALL be "Local Laravel context for AI coding agents" with eyebrow "MCP LAYER"

#### Scenario: Section renders 5 tool cards
**REMOVED** — Tool cards with I/O schemas no longer render on the homepage. See `mcp-section` spec for replacement.

**Reason**: Homepage MCP section simplified to value-oriented display. Full tool cards moved to `/docs/mcp`.

**Migration**: Tool detail information lives in `/docs/mcp` page and public `/mcp` page.

#### Scenario: Section emphasizes read-only and safety

#### Scenario: Section subtitle mentions read-only
- **WHEN** the simplified MCP section is rendered on the homepage
- **THEN** the section SHALL display 3 value cards emphasizing "Read-only", "Local retrieval", and "Deterministic context" instead of badges on individual tool cards

#### Scenario: Badge indicates read-only on cards
**REMOVED** — No per-tool badges on homepage. Read-only, local, and deterministic are communicated via the 3 value cards.

#### Scenario: Each tool card has a description
**REMOVED** — Tool descriptions with I/O schemas are no longer displayed on the homepage.

#### Scenario: Tool names use real function names
**REMOVED** — Tool function names are no longer listed on the homepage. They remain in `/docs/mcp` and `/mcp` pages.

#### Scenario: Section branding is Laraskills
- **WHEN** the simplified MCP section is rendered on the homepage
- **THEN** the section SHALL use "Laraskills" branding

#### Scenario: MCP tool cards use responsive grid layout
**REMOVED** — Tool card grid no longer renders on homepage.
