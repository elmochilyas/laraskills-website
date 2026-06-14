## 1. Component — CliCommandCard

- [x] 1.1 Create `components/CliCommandCard.tsx` with terminal-window chrome (traffic-light dots, dark header bar)
- [x] 1.2 Render command text with `$` prompt prefix in green, monospace font, syntax-colored tokens (command vs flags vs args)
- [x] 1.3 Add copy button that copies the command text to clipboard and shows "Copied" feedback for 2 seconds
- [x] 1.4 Display a human-readable usage label above or near the command (e.g., "Install Laraskills")
- [x] 1.5 Accept props: `command: string`, `label: string`, optional `className?: string`
- [x] 1.6 Verify component renders correctly in isolation

## 2. Component — McpToolCard

- [x] 2.1 Create `components/McpToolCard.tsx` using Card-style bordered container
- [x] 2.2 Display tool name in monospace font (exact function name, e.g., `retrieve_context_bundle`)
- [x] 2.3 Display a brief description of the tool's purpose
- [x] 2.4 Display a "read-only" badge/chip with appropriate styling
- [x] 2.5 Accept props: `name: string`, `description: string`
- [x] 2.6 Verify component renders correctly in isolation

## 3. Data definitions

- [x] 3.1 Define CLI_COMMANDS constant array in `app/page.tsx` with 6 entries (install, retrieve, search, get, validate, doctor)
- [x] 3.2 Define MCP_TOOLS constant array in `app/page.tsx` with 5 entries (retrieve_context_bundle, search_ecc, get_knowledge_unit, get_graph_context, validate_ecc)
- [x] 3.3 Add internal `// TODO: verify` comments for npm package name and subcommand names (non-user-visible)
- [x] 3.4 Ensure no user-visible warnings about package name appear

## 4. CLI showcase section

- [x] 4.1 Add CLI showcase `Section` (variant="default") after the workflow section with heading and subtitle
- [x] 4.2 Render CLI commands in a responsive 2-column grid (`lg:grid-cols-2`, single column below 1024px)
- [x] 4.3 Map CLI_COMMANDS array to CliCommandCard components
- [x] 4.4 Verify section follows existing homepage section pattern (Section > PageContainer > heading/subtitle grid)

## 5. MCP showcase section

- [x] 5.1 Add MCP showcase `Section` (variant="dark") after CLI showcase section with heading and subtitle mentioning read-only tools
- [x] 5.2 Render MCP tools in a responsive 3/2/1-column grid (`lg:grid-cols-3`, `sm:grid-cols-2`, single column below 640px)
- [x] 5.3 Map MCP_TOOLS array to McpToolCard components
- [x] 5.4 Verify section follows existing homepage section pattern

## 6. Verification

- [x] 6.1 Run `npm run build` and confirm no TypeScript or build errors
- [x] 6.2 Run `npm run lint` and confirm no lint errors
- [x] 6.3 Visually verify both sections on desktop viewport (≥1024px)
- [x] 6.4 Visually verify both sections on mobile viewport (<640px)
- [x] 6.5 Verify each CLI copy button copies the correct command
- [x] 6.6 Verify all 11 cards render with correct content
- [x] 6.7 Verify alternating section backgrounds are correct (CLI: default, MCP: dark)
