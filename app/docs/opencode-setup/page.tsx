import CliCommandCard from "@/components/CliCommandCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenCode Setup",
  description:
    "Configure OpenCode to use Laraskills skills, rules, and MCP tools.",
  openGraph: {
    title: "OpenCode Setup — Laraskills",
    description:
      "Configure OpenCode to use Laraskills skills, rules, and MCP tools.",
  },
  twitter: {
    title: "OpenCode Setup — Laraskills",
    description:
      "Configure OpenCode to use Laraskills skills, rules, and MCP tools.",
  },
};

export default function OpenCodeSetupPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        OpenCode Setup
      </h1>

      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        OpenCode can use Laraskills as both a skill provider and an MCP
        server, giving your AI agent Laravel-specific context during
        development.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">
        How it works
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        OpenCode loads Laraskills skills from the installed knowledge base.
        When you describe a Laravel task, Laraskills retrieves the most
        relevant knowledge units, rules, and skill workflows so your AI agent
        has the right context from the start.
      </p>
      <p className="mt-4 text-sm text-text-muted leading-relaxed">
        MCP support lets agents query the intelligence layer directly using
        defined tools, without leaving the conversation.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">
        MCP configuration
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        Add the following to your OpenCode MCP configuration:
      </p>
      <div className="mt-4 max-w-xl">
        <div className="rounded-xl border border-border bg-bg p-4 sm:p-5">
          <pre className="text-sm text-text-muted whitespace-pre-wrap leading-relaxed">
{`{
  "mcpServers": {
    "laraskills": {
      "command": "npx",
      "args": ["laraskills", "mcp"]
    }
  }
}`}
          </pre>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Verify the connection
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        After configuring, restart OpenCode and check that Laraskills MCP
        tools are available in your agent session. Run the doctor command to
        confirm the installation:
      </p>
      <div className="mt-4 max-w-xl">
        <CliCommandCard
          command="laraskills doctor"
          label="Verify"
          index={0}
          isActive={false}
          onHover={() => {}}
        />
      </div>
    </>
  );
}
