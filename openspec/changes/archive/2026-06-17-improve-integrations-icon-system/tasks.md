## 1. Icon Source Evaluation

- [x] 1.1 Evaluate `@lobehub/icons` as primary icon source — inspect all available exports (Color, Mono, Avatar, Combine) for each of the 12 tools
- [x] 1.2 Determine which 10 of 12 tools have a lobehub entry and which variants (Color vs Mono) are available
- [x] 1.3 Identify 2 tools without lobehub entries (VS Code, Zed) and plan alternative sourcing
- [x] 1.4 Check VS Code availability in lobehub — confirmed: no VS Code icon exists in the package
- [x] 1.5 Check VS Code availability in `simple-icons` npm package — confirmed: `siVisualstudiocode` does not exist in v16.23.0
- [x] 1.6 Source official VS Code icon path from Microsoft's brand SVG (code.visualstudio.com/brand, CC0 on Wikimedia Commons)

## 2. Create Final Icon Registry

- [x] 2.1 Create `lib/integration-icons.tsx` with a unified `IconConfig` type and registry mapping all 12 tools to their icon source
- [x] 2.2 Register lobehub Color variants for 7 tools (ClaudeCode, GeminiCLI, Codex, Trae, Qwen, CodeBuddy, Kiro)
- [x] 2.3 Register lobehub Mono variants for 3 tools (OpenCode, Cursor, GithubCopilot)
- [x] 2.4 Register inline SVG paths for 2 tools (VS Code with official blue ribbon path, Zed with verified path)
- [x] 2.5 Remove `hex` fields from registry — no longer needed after cadre removal
- [x] 2.6 Remove `hexFromSimple()`, `simpleIconKeys` for-loop, and all imports from `lib/simple-icons.ts`

## 3. Rewrite BrandIcon

- [x] 3.1 Remove `fallbackIcon` prop and all glyph/fallback rendering logic
- [x] 3.2 Remove inner cadre wrapper (`h-8 w-8 rounded-lg` div with background color)
- [x] 3.3 Render lobehub Color variants directly (no wrapper, no color override)
- [x] 3.4 Render lobehub Mono variants directly with `style={{ color: "#fff" }}`
- [x] 3.5 Render inline SVG paths via `renderIconSvg` with 22px sizing
- [x] 3.6 Handle null/undefined iconKey by returning null (no fallback)

## 4. Update Data Layer

- [x] 4.1 Remove all `fallbackIcon` entries from `data/supported-tools.json` — all 12 tools use `icon` key
- [x] 4.2 Update VS Code entry from `{ "name": "VS Code", "fallbackIcon": "editor" }` to `{ "name": "VS Code", "icon": "vscode" }`
- [x] 4.3 Verify all 12 tools in `allTools` array have `icon` and no `fallbackIcon`

## 5. Clean Up Components

- [x] 5.1 Remove `fallbackIcon` prop type from `IntegrationCloudItem` and `IntegrationGroupCard`
- [x] 5.2 Remove `fallbackIcon` passthrough in `app/page.tsx`
- [x] 5.3 Simplify type annotation in `app/page.tsx` — remove `fallbackIcon` from inline type
- [x] 5.4 Adjust gap/spacing in cloud items and group cards for larger icons

## 6. Remove Dead Code

- [x] 6.1 Delete `lib/simple-icons.ts` — no longer needed
- [x] 6.2 Delete `lib/_gen.js` — no longer needed
- [x] 6.3 Delete `lib/glyphs.ts` — no longer needed
- [x] 6.4 Remove `simple-icons` dependency from `package.json`
- [x] 6.5 Run `npm uninstall simple-icons`
- [x] 6.6 Revert `eslint.config.mjs` — remove ignore entry for deleted `_gen.js`
- [x] 6.7 Run grep for `fallbackIcon`, `getFallbackGlyph`, `simple-icons`, `glyphs` — confirm zero remaining references

## 7. Visual Verification

- [x] 7.1 Verify BrandIcon returns null iconKey guard (confirmed: early return for falsy iconKey)
- [x] 7.2 Verify lobehub Color variants render with brand colors (confirmed: no text-white override, neutral bg)
- [x] 7.3 Verify lobehub Mono variants render white on dark background (confirmed: style={{ color: "#fff" }})
- [x] 7.4 Verify inline SVG paths render at 22px with white fill
- [x] 7.5 Verify top cloud and group cards use same BrandIcon component with same sizing

## 8. Final Checks

- [x] 8.1 Run `npx tsc --noEmit` — 0 errors
- [x] 8.2 Run `npm run lint` — only pre-existing issues remain
- [x] 8.3 Run `npm run build:webpack` — ✓ Compiled successfully
- [x] 8.4 Run `git status --short` — verify expected files are changed/deleted/added
- [x] 8.5 Update OpenSpec files (proposal, design, tasks, spec deltas) to match final implementation
