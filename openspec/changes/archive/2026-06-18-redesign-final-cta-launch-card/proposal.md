## Why

The homepage final CTA section (`Ready to ship better Laravel code?`) is the last conversion moment before a visitor leaves the page, but it currently feels flat and under-designed. There is too much empty vertical space, the terminal block renders as a plain black rectangle, the buttons feel disconnected from the content, and the early-validation note is present but not integrated elegantly. Redesigning this section into a compact premium "launch card" will create a stronger final impression and improve conversion intent.

## What Changes

- Replace the existing final CTA section layout with a single compact dark "launch card".
- Wrap the heading, subtitle, terminal command, buttons, and validation note inside one premium glass-morphism card.
- Reduce vertical padding to make the section feel tight and deliberate.
- Redesign the terminal block with a small top bar (macOS-style dots + `TERMINAL` label), dark-but-not-pure-black background, and compact command row.
- Reposition the primary ("Install Laraskills") and secondary ("View GitHub") buttons to sit within the card with clean spacing.
- Integrate the early-validation note as a small inline credibility footnote at the bottom of the card — not as a standalone section or card.
- Change the install command from `npx laraskills@beta install` to `npm install --save-dev laraskills`.

## Capabilities

### New Capabilities

- *(none — all changes modify the existing homepage capability)*

### Modified Capabilities

- `homepage`: The final CTA section requirements are changing — layout shifts from a generic section to a compact premium launch card, terminal block styling is updated, the install command changes to `npm install --save-dev laraskills`, buttons are repositioned inside the card, and the validation note is integrated as a footnote rather than a separate element.

## Impact

- **Scope**: Only the homepage final CTA section (`app/`). No other homepage sections or pages are affected.
- **Terminal command change**: The install command in the final CTA changes from `npx laraskills@beta install` to `npm install --save-dev laraskills`. This does NOT affect the hero section's terminal command.
- **Section/component**: Likely a new component or significant refactor of the existing final CTA component within the homepage.
- **No changes**: Docs, MCP, SEO, deployment, routing, metadata, or other sections.
