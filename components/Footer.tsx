"use client";

import Link from "next/link";
import { LaraSkillsLogo } from "@/components/LaraSkillsLogo";

const productLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "CLI Reference", href: "/docs/cli" },
  { label: "MCP Integration", href: "/docs/mcp" },
];

const resourceLinks = [
  { label: "Glossary", href: "/glossary" },
  { label: "Research", href: "/research" },
  { label: "Skills", href: "/docs/skills" },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/elmochilyas/laraskills", external: true },
];

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-bg-alt overflow-hidden">
      {/* Top brand glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/15 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_center_top,rgba(230,57,70,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="LaraSkills home"
              className="inline-flex transition-opacity duration-200 hover:opacity-80"
            >
              <LaraSkillsLogo className="h-8 w-auto md:h-10" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Laravel-focused AI coding-agent operating layer and engineering knowledge system.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/elmochilyas/laraskills"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-bg-card text-text-dim transition-all duration-200 hover:border-brand/20 hover:bg-brand-subtle hover:text-brand"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-dim">
              <span className="inline-block h-px w-3 bg-brand/40" />
              Product
            </h4>
            <nav className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted transition-all duration-200 hover:translate-x-0.5 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources links */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-dim">
              <span className="inline-block h-px w-3 bg-brand/40" />
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-muted transition-all duration-200 hover:translate-x-0.5 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect links */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-text-dim">
              <span className="inline-block h-px w-3 bg-brand/40" />
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted transition-all duration-200 hover:translate-x-0.5 hover:text-brand"
                >
                  {link.label}
                  <span className="ml-1 text-[10px] opacity-40">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Separator */}
        <div className="relative my-12 lg:my-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Laraskills. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-text-muted transition-all duration-200 hover:text-brand"
          >
            Back to top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
