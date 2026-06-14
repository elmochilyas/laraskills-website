import Card from "@/components/Card";

export const metadata = {
  title: "Glossary — Laraskills",
  description:
    "Key terms and concepts used in the Laraskills engineering knowledge system.",
};

const terms = [
  {
    term: "Operating Layer",
    definition:
      "The top-level integration layer that connects AI coding agents to Laravel engineering knowledge. It defines how agents discover, load, and apply skills, rules, and context during development sessions.",
  },
  {
    term: "Intelligence Layer",
    definition:
      "The structured body of curated Laravel engineering knowledge, including knowledge units, rules, skill workflows, and decision trees. This is the content that Laraskills installs and makes available to AI agents.",
  },
  {
    term: "Retrieval Layer",
    definition:
      "The deterministic search and retrieval system that finds the most relevant knowledge units, rules, and skills for a given task description. Runs entirely locally with no external API calls.",
  },
  {
    term: "MCP",
    definition:
      "Model Context Protocol — an open protocol that allows AI coding agents to communicate with tools and data sources. Laraskills implements a read-only MCP server for deterministic local knowledge retrieval.",
  },
  {
    term: "Knowledge Unit",
    definition:
      "A self-contained piece of Laravel engineering knowledge with a canonical ID, content body, metadata, prerequisites, and related topics. Knowledge units are the atomic building blocks of the intelligence layer.",
  },
  {
    term: "Routing Map",
    definition:
      "A graph structure that defines relationships between knowledge units — including prerequisites and related topics. The routing map enables contextual navigation through the intelligence layer.",
  },
  {
    term: "Skill Workflow",
    definition:
      "A structured, repeatable capability that bundles knowledge units, rules, and retrieval workflows. Skill workflows give AI agents the context they need to perform specific Laravel development tasks.",
  },
  {
    term: "Required-Context Mode",
    definition:
      "A retrieval mode where the system enforces that all prerequisite knowledge units are included in the context bundle before the requested topic, ensuring the AI agent has complete background context.",
  },
  {
    term: "Deterministic Retrieval",
    definition:
      "A retrieval approach where the same input always produces the same output. Unlike AI-powered semantic search, deterministic retrieval uses explicit graph traversal and rule-based matching for reproducible results.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Glossary
      </h1>
      <p className="mt-3 text-lg text-text-muted leading-relaxed max-w-2xl">
        Key terms and concepts used throughout the Laraskills documentation and
        engineering knowledge system.
      </p>

      <div className="mt-10 grid gap-4 max-w-2xl">
        {terms.map((t) => (
          <Card key={t.term}>
            <h2 className="text-sm font-semibold text-brand">
              {t.term}
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              {t.definition}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
