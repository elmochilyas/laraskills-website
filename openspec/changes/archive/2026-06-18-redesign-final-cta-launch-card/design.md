## Context

The homepage final CTA section is the last interaction point before a visitor leaves. Currently it renders as a generic Section + PageContainer with a terminal block, two buttons, and a validation note — but the layout feels loose, the terminal is a flat black rectangle, and the elements don't cohere into a single conversion unit.

The existing codebase uses Tailwind CSS, Next.js App Router, and a set of reusable components (Button, Card, Section, PageContainer). The design system has dark developer-tool aesthetic tokens already defined.

## Goals / Non-Goals

**Goals:**
- Replace the final CTA section with a single compact dark "launch card"
- Polish the terminal block with top-bar chrome (dots + label) and a dark-but-not-pure-black background
- Keep buttons inside the card with clear primary/secondary hierarchy
- Integrate validation note as a small inline footnote
- Match the existing premium dark developer-tool aesthetic
- Responsive: clean stack on mobile, no horizontal overflow

**Non-Goals:**
- No new external dependencies or UI libraries
- No changes to the hero section terminal command
- No changes to any other homepage section
- No changes to docs, MCP, SEO, deployment, routing, or metadata
- No fake metrics, testimonials, stars, or download counts
- No standalone validation section or research card

## Decisions

1. **Single Card component over Section wrapper** — Wrap the entire CTA content in a `Card` component (existing) instead of using `Section` + `PageContainer`. This collapses vertical space and gives a contained premium feel. The `Card` already supports dark variant, border, and glow utilities.
2. **Glass-morphism via backdrop-blur + semi-transparent bg** — Use `bg-black/40 backdrop-blur-sm border border-white/10` for the card surface. This gives a subtle glass effect without adding a dependency.
3. **Terminal top-bar is pure CSS** — A small `div` with three dots (`div.w-2.h-2.rounded-full.bg-red-400` etc.) plus a `TERMINAL` label. No external terminal widget. The body uses `bg-zinc-900` (not pure black) with a monospace command row.
4. **Button placement inside card** — Primary button uses the existing red accent (`bg-red-600 hover:bg-red-500`), secondary uses ghost/outline style. Both sit on their own row below the terminal block with `gap-3` spacing.
5. **Validation note as a muted inline paragraph** — `text-xs text-zinc-500` with a subtle separator line above it. The `Read the study →` link uses the existing link style with `text-red-400 hover:text-red-300`.
6. **Responsive via existing Tailwind breakpoints** — Stack all elements vertically by default. Use `max-w-3xl lg:max-w-4xl mx-auto` for centering. No grid layout needed since this is a single-column card.
7. **Install command change** — Update the terminal command text from `npx laraskills@beta install` to `npm install --save-dev laraskills` only in the final CTA section. Hero section keeps its existing command.

## Risks / Trade-offs

- **Card vs Section consistency**: The final CTA will no longer use `Section`/`PageContainer`, breaking the pattern used by other sections. Mitigation: This is intentional — the card is meant to feel distinct as the final conversion moment.
- **Validation note subtlety risk**: Making the note too quiet could make it look like fine-print boilerplate. Mitigation: Keep it visible with `text-zinc-400` and an inline link, not hidden or greyed out to illegibility.
- **Terminal copy change**: The install command differs between hero and final CTA. Mitigation: The hero uses `npx` (quick trial), the final CTA uses `npm install` (commitment signal) — the difference is intentional for conversion psychology.
