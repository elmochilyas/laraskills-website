# Homepage — Capability Specification

## Modified Requirements

### Requirement: All sections reuse existing layout components

The system SHALL wrap all content sections in the existing `Section` and `PageContainer` components for consistent layout.

#### Scenario: Each content section uses Section as wrapper
- **WHEN** any content section on the homepage is rendered
- **WHEN** any proof section (supported tools, research, final CTA) is rendered
- **THEN** it SHALL use the `Section` component as the outer wrapper with consistent vertical padding

#### Scenario: Each content section uses PageContainer for content width
- **WHEN** any content section on the homepage is rendered
- **WHEN** any proof section (supported tools, research, final CTA) is rendered
- **THEN** its content SHALL be wrapped in `PageContainer` for consistent max-width and padding
