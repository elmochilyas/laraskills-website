import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";

const valueCards = [
  {
    label: "Read-only",
    description: "Queries your local knowledge base — never modifies files or system state.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Zm10-10V7a4 4 0 0 0-8 0v4h8Z" />
      </svg>
    ),
  },
  {
    label: "Local retrieval",
    description: "Everything runs on your machine — no external API calls, no data leaves your environment.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    label: "Deterministic context",
    description: "Same input always returns the same result — predictable and reproducible for your agent.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

const flowSteps = [
  "Agent request",
  "Laraskills MCP",
  "Knowledge graph",
  "Context bundle",
];

export default function McpSection() {
  return (
    <Section variant="alt">
      <PageContainer>
        <div className="mb-10 text-center">
          <span className="section-eyebrow">MCP LAYER</span>
          <h2 className="section-title">
            Local Laravel context for{" "}
            <span className="text-brand">AI coding agents</span>
          </h2>
          <p className="section-lead mx-auto">
            Laraskills gives AI coding agents a local, read-only MCP layer that
            retrieves Laravel-specific context before generating code.
          </p>
        </div>

        {/* Value cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {valueCards.map((card) => (
            <div
              key={card.label}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand/30 hover:bg-white/[0.045]"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                {card.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-text">{card.label}</h3>
                <p className="mt-1 text-xs leading-5 text-text-muted">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-bg-card px-6 py-5 md:flex-row md:gap-0">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3 md:gap-0">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-bg-alt/50 px-3 py-1.5 font-mono text-xs font-medium text-text">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {step}
              </span>
              {index < flowSteps.length - 1 && (
                <span aria-hidden="true" className="mx-2 text-text-dim md:mx-3">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Button href="/mcp" variant="primary" size="lg">
            Explore MCP docs &rarr;
          </Button>
        </div>
      </PageContainer>
    </Section>
  );
}
