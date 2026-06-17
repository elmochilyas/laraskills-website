import McpToolCard from "@/components/McpToolCard";
import Card from "@/components/Card";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Support",
  description:
    "Laraskills provides a read-only MCP server for deterministic local retrieval of Laravel engineering knowledge — no external API calls, no data leaves your machine.",
  openGraph: {
    title: "MCP Support — Laraskills",
    description:
      "Laraskills provides a read-only MCP server for deterministic local retrieval of Laravel engineering knowledge — no external API calls, no data leaves your machine.",
  },
  twitter: {
    title: "MCP Support — Laraskills",
    description:
      "Laraskills provides a read-only MCP server for deterministic local retrieval of Laravel engineering knowledge — no external API calls, no data leaves your machine.",
  },
};

const tools = [
  {
    name: "retrieve_context_bundle",
    description:
      "Return a context bundle for a Laravel engineering task. Accepts a task description and optional parameters for depth, budget, and domain filtering.",
  },
  {
    name: "search_ecc",
    description:
      "Search the knowledge unit catalog. Returns ranked results with scoring signals and source paths.",
  },
  {
    name: "get_knowledge_unit",
    description:
      "Inspect a single knowledge unit by ID. Shows metadata, content summary, and artifact references.",
  },
  {
    name: "get_graph_context",
    description:
      "Return prerequisites and related topics for a knowledge unit. Supports configurable depth and count limits.",
  },
  {
    name: "validate_ecc",
    description:
      "Validate the structural integrity of the intelligence layer. Returns KU count, edge counts, and cycle information.",
  },
];

export default function McpPage() {
  return (
    <>
      <div className="hero-shell">
        <PageContainer>
          <div className="max-w-2xl">
            <div className="section-eyebrow">Integration</div>
            <h1 className="hero-reveal text-4xl font-bold tracking-tight text-text sm:text-5xl font-display">
              MCP Support
            </h1>
            <p className="hero-reveal hero-delay-1 mt-4 text-lg text-text-muted leading-relaxed max-w-xl">
              Laraskills implements a read-only Model Context Protocol (MCP)
              server, giving AI coding agents deterministic, local access to
              Laravel engineering knowledge.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <section className="mb-16">
          <h2 className="section-title">Read-only by design</h2>
          <p className="section-lead mb-8">
            Every MCP tool is read-only. They query the locally installed
            intelligence layer and never modify files, configuration, or
            system state. This makes the integration safe for any AI coding
            agent or editor.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <h3 className="text-sm font-semibold text-accent">
                Read-only principle
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                All tools query knowledge only. No writes, no mutations, no
                side effects. Your project stays untouched.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-accent">
                Deterministic local retrieval
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Retrieval runs entirely on your machine using the installed
                knowledge base. No external API calls, no data leaves your
                environment, and results are reproducible.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">MCP Tools</h2>
          <p className="section-lead mb-8">
            Five tools expose the full knowledge retrieval pipeline, from
            context assembly to graph exploration to integrity validation.
          </p>
          <div className="grid gap-4">
            {tools.map((tool) => (
              <McpToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">Get started with MCP</h2>
          <p className="section-lead mb-8">
            Configure Laraskills MCP in your AI coding agent or editor in
            minutes. The server connects to your local knowledge base and is
            ready to use immediately after installation.
          </p>
          <Button href="/docs/mcp" variant="primary" size="lg">
            MCP setup guide &rarr;
          </Button>
        </section>
      </PageContainer>
    </>
  );
}
