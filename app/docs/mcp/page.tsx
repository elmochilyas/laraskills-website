import McpToolCard from "@/components/McpToolCard";
import Card from "@/components/Card";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Support",
  description:
    "Laraskills provides read-only Model Context Protocol (MCP) support for deterministic local retrieval of Laravel engineering knowledge.",
  openGraph: {
    title: "MCP Support — Laraskills",
    description:
      "Laraskills provides read-only Model Context Protocol (MCP) support for deterministic local retrieval of Laravel engineering knowledge.",
  },
  twitter: {
    title: "MCP Support — Laraskills",
    description:
      "Laraskills provides read-only Model Context Protocol (MCP) support for deterministic local retrieval of Laravel engineering knowledge.",
  },
};

type ToolData = {
  name: string;
  description: string;
  inputs: string[];
  outputs: string[];
  badges: string[];
};

const tools: ToolData[] = [
  {
    name: "retrieve_context_bundle",
    description:
      "Return the smallest useful LaraSkills context bundle for a Laravel engineering task.",
    inputs: ["task: string", "scope?: compact | standard | deep"],
    outputs: ["context_bundle: object"],
    badges: ["READ-ONLY", "LOCAL", "DETERMINISTIC"],
  },
  {
    name: "search_ecc",
    description:
      "Search the LaraSkills knowledge unit catalog with ranked deterministic results.",
    inputs: ["query: string", "limit?: number"],
    outputs: ["ranked_units: array"],
    badges: ["READ-ONLY", "LOCAL", "DETERMINISTIC"],
  },
  {
    name: "get_knowledge_unit",
    description:
      "Inspect a single canonical knowledge unit by ID with bounded content.",
    inputs: ["unit_id: string"],
    outputs: ["knowledge_unit: object"],
    badges: ["READ-ONLY", "LOCAL"],
  },
  {
    name: "get_graph_context",
    description:
      "Return prerequisites, dependencies, and related topics for a knowledge unit.",
    inputs: ["unit_id: string", "depth?: number"],
    outputs: ["graph_context: object"],
    badges: ["READ-ONLY", "LOCAL"],
  },
  {
    name: "validate_ecc",
    description:
      "Validate the structural integrity of the LaraSkills intelligence layer.",
    inputs: ["none"],
    outputs: ["validation_report: object"],
    badges: ["READ-ONLY", "LOCAL", "DETERMINISTIC"],
  },
];

export default function McpPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        MCP Support
      </h1>

      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        Laraskills provides <strong className="text-text">read-only</strong>{" "}
        Model Context Protocol (MCP) support, allowing AI coding agents to
        retrieve Laravel engineering knowledge deterministically from your
        local environment.
      </p>

      <Card className="mt-8">
        <h2 className="text-base font-semibold text-text">
          Read-only principle
        </h2>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          All MCP tools are read-only. They query the locally installed
          intelligence layer and never modify files, configuration, or
          system state. This keeps the integration safe for any AI coding
          agent or editor.
        </p>
      </Card>

      <Card className="mt-4">
        <h2 className="text-base font-semibold text-text">
          Deterministic local retrieval
        </h2>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          Retrieval runs entirely on your machine using the installed
          knowledge base. No external API calls, no data leaves your
          environment, and results are reproducible for the same input.
        </p>
      </Card>

      <h2 className="mt-10 text-xl font-semibold text-text">
        MCP Tools
      </h2>
      <div className="mt-4 grid gap-4">
        {tools.map((tool) => (
          <McpToolCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            inputs={tool.inputs}
            outputs={tool.outputs}
            badges={tool.badges}
          />
        ))}
      </div>

      <Card className="mt-8">
        <h2 className="text-base font-semibold text-text">
          Connection & setup
        </h2>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          The Laraskills MCP server connects to your local knowledge base
          immediately after installation. It operates in <strong className="text-text">read-only</strong> mode
          over <strong className="text-text">local transport</strong>, exposing all 5 tools.
          No network calls, no data leaves your machine, and no configuration
          is needed beyond adding the MCP server entry to your AI coding agent.
        </p>
      </Card>
    </>
  );
}
