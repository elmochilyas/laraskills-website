import Link from "next/link";
import Card from "@/components/Card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Laraskills integrates with AI coding agents, IDEs, and editors through MCP and CLI.",
  openGraph: {
    title: "Integrations — Laraskills",
    description:
      "Laraskills integrates with AI coding agents, IDEs, and editors through MCP and CLI.",
  },
  twitter: {
    title: "Integrations — Laraskills",
    description:
      "Laraskills integrates with AI coding agents, IDEs, and editors through MCP and CLI.",
  },
};

const categories = [
  {
    title: "Agent CLIs",
    tools: ["OpenCode", "Claude Code", "GitHub Copilot CLI"],
    description:
      "Use Laraskills directly from your terminal through CLI commands or MCP integration.",
  },
  {
    title: "AI IDEs & Editors",
    tools: [
      "Cursor",
      "Windsurf",
      "VS Code (Copilot)",
      "JetBrains AI",
    ],
    description:
      "Connect Laraskills to AI-powered IDEs via MCP for context-aware Laravel development.",
  },
  {
    title: "AI Assistants",
    tools: ["Claude", "ChatGPT", "GitHub Copilot Chat"],
    description:
      "Reference Laraskills knowledge through your preferred AI assistant.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Integrations
      </h1>

      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        Laraskills works with a wide range of AI coding agents, IDEs, and
        editors. Most integrations use the MCP protocol for seamless
        access to Laravel engineering knowledge.
      </p>

      <div className="mt-10 grid gap-6">
        {categories.map((cat) => (
          <Card key={cat.title}>
            <h2 className="text-base font-semibold text-text">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              {cat.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-muted leading-relaxed">
        See the{" "}
        <Link href="/" className="text-brand hover:underline">
          homepage
        </Link>{" "}
        for the full list of supported tools and integrations.
      </p>
    </>
  );
}
