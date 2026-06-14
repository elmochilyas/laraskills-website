import Link from "next/link";
import Card from "@/components/Card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to install, configure, and use Laraskills with your AI coding agent.",
  openGraph: {
    title: "Documentation — Laraskills",
    description:
      "Learn how to install, configure, and use Laraskills with your AI coding agent.",
  },
  twitter: {
    title: "Documentation — Laraskills",
    description:
      "Learn how to install, configure, and use Laraskills with your AI coding agent.",
  },
};

const sections = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    description:
      "The fastest path to use Laraskills with your AI coding agent.",
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description: "Install, update, and verify Laraskills on your system.",
  },
  {
    title: "CLI Reference",
    href: "/docs/cli",
    description:
      "Complete documentation for every Laraskills CLI command.",
  },
  {
    title: "MCP Support",
    href: "/docs/mcp",
    description:
      "How Laraskills integrates with the Model Context Protocol.",
  },
  {
    title: "OpenCode Setup",
    href: "/docs/opencode-setup",
    description:
      "Configure OpenCode to use Laraskills skills and retrieval.",
  },
  {
    title: "Integrations",
    href: "/docs/integrations",
    description:
      "Supported coding agents, editors, and AI assistants.",
  },
  {
    title: "Skills",
    href: "/docs/skills",
    description:
      "Overview of Laraskills skill workflows and categories.",
  },
];

export default function DocsIndexPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Documentation
      </h1>
      <p className="mt-3 text-lg text-text-muted leading-relaxed max-w-2xl">
        Laraskills is a Laravel-focused AI coding-agent operating layer and
        engineering knowledge system. It gives AI coding agents Laravel-specific
        skills, rules, retrieval workflows, and MCP support so they can work
        with deeper context and fewer guesses.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="group block">
            <Card className="h-full transition-colors hover:border-text-muted">
              <h2 className="text-base font-semibold text-text group-hover:text-brand transition-colors">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {s.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
