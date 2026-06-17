import Link from "next/link";
import CliCommandCard from "@/components/CliCommandCard";
import Card from "@/components/Card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Get started with Laraskills in under a minute. Install, verify, and connect to your AI coding agent.",
  openGraph: {
    title: "Getting Started — Laraskills",
    description:
      "Get started with Laraskills in under a minute. Install, verify, and connect to your AI coding agent.",
  },
  twitter: {
    title: "Getting Started — Laraskills",
    description:
      "Get started with Laraskills in under a minute. Install, verify, and connect to your AI coding agent.",
  },
};

export default function GettingStartedPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Getting Started
      </h1>

      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        Install Laraskills and start using it with your AI coding agent in
        under a minute.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Install Laraskills
      </h2>
      <div className="mt-4 max-w-xl">
        <CliCommandCard
          command="npm install -g laraskills"
          label="Install"
          index={0}
          isActive={false}
          onHover={() => {}}
        />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Quick verification
      </h2>
      <div className="mt-4 max-w-xl">
        <CliCommandCard
          command="laraskills doctor"
          label="Verify"
          index={0}
          isActive={false}
          onHover={() => {}}
        />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Recommended next steps
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Link href="/docs/installation" className="group block">
          <Card className="transition-colors hover:border-text-muted">
            <h3 className="text-sm font-semibold text-text group-hover:text-brand transition-colors">
              Installation Guide
            </h3>
            <p className="mt-1 text-xs text-text-muted">
              Detailed install options, updates, and troubleshooting.
            </p>
          </Card>
        </Link>
        <Link href="/docs/cli" className="group block">
          <Card className="transition-colors hover:border-text-muted">
            <h3 className="text-sm font-semibold text-text group-hover:text-brand transition-colors">
              CLI Reference
            </h3>
            <p className="mt-1 text-xs text-text-muted">
              All available CLI commands and their usage.
            </p>
          </Card>
        </Link>
        <Link href="/docs/mcp" className="group block">
          <Card className="transition-colors hover:border-text-muted">
            <h3 className="text-sm font-semibold text-text group-hover:text-brand transition-colors">
              MCP Support
            </h3>
            <p className="mt-1 text-xs text-text-muted">
              Set up Model Context Protocol for your AI agent.
            </p>
          </Card>
        </Link>
        <Link href="/docs/opencode-setup" className="group block">
          <Card className="transition-colors hover:border-text-muted">
            <h3 className="text-sm font-semibold text-text group-hover:text-brand transition-colors">
              OpenCode Setup
            </h3>
            <p className="mt-1 text-xs text-text-muted">
              Configure Laraskills with OpenCode.
            </p>
          </Card>
        </Link>
      </div>
    </>
  );
}
