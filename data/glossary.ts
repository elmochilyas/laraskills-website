export type TermCategory = "Architecture" | "Retrieval" | "Agent Workflow" | "Validation";

export type GlossaryTerm = {
  term: string;
  definition: string;
  whyItMatters: string;
  category: TermCategory;
  relatedLinks?: { label: string; href: string }[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Operating Layer",
    definition:
      "The top-level integration layer that connects AI coding agents to Laravel engineering knowledge. It defines how agents discover, load, and apply skills, rules, and context during development sessions.",
    whyItMatters:
      "The operating layer is what makes Laraskills plug-and-play for any AI coding agent. Without it, each agent would need custom integration code.",
    category: "Architecture",
    relatedLinks: [
      { label: "How Laraskills works", href: "/#how-it-works" },
    ],
  },
  {
    term: "Intelligence Layer",
    definition:
      "The structured body of curated Laravel engineering knowledge, including knowledge units, rules, skill workflows, and decision trees. This is the content that Laraskills installs and makes available to AI agents.",
    whyItMatters:
      "The intelligence layer is the actual Laravel expertise your AI agent draws from. Its quality determines how helpful the agent will be.",
    category: "Architecture",
  },
  {
    term: "Retrieval Layer",
    definition:
      "The deterministic search and retrieval system that finds the most relevant knowledge units, rules, and skills for a given task description. Runs entirely locally with no external API calls.",
    whyItMatters:
      "The retrieval layer ensures your AI agent gets the right context every time, without sending data to external services.",
    category: "Retrieval",
    relatedLinks: [
      { label: "MCP Support docs", href: "/docs/mcp" },
    ],
  },
  {
    term: "MCP",
    definition:
      "Model Context Protocol — an open protocol that allows AI coding agents to communicate with tools and data sources. Laraskills implements a read-only MCP server for deterministic local knowledge retrieval.",
    whyItMatters:
      "MCP is the industry standard for AI-tool communication. Laraskills implementing MCP means it works with any MCP-compatible agent or editor.",
    category: "Retrieval",
    relatedLinks: [
      { label: "MCP landing page", href: "/mcp" },
      { label: "MCP docs", href: "/docs/mcp" },
    ],
  },
  {
    term: "Knowledge Unit",
    definition:
      "A self-contained piece of Laravel engineering knowledge with a canonical ID, content body, metadata, prerequisites, and related topics. Knowledge units are the atomic building blocks of the intelligence layer.",
    whyItMatters:
      "Knowledge units are how Laraskills organizes expertise. Each unit is a focused, reusable piece of knowledge that can be independently retrieved and composed.",
    category: "Architecture",
  },
  {
    term: "Routing Map",
    definition:
      "A graph structure that defines relationships between knowledge units — including prerequisites and related topics. The routing map enables contextual navigation through the intelligence layer.",
    whyItMatters:
      "The routing map lets Laraskills understand what knowledge is related and what prerequisites are needed, enabling intelligent context assembly.",
    category: "Architecture",
  },
  {
    term: "Skill Workflow",
    definition:
      "A structured, repeatable capability that bundles knowledge units, rules, and retrieval workflows. Skill workflows give AI agents the context they need to perform specific Laravel development tasks.",
    whyItMatters:
      "Skill workflows transform raw knowledge into actionable capabilities. Instead of a knowledge dump, the agent gets a structured workflow for real tasks like building a controller or writing tests.",
    category: "Agent Workflow",
    relatedLinks: [
      { label: "Skills overview", href: "/skills" },
      { label: "Skills docs", href: "/docs/skills" },
    ],
  },
  {
    term: "Required-Context Mode",
    definition:
      "A retrieval mode where the system enforces that all prerequisite knowledge units are included in the context bundle before the requested topic, ensuring the AI agent has complete background context.",
    whyItMatters:
      "Required-context mode prevents knowledge gaps. Without it, an agent might try to implement a feature without understanding the foundational concepts it depends on.",
    category: "Retrieval",
  },
  {
    term: "Deterministic Retrieval",
    definition:
      "A retrieval approach where the same input always produces the same output. Unlike AI-powered semantic search, deterministic retrieval uses explicit graph traversal and rule-based matching for reproducible results.",
    whyItMatters:
      "Deterministic retrieval is Laraskills key differentiator. Developers and agents get consistent, auditable results — no black-box ranking, no hallucinations from the retrieval step itself.",
    category: "Retrieval",
    relatedLinks: [
      { label: "MCP docs", href: "/docs/mcp" },
    ],
  },
];

export const termCategories: TermCategory[] = [
  "Architecture",
  "Retrieval",
  "Agent Workflow",
  "Validation",
];
