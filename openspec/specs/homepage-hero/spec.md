# Homepage Hero — Capability Specification

## Purpose

The homepage hero section presents the Laraskills value proposition immediately to visitors using foundation components, with a two-column responsive layout.

## Requirements

### Requirement: Hero section presents value proposition
The system SHALL provide a hero section pattern that immediately communicates the product value proposition by answering: what Laraskills is, who it is for, why Laravel developers should care, and how to get started.

#### Scenario: Hero answers four key questions
- **WHEN** the hero section is rendered
- **THEN** the content SHALL collectively answer what Laraskills is, who it is for, why Laravel developers should care, and how to start using it

### Requirement: Hero section reuses foundation components
The hero section SHALL be built using existing foundation components (Button, Card, Section, PageContainer) without introducing new standalone HTML layouts.

#### Scenario: Hero uses Section as top-level wrapper
- **WHEN** the hero is rendered
- **THEN** it SHALL use the `Section` component as the outer wrapper

#### Scenario: Hero uses PageContainer for content width
- **WHEN** the hero is rendered
- **THEN** its content SHALL be wrapped in `PageContainer` for consistent max-width and padding

#### Scenario: Hero uses Button for CTAs
- **WHEN** call-to-action links are rendered in the hero
- **THEN** they SHALL use the `Button` component

#### Scenario: Hero uses Card for terminal display
- **WHEN** a terminal/command display is rendered in the hero
- **THEN** it SHALL use the `Card` component as the container

### Requirement: Hero supports two-column responsive layout
The hero section SHALL support a two-column layout on desktop (text/CTAs left, media/terminal right) and a single stacked column on mobile.

#### Scenario: Desktop uses grid layout
- **WHEN** the viewport is at least 1024px wide
- **THEN** the hero SHALL arrange content in two side-by-side columns

#### Scenario: Mobile stacks content vertically
- **WHEN** the viewport is narrower than 1024px
- **THEN** the hero SHALL stack content vertically, text above terminal card
