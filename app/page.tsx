"use client";

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
import { siteConfig } from "@/lib/site-config";

export default function Home() {
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

  const cliCommands = [
    { command: "npm install --save-dev laraskills", label: "Install Laraskills" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Laraskills",
            url: siteConfig.url,
            description: siteConfig.description,
          }),
        }}
      />
      {/* Hero Section */}
      <section className="section-hero relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center py-8 md:py-10 lg:py-14">
        {/* Background effects */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] opacity-25"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)",
            }}
          />
          {/* Knowledge graph floating dots */}
          {[
            [15, 20], [45, 35], [70, 15], [85, 45], [30, 70],
            [60, 80], [10, 55], [90, 75], [50, 10], [75, 55],
            [25, 85], [55, 45], [80, 30], [40, 60], [95, 15],
          ].map(([left, top], i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-brand/20"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float-dot ${6 + (i % 3) * 2}s ease-in-out infinite`,
                animationDelay: `${(i % 5) * 0.7}s`,
              }}
            />
          ))}
        </div>

        <PageContainer>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 items-center">
            {/* Left column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.04] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Laraskills
              </span>
              <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl">
                Laravel engineering context for{" "}
                <span className="text-brand">AI coding agents</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
                Laraskills equips OpenCode, Claude Code, Cursor, Codex, Copilot,
                and other coding agents with Laravel-specific skills, rules,
                retrieval workflows, and MCP support so they can work with deeper
                context and fewer guesses.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  href="https://github.com/elmochilyas/laraskills"
                  className="shadow-lg shadow-brand/25 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-brand/35"
                >
                  Install LaraSkills
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="https://github.com/elmochilyas/laraskills"
                  className="transition-all hover:scale-[1.03]"
                >
                  View GitHub
                </Button>
              </div>
              {/* Proof badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-green-400/30">
                  <svg className="h-3.5 w-3.5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  202 tests passed
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-brand/30">
                  <svg className="h-3.5 w-3.5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  2,321 knowledge units
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-surface-card/80 px-3 py-1.5 text-xs text-text-muted transition-all duration-200 hover:border-blue-400/30">
                  <svg className="h-3.5 w-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  MCP ready
                </span>
              </div>
            </div>

            {/* Right column - terminal card */}
            <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                <div
                  aria-hidden
                  className="absolute -inset-5 rounded-2xl opacity-25 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)",
                  }}
                />
                <div className="relative rounded-xl border border-brand/15 bg-surface-card shadow-2xl shadow-brand/10 overflow-hidden glow-red-subtle">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between border-b border-border/80 px-4 py-2.5 bg-surface-alt/50">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] font-medium text-text-muted/60 select-none">
                      bash
                    </span>
                    <div className="w-12" />
                  </div>
                  {/* Terminal body */}
                  <div className="p-4 font-mono text-sm leading-relaxed space-y-2">
                    <div className="flex items-start gap-2.5">
                      <span className="text-green-400/70 shrink-0 select-none">$</span>
                      <span className="text-text-muted">npm install --save-dev laraskills</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-green-400/70 shrink-0 select-none">$</span>
                      <span>
                        <span className="text-text-muted">laraskills retrieve </span>
                        <span className="text-orange-300/90">&quot;Optimize N+1 query&quot;</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-green-400 shrink-0 select-none">✓</span>
                      <span className="text-green-400/90">Found Laravel-specific context</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-green-400 shrink-0 select-none">✓</span>
                      <span className="text-green-400/90">Context ready for your AI agent</span>
                    </div>
                    <div className="flex items-center gap-2.5 pt-0.5">
                      <span className="text-green-400/70 shrink-0 select-none">$</span>
                      <span className="inline-block h-4 w-2 bg-text-muted/60 animate-[blink_1s_step-end_infinite]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

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
      <Section variant="elevated">
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
      <Section variant="elevated">
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
              <div className="card-base flex flex-col items-center p-6 text-center group">
                <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105">9</span>
                <span className="mt-1.5 text-sm text-text-muted">Isolated OpenCode runs</span>
              </div>
              <div className="card-base flex flex-col items-center p-6 text-center group">
                <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105">3</span>
                <span className="mt-1.5 text-sm text-text-muted">Laravel implementation scenarios</span>
              </div>
              <div className="card-base flex flex-col items-center p-6 text-center group">
                <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105">100%</span>
                <span className="mt-1.5 text-sm text-text-muted">Test &amp; Pint pass rate</span>
              </div>
              <div className="card-base flex flex-col items-center p-6 text-center group">
                <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105">2/3</span>
                <span className="mt-1.5 text-sm text-text-muted">Required-context mode won</span>
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
      <Section variant="elevated">
        <PageContainer>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to ship better Laravel code?
            </h2>
            <p className="mt-2 text-text-muted">
              Install Laraskills and give your coding agent Laravel-specific context in seconds.
            </p>

            <Card featured className="mt-8 text-left">
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
                  <span className="text-green-400">$</span> npm install --save-dev laraskills
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
