import McpToolCard from "@/components/McpToolCard";
import Card from "@/components/Card";

export const metadata = {
  title: "MCP Support — Laraskills",
  description:
    "Laraskills provides read-only Model Context Protocol (MCP) support for deterministic local retrieval of Laravel engineering knowledge.",
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
          />
        ))}
      </div>
    </>
  );
}
