import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";

const retrievalSteps = [
  {
    title: "Route the task",
    description: "Identify the Laravel domains and decisions involved.",
  },
  {
    title: "Load the right guidance",
    description: "Select focused skills, rules, examples, and checklists.",
  },
  {
    title: "Resolve dependencies",
    description: "Include prerequisites and related framework constraints.",
  },
  {
    title: "Return a bounded packet",
    description: "Give the agent useful context without flooding its window.",
  },
];

const outputChecks = [
  "Laravel conventions are explicit",
  "Security decisions are considered",
  "Less prompting and fewer guesses",
];

function ArrowConnector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
      <div className="relative h-10 w-px bg-gradient-to-b from-brand/10 via-brand/45 to-brand/10 lg:h-px lg:w-full lg:bg-gradient-to-r">
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-brand/60 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:-rotate-45" />
      </div>
    </div>
  );
}

function StepLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="mb-3 flex min-w-0 items-center gap-3">
      <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand">
        {number}
      </span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
        {label}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      variant="alt"
      className="min-w-0 scroll-mt-14 overflow-hidden !py-10 md:!py-10 xl:!py-12 2xl:!py-16 [@media(max-height:800px)]:!py-8"
    >
      <PageContainer>
        <div className="grid min-w-0 items-end gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.7fr)]">
          <div className="min-w-0">
            <span className="section-eyebrow">How it works</span>
            <h2 className="max-w-3xl break-words font-display text-[clamp(1.875rem,3vw,2.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-text [@media(max-height:800px)]:text-[2.125rem]">
              Your agent writes the code.
              <span className="block text-text-muted">Laraskills supplies the Laravel judgment.</span>
            </h2>
          </div>

          <p className="min-w-0 max-w-xl break-words text-sm leading-6 text-text-muted lg:justify-self-end">
            Laraskills turns a plain-language task into a compact, relevant context packet
            before generation starts, so your coding agent works from framework-specific
            guidance instead of broad memory.
          </p>
        </div>

        <div
          data-workflow-diagram
          className="relative mt-8 w-full min-w-0 max-w-full overflow-hidden rounded-[24px] border border-border bg-bg-card shadow-xl [@media(max-height:800px)]:mt-5"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_top,rgba(230,57,70,0.09),transparent_68%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:40px_40px]"
          />

          <div className="relative grid min-w-0 gap-0 p-4 sm:p-5 lg:grid-cols-[minmax(0,0.9fr)_48px_minmax(0,1.2fr)_48px_minmax(0,0.9fr)]">
            <article className="flex min-w-0 flex-col">
              <StepLabel number="01" label="Request" />

              <div className="flex min-w-0 flex-col rounded-2xl border border-border bg-bg/70 p-4 lg:my-auto">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-subtle text-brand">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 9h8m-8 4h5m8-1a9 9 0 1 1-3.5-7.13L21 4v3.5"
                        />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.13em] text-text-muted">
                      Developer intent
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-dim">task.md</span>
                </div>

                <blockquote className="break-words font-display text-base font-medium leading-6 text-text">
                  “Build a secure profile update flow with authorization and validation.”
                </blockquote>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {["Plain-language task", "Any coding agent"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-border/80 bg-bg-card px-2.5 py-1.5 text-center text-[10px] font-medium leading-4 text-text-muted"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <ArrowConnector />

            <article className="flex min-w-0 flex-col">
              <StepLabel number="02" label="Retrieve" />

              <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-brand/30 bg-[linear-gradient(145deg,rgba(230,57,70,0.08),rgba(15,15,21,0.96)_36%,rgba(45,212,191,0.045))] p-4 shadow-glow-brand">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-brand/80 to-transparent"
                />

                <div className="flex min-w-0 flex-col items-start justify-between gap-3 sm:flex-row">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/20">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.9"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v3m0 12v3M3 12h3m12 0h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12M7.76 16.24l-2.12 2.12"
                        />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-text">
                        Context packet
                      </h3>
                      <p className="mt-0.5 text-xs text-text-muted">
                        Assembled for this task, not every task.
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent-subtle px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ready
                  </span>
                </div>

                <ol className="mt-4 grid gap-2 lg:grid-cols-2">
                  {retrievalSteps.map((step, index) => (
                    <li
                      key={step.title}
                      className="grid min-w-0 grid-cols-[24px_1fr] gap-2.5 rounded-xl border border-white/[0.055] bg-black/20 p-2.5"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-brand/20 bg-brand-subtle font-mono text-[9px] font-bold text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold leading-5 text-text">{step.title}</p>
                        <p className="mt-0.5 text-[11px] leading-4 text-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/70 pt-3">
                  {["Skills", "Rules", "Examples", "Dependencies"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border-light/70 bg-bg/60 px-2 py-1 font-mono text-[9px] font-medium text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <ArrowConnector />

            <article className="flex min-w-0 flex-col">
              <StepLabel number="03" label="Build" />

              <div className="flex min-w-0 flex-col rounded-2xl border border-border bg-bg/70 p-4 lg:my-auto">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-subtle text-accent">
                      <CheckIcon />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.13em] text-text-muted">
                      Agent output
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-accent">context loaded</span>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-border bg-black/45">
                  <div className="flex items-center justify-between border-b border-border px-3 py-2">
                    <span className="font-mono text-[10px] text-text-dim">
                      ProfileController.php
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <pre className="max-w-full overflow-hidden whitespace-pre-wrap break-all p-2.5 font-mono text-[10px] leading-4 text-text-muted">
                    <code>
                      <span className="text-purple-300">public function</span>{" "}
                      <span className="text-blue-300">update</span>
                      {"(\n  "}
                      <span className="text-yellow-200">UpdateProfileRequest</span>
                      {" $request\n): "}
                      <span className="text-yellow-200">RedirectResponse</span>
                      {"\n"}
                    </code>
                  </pre>
                </div>

                <ul className="mt-4 space-y-2">
                  {outputChecks.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[11px] leading-4 text-text-muted">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <div
            data-workflow-summary
            className="relative grid gap-px border-t border-border bg-border sm:grid-cols-3"
          >
            {[
              ["Input", "One clear engineering task"],
              ["Context", "The smallest useful Laravel guidance"],
              ["Result", "Code grounded in framework decisions"],
            ].map(([label, value]) => (
              <div key={label} className="bg-bg-card px-5 py-2 sm:px-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand">
                  {label}
                </p>
                <p className="mt-1 text-[13px] text-text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
