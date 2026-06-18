## 1. Locate and Understand Current Code

- [x] 1.1 Locate the final CTA section component in the homepage source
- [x] 1.2 Identify the current terminal block markup, button placement, and validation note rendering
- [x] 1.3 Confirm existing Card component supports dark variant, border, and glow utilities

## 2. Create LaunchCard Component

- [x] 2.1 Create `LaunchCard` component (or refactor existing final CTA component) as a self-contained card
- [x] 2.2 Implement glass-morphism card wrapper: `bg-black/40 backdrop-blur-sm border border-white/10` with rounded corners and subtle red/purple glow
- [x] 2.3 Add card heading: "Ready to ship better Laravel code?"
- [x] 2.4 Add card subtitle: "Install Laraskills and give your coding agent Laravel-specific context in seconds."
- [x] 2.5 Build polished terminal block with top bar (three colored dots + `TERMINAL` label), `bg-zinc-900` body, and monospace command row displaying `npm install --save-dev laraskills`
- [x] 2.6 Add primary Button "Install Laraskills" with red accent styling
- [x] 2.7 Add secondary Button "View GitHub" with ghost/outline styling
- [x] 2.8 Add validation footnote: "Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →" with link to `/research`, using `text-xs text-zinc-400` and a subtle separator
- [x] 2.9 Ensure responsive stacking on mobile viewports with no horizontal overflow
- [x] 2.10 Set card max-width to `max-w-3xl lg:max-w-4xl mx-auto` for centered layout

## 3. Integrate LaunchCard into Homepage

- [x] 3.1 Replace the existing final CTA section with the new `LaunchCard` component in the homepage page file
- [x] 3.2 Remove `Section`/`PageContainer` wrappers from the final CTA area (they are replaced by the card)
- [x] 3.3 Verify card renders after the MCP showcase section (last section before footer)

## 4. Remove or Clean Up Old Final CTA Code

- [x] 4.1 Remove any unused component files or markup from the old final CTA section
- [x] 4.2 Verify no orphaned imports or dead code remains

## 5. Verify Implementation

- [x] 5.1 Run `npm run dev` and visually inspect the final CTA launch card on desktop
- [x] 5.2 Inspect the card on mobile viewport (≤640px) for clean vertical stacking
- [x] 5.3 Confirm validation note is small, quiet, and the link navigates to `/research`
- [x] 5.4 Confirm terminal block has polished appearance (dots, label, dark background)
- [x] 5.5 Confirm no other homepage sections or pages are affected
- [x] 5.6 Run `npm run lint` and `npm run typecheck` to verify no errors
