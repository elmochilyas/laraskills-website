## 1. Cleanup — Remove Old Integrations Layout

- [x] 1.1 Remove `IntegrationCloudItem` and `IntegrationGroupCard` imports from `app/page.tsx`
- [x] 1.2 Remove the section markup (lines ~2258–2300 in current `app/page.tsx`) including the tool cloud, category card grid, and the old trademark line
- [x] 1.3 Verify `IntegrationGroupCard.tsx` and `IntegrationCloudItem.tsx` are unused elsewhere via grep; delete if dead code

## 2. Implement Developer Dock Section

- [x] 2.1 Add the new Section with variant="surface" and PageContainer wrapper in `app/page.tsx` at the same location
- [x] 2.2 Add section header: eyebrow "SUPPORTED STACK", heading "Works with the tools you already trust", subtitle "Bring Laravel-specific context into your existing AI coding workflow — terminal, editor, or assistant."
- [x] 2.3 Build the dark glass dock panel: rounded container with `backdrop-blur`, `bg-black/40` or equivalent dark translucent background, soft `border border-white/[0.06]`, `shadow-2xl`, and a subtle top highlight line
- [x] 2.4 Add a red/purple radial glow behind the dock (absolute-positioned div with `radial-gradient`)
- [x] 2.5 Iterate `supportedTools.allTools` to render logo pills: each pill is a `flex` row with `BrandIcon` (22px) + tool name, inside a `rounded-full` container with dark translucent background, soft border, consistent height, and group hover effects (`hover:-translate-y-0.5 hover:shadow-lg`)
- [x] 2.6 Add bottom value sentence: "No workflow migration. No vendor lock-in. Just Laravel-aware context where your agent works."
- [x] 2.7 Add CTA Button "View integration docs" with `href="/docs/integrations"`
- [x] 2.8 Add trademark disclaimer line: "Tool names and logos are trademarks of their respective owners."
- [x] 2.9 Ensure responsive wrapping: pills wrap naturally on all viewport sizes via `flex-wrap justify-center` with adequate gap

## 3. Verification

- [x] 3.1 Run `npm run dev` and verify the Developer Dock renders correctly on desktop and mobile viewports
- [x] 3.2 Verify all 12 tool icons render correctly (no letter badges, no missing icons)
- [x] 3.3 Verify hover effects work on pills (subtle lift + glow)
- [x] 3.4 Verify CTA link points to `/docs/integrations`
- [x] 3.5 Verify other homepage sections (hero, CLI showcase, MCP, research, final CTA) are unchanged
- [x] 3.6 Verify the `/docs/integrations` page content is unchanged
- [x] 3.7 Run `npm run lint` and `npm run typecheck` to ensure no type/build errors
