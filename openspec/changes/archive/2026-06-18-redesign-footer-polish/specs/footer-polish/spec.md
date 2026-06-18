# Footer Polish — Capability Specification

## Purpose

The Laraskills website footer should present a premium, polished closing section consistent with the dark developer-tool aesthetic of the homepage. This spec captures visual requirements only — all existing links, content, and functional behavior remain unchanged.

## ADDED Requirements

### Requirement: Footer has tight, intentional spacing

The system SHALL use compact but comfortable vertical padding and reduced grid gaps to create a polished footer appearance.

#### Scenario: Footer uses reduced vertical padding

- **WHEN** the footer is rendered
- **THEN** the footer SHALL use `py-12` (or similar) as vertical padding on mobile and `lg:py-16` (or similar) on desktop — tighter than the current `py-14` / `lg:py-18`

#### Scenario: Footer grid uses reduced column gap

- **WHEN** the footer is rendered
- **THEN** the grid gap between columns SHALL be `gap-8` (or similar) rather than `gap-10`

### Requirement: Footer top border uses a gradient divider

The system SHALL display a subtle gradient divider at the top of the footer instead of a harsh solid line.

#### Scenario: Divider uses brand gradient

- **WHEN** the footer is rendered
- **THEN** it SHALL display a gradient divider from `transparent` through a brand-red stop at `brand/20` (or similar) back to `transparent`

### Requirement: Brand block has clear visual hierarchy

The system SHALL display the Laraskills logo, description, and GitHub action with intentional spacing and sizing.

#### Scenario: Logo is prominently sized

- **WHEN** the footer is rendered
- **THEN** the Laraskills logo SHALL use `h-8 w-auto` on mobile and `md:h-10` on desktop

#### Scenario: Description uses tight text measure

- **WHEN** the footer is rendered
- **THEN** the brand description SHALL have a max-width of `max-w-64` (or similar) for a readable line length

#### Scenario: GitHub icon button is a visible callout

- **WHEN** the footer is rendered
- **THEN** the GitHub icon SHALL be rendered as a `h-9 w-9` (or similar) button in the brand column

#### Scenario: GitHub button has hover state

- **WHEN** a user hovers over the GitHub icon button
- **THEN** it SHALL visually indicate it is interactive (border/background/text color change)

### Requirement: Link columns use accent-styled headings

The system SHALL display link column headings with a small accent line indicator and refined hover states for links.

#### Scenario: Heading has accent line

- **WHEN** a link column heading is rendered
- **THEN** it SHALL display a red accent line (or dot) to the left of the uppercase label

#### Scenario: Link hover state uses white

- **WHEN** a user hovers over a footer link
- **THEN** the link SHALL transition to white (`hover:text-white`) instead of brand red

#### Scenario: Link hover includes horizontal translation

- **WHEN** a user hovers over a footer link
- **THEN** the link SHALL slide slightly to the right (`hover:translate-x-1` or similar)

### Requirement: Connect link is styled as an external link

The system SHALL display the GitHub link in the Connect column as a polished external link.

#### Scenario: Connect link shows external arrow

- **WHEN** the Connect column GitHub link is rendered
- **THEN** it SHALL display an external-arrow indicator (↗)

#### Scenario: Connect link has distinct hover

- **WHEN** a user hovers over the Connect GitHub link
- **THEN** it SHALL change to white with the external arrow becoming more visible

### Requirement: Bottom row has polished layout

The system SHALL display the copyright and back-to-top action in a clean layout that adapts to viewport width.

#### Scenario: Desktop layout splits left/right

- **WHEN** the footer is rendered on a viewport at least 640px wide
- **THEN** the copyright SHALL appear on the left and the back-to-top button SHALL appear on the right

#### Scenario: Mobile layout stacks centered

- **WHEN** the footer is rendered on a viewport narrower than 640px
- **THEN** copyright and back-to-top SHALL stack vertically, centered

### Requirement: Footer background matches page background

The system SHALL use the same background color as the page so the footer transitions seamlessly from the final CTA section.

#### Scenario: Footer uses page background

- **WHEN** the footer is rendered
- **THEN** it SHALL use the page-level background color (`bg-bg` or equivalent) rather than an alternative surface color

### Requirement: No content changes to footer

The system SHALL preserve all existing footer content, links, and text exactly as-is.

#### Scenario: All existing links are preserved

- **WHEN** the footer is rendered after the polish changes
- **THEN** all existing links (Documentation, CLI Reference, MCP Integration, Glossary, Research, Skills, GitHub) SHALL be present with their original href values

#### Scenario: All existing text is preserved

- **WHEN** the footer is rendered after the polish changes
- **THEN** all text content (brand description, column headings, copyright, back-to-top) SHALL be preserved verbatim
