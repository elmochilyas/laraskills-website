"use client";

import { useState } from "react";
import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import MetricsCard from "@/components/MetricsCard";
import ComparisonTable from "@/components/ComparisonTable";
import ArchitectureLayerCard from "@/components/ArchitectureLayerCard";
import WorkflowStep from "@/components/WorkflowStep";
import WorkflowArrow from "@/components/WorkflowArrow";
import CliCommandCard from "@/components/CliCommandCard";
import McpToolCard from "@/components/McpToolCard";
import IntegrationCloudItem from "@/components/IntegrationCloudItem";
import IntegrationGroupCard from "@/components/IntegrationGroupCard";
import metricsData from "@/data/homepage-metrics.json";
import supportedTools from "@/data/supported-tools.json";

export default function Home() {
  /* TODO: verify `npx laraskills@beta` is the final npm package name before production launch */
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText("npx laraskills@beta install");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const comparisonBefore = [
    { label: "Guesses Laravel conventions" },
    { label: "Relies on broad framework memory" },
    { label: "Misses architecture decisions" },
    { label: "Needs long manual prompts" },
  ];

  const comparisonAfter = [
    { label: "Loads Laravel-specific guidance" },
    { label: "Uses focused retrieval" },
    { label: "Follows skills, rules, and checklists" },
    { label: "Works with MCP-compatible tools" },
  ];

  const architectureLayers = [
    {
      number: 1,
      title: "Operating layer",
      items: [
        "Skills, rules, agents",
        "Command references",
        "Harness configs",
      ],
    },
    {
      number: 2,
      title: "Intelligence layer",
      items: [
        "Domains, knowledge units",
        "Indexes, routing maps",
        "Dependency graph",
      ],
    },
    {
      number: 3,
      title: "Retrieval layer",
      items: [
        "CLI retrieval, search",
        "Inspect, graph context",
        "MCP tools",
      ],
    },
  ];

  const workflowSteps = [
    {
      number: 1,
      label: "Developer task",
      description: "Describe what you need in natural language",
    },
    {
      number: 2,
      label: "Domain routing",
      description: "Route to the relevant engineering domain",
    },
    {
      number: 3,
      label: "Knowledge retrieval",
      description: "Fetch Laravel-specific context",
    },
    {
      number: 4,
      label: "Skill workflow",
      description: "Apply guided skill procedures",
    },
    {
      number: 5,
      label: "Agent implementation",
      description: "Agent acts with full context",
    },
    {
      number: 6,
      label: "Validation checklist",
      description: "Verify against rules and patterns",
    },
  ];

  /* TODO: verify `npx laraskills` (and @beta tag) is the final npm package name and CLI entry before production launch */
  const cliCommands = [
    { command: "npx laraskills@beta install", label: "Install Laraskills" },
    { command: 'npx laraskills retrieve "Optimize an N+1 query" --mode compact', label: "Retrieve context" },
    { command: 'npx laraskills search "Policies versus Gates"', label: "Search knowledge" },
    { command: "npx laraskills get security-identity-engineering/authentication/sanctum-spa-authentication", label: "Inspect knowledge unit" },
    { command: "npx laraskills validate", label: "Validate knowledge graph" },
    { command: "npx laraskills doctor", label: "System diagnostics" },
  ];

  /* TODO: verify these MCP tool names match the real Laraskills MCP server exports before production launch */
  const mcpTools = [
    { name: "retrieve_context_bundle", description: "Return the smallest useful Laraskills context bundle for a Laravel engineering task." },
    { name: "search_ecc", description: "Search the Laraskills knowledge unit catalog with ranked results." },
    { name: "get_knowledge_unit", description: "Inspect a single canonical knowledge unit by ID with bounded content." },
    { name: "get_graph_context", description: "Return prerequisites and related topics for a knowledge unit." },
    { name: "validate_ecc", description: "Validate the structural integrity of the Laraskills intelligence layer." },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)",
          }}
        />

        <PageContainer>
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 min-h-[calc(100dvh-3.5rem)] items-center py-16 md:py-24">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-brand">
                Laraskills
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Laravel engineering context for AI coding agents
              </h1>
              <p className="mt-4 max-w-lg text-base text-text-muted sm:text-lg">
                Laraskills equips OpenCode, Claude Code, Cursor, Codex, Copilot,
                and other coding agents with Laravel-specific skills, rules,
                retrieval workflows, and MCP support so they can work with deeper
                context and fewer guesses.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button size="lg" href="https://github.com/elmochilyas/laraskills">
                  Install Laraskills
                </Button>
                <Button variant="secondary" size="lg" href="https://github.com/elmochilyas/laraskills">
                  View GitHub
                </Button>
              </div>
              <p className="mt-4 text-sm text-text-muted">
                Built for Laravel developers using AI coding agents
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                    Terminal
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                </div>
                <pre className="overflow-x-auto text-sm">
                  <code className="text-text-muted">
                    <span className="text-green-400">$</span> npx laraskills@beta install
                  </code>
                </pre>
                <button
                  onClick={copyCommand}
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-text-muted hover:text-text"
                >
                  {copied ? (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </Card>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* Metrics Section */}
      <Section variant="dark">
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              By the numbers
            </h2>
            <p className="mt-2 text-text-muted">
              The Laraskills knowledge system today
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metricsData.metrics.map((metric, index) => (
              <MetricsCard
                key={index}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Comparison Section */}
      <Section>
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Generic coding agent vs Laraskills
            </h2>
            <p className="mt-2 text-text-muted">
              Why Laravel developers get better results with Laraskills
            </p>
          </div>
          <ComparisonTable
            beforeTitle="Generic coding agent"
            beforeItems={comparisonBefore}
            afterTitle="Agent with Laraskills"
            afterItems={comparisonAfter}
          />
        </PageContainer>
      </Section>

      {/* Architecture Section */}
      <Section variant="dark">
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Three-layer architecture
            </h2>
            <p className="mt-2 text-text-muted">
              How Laraskills structures its engineering knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {architectureLayers.map((layer) => (
              <ArchitectureLayerCard
                key={layer.number}
                number={layer.number}
                title={layer.title}
                items={layer.items}
              />
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Workflow Section */}
      <Section>
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Agent workflow
            </h2>
            <p className="mt-2 text-text-muted">
              How a developer task flows through Laraskills
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-0">
            {workflowSteps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center md:flex-row">
                <WorkflowStep
                  number={step.number}
                  label={step.label}
                  description={step.description}
                />
                {index < workflowSteps.length - 1 && (
                  <>
                    <WorkflowArrow />
                    <WorkflowArrow vertical />
                  </>
                )}
              </div>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* CLI Showcase Section */}
      <Section>
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              CLI at your fingertips
            </h2>
            <p className="mt-2 text-text-muted">
              Real commands to install, retrieve, search, inspect, and diagnose — all from your terminal
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {cliCommands.map((cmd, index) => (
              <CliCommandCard
                key={index}
                command={cmd.command}
                label={cmd.label}
              />
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* MCP Showcase Section */}
      <Section variant="dark">
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              MCP tools for coding agents
            </h2>
            <p className="mt-2 text-text-muted">
              Laraskills exposes read-only, deterministic, local-retrieval MCP tools for compatible coding agents
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mcpTools.map((tool, index) => (
              <McpToolCard
                key={index}
                name={tool.name}
                description={tool.description}
              />
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Supported Tools Section */}
      <Section>
        <PageContainer>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
              Integrations
            </span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Works with your Laravel AI stack
            </h2>
            <p className="mt-2 text-text-muted">
              Use Laraskills with the coding agents, editors, and assistants already in your workflow.
            </p>
          </div>

          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {supportedTools.allTools.map((tool, i) => (
              <IntegrationCloudItem key={i} name={tool.name} icon={tool.icon} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {supportedTools.groups.map((group) => (
              <IntegrationGroupCard
                key={group.id}
                title={group.title}
                description={group.description}
                tools={group.tools}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-[11px] text-text-muted/50">
            Tool names and logos are trademarks of their respective owners.
          </p>
        </PageContainer>
      </Section>

      {/* Research Section */}
      <Section variant="dark">
        <PageContainer>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Research & evidence
            </h2>
            <p className="mt-2 text-text-muted">
              In an attribution study, Laraskills was tested against baseline coding agents across multiple Laravel implementation scenarios. The results are measured and reproducible.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center">
              <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">9</span>
              <span className="mt-1 text-sm text-text-muted">Isolated OpenCode runs</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center">
              <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">3</span>
              <span className="mt-1 text-sm text-text-muted">Laravel implementation scenarios</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center">
              <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">100%</span>
              <span className="mt-1 text-sm text-text-muted">Test &amp; Pint pass rate</span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center">
              <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">2/3</span>
              <span className="mt-1 text-sm text-text-muted">Required-context mode won</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-sm text-text-muted">
              These results are from a controlled study and do not claim Laraskills always outperforms baseline agents. Performance depends on task complexity, agent choice, and configuration.
            </p>
            <Button variant="secondary" href="/research">
              Read the research
            </Button>
          </div>
        </PageContainer>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to ship better Laravel code?
            </h2>
            <p className="mt-2 text-text-muted">
              Install Laraskills and give your coding agent Laravel-specific context in seconds.
            </p>

            <Card className="mt-8 text-left">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Terminal
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
              </div>
              <pre className="overflow-x-auto text-sm">
                <code className="text-text-muted">
                  <span className="text-green-400">$</span> npx laraskills@beta install
                </code>
              </pre>
            </Card>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" href="https://github.com/elmochilyas/laraskills">
                Install Laraskills
              </Button>
              <Button variant="secondary" size="lg" href="https://github.com/elmochilyas/laraskills">
                View GitHub
              </Button>
            </div>
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
