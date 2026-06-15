# Vercel Deployment — Capability Specification

## Purpose

This capability provides the configuration, environment setup, documentation, and verification checklists needed to deploy the Laraskills website to Vercel production.

## ADDED Requirements

### Requirement: Vercel deployment configuration exists
The system SHALL include a `vercel.json` file at the project root with explicit Next.js framework configuration.

#### Scenario: Vercel detects the project correctly
- **WHEN** Vercel reads `vercel.json` during project import
- **THEN** the `framework` field SHALL be set to `"nextjs"`

#### Scenario: Build settings match project scripts
- **WHEN** Vercel runs the production build
- **THEN** the build command SHALL resolve to `next build` (Turbopack on Linux)

### Requirement: NEXT_PUBLIC_SITE_URL environment variable is documented
The system SHALL document `NEXT_PUBLIC_SITE_URL` as a required environment variable for production deployment, specifying that it MUST be set to the final production domain with protocol (e.g., `https://laraskills.com`).

#### Scenario: Env var is documented in README
- **WHEN** a developer reads the README deployment section
- **THEN** they SHALL find a description of `NEXT_PUBLIC_SITE_URL`, its purpose (canonical URL/OG metadata), and instructions to set it in Vercel project settings

#### Scenario: Local dev does not require the env var
- **WHEN** a developer runs `npm run dev` locally without `NEXT_PUBLIC_SITE_URL` set
- **THEN** development SHALL continue without error (the var is optional in dev)

### Requirement: Production metadata uses the configured site URL
The system SHALL use `NEXT_PUBLIC_SITE_URL` to set `metadataBase` in the root layout, ensuring all Open Graph URLs, canonical links, and Twitter card URLs resolve to the production domain.

#### Scenario: metadataBase is set from env var
- **WHEN** the root layout is rendered
- **THEN** `metadataBase` SHALL be set to the value of `NEXT_PUBLIC_SITE_URL`
- **AND** all relative metadata URLs SHALL resolve against this base

#### Scenario: og:url reflects production domain
- **WHEN** a social platform fetches any page
- **THEN** `og:url` SHALL be an absolute URL using the production domain from `NEXT_PUBLIC_SITE_URL`

### Requirement: Build-time validation of the env var
The system SHALL validate that `NEXT_PUBLIC_SITE_URL` is set during production builds and fail with a clear error message if missing.

#### Scenario: Production build fails without env var
- **WHEN** `npm run build` is executed without `NEXT_PUBLIC_SITE_URL` set
- **THEN** the build SHALL fail with a message indicating the variable must be set

### Requirement: README includes a deployment section
The README SHALL contain a dedicated deployment section covering local development commands, production build command, Vercel environment variable setup, and a post-deploy verification checklist.

#### Scenario: Deployment section exists
- **WHEN** a developer reads the README
- **THEN** they SHALL find a "Deploy" or "Deployment" section with:
  - Local dev: `npm run dev`
  - Local production build: `npm run build` (or `npm run build:webpack` on Windows)
  - Vercel env setup instructions (`NEXT_PUBLIC_SITE_URL`)
  - Reference to launch checklist

### Requirement: Launch checklist document exists
The system SHALL include a `launch-checklist.md` file at the project root with items to verify after production deployment.

#### Scenario: Checklist covers all critical routes
- **WHEN** the operator follows the launch checklist
- **THEN** they SHALL verify: homepage, all docs routes, `/research`, `/glossary`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and metadata/canonical URLs

#### Scenario: Checklist is actionable
- **WHEN** the operator reads a checklist item
- **THEN** each item SHALL specify what to check and what the expected outcome is

### Requirement: Build fallback for Windows is documented
The system SHALL document that `npm run build:webpack` is the local build fallback for Windows environments where Turbopack is unavailable.

#### Scenario: Windows build workaround is described
- **WHEN** a developer on Windows reads the README
- **THEN** they SHALL find a note that `npm run build:webpack` is the recommended local build command on Windows
