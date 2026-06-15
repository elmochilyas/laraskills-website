import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";

const proofItems = [
  {
    label: "202 tests passed",
    color: "text-accent",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5 12 4 4L19 6"
      />
    ),
  },
  {
    label: "2,321 knowledge units",
    color: "text-brand",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14v12H5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8M8 11h8M8 15h5" />
      </>
    ),
  },
  {
    label: "MCP ready",
    color: "text-orange-300",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v5m0 8v5M5 12h4m6 0h4" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
];

const graphNodes = [
  [74, 48, 3],
  [181, 92, 4],
  [305, 44, 3],
  [400, 128, 4],
  [498, 70, 3],
  [550, 184, 4],
  [434, 236, 3],
  [304, 190, 5],
  [174, 230, 3],
  [64, 170, 4],
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-shell relative isolate overflow-hidden border-b border-border/50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="hero-command-grid absolute inset-0" />
        <div className="hero-ambient hero-ambient-primary absolute" />
        <div className="hero-ambient hero-ambient-secondary absolute" />

        <svg
          className="absolute right-[-5%] top-[9%] h-[72%] w-[56%] max-w-[720px] opacity-70"
          viewBox="0 0 620 280"
          fill="none"
        >
          <defs>
            <linearGradient id="hero-line-red" x1="60" y1="50" x2="550" y2="220">
              <stop stopColor="#e63946" stopOpacity="0" />
              <stop offset=".5" stopColor="#e63946" stopOpacity=".28" />
              <stop offset="1" stopColor="#fb923c" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="hero-graph-lines" stroke="url(#hero-line-red)" strokeWidth=".75">
            <path d="M74 48 181 92 305 44 400 128 498 70 550 184 434 236 304 190 174 230 64 170Z" />
            <path d="M181 92 304 190 400 128M74 48 64 170 174 230M305 44 304 190 434 236M498 70 400 128 550 184" />
          </g>
          {graphNodes.map(([cx, cy, radius], index) => (
            <g key={`${cx}-${cy}`}>
              <circle
                cx={cx}
                cy={cy}
                r={radius + 5}
                fill={index % 3 === 0 ? "#fb923c" : "#e63946"}
                opacity=".035"
              />
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill={index % 3 === 0 ? "#fb923c" : "#e63946"}
                opacity=".22"
                className="hero-graph-node"
                style={{ animationDelay: `${index * 0.45}s` }}
              />
            </g>
          ))}
        </svg>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
      </div>

      <PageContainer>
        <div className="hero-layout relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)] lg:gap-12">
          <div className="min-w-0 text-center lg:text-left">
            <div className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-brand/[0.075] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-35" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                LaraSkills
              </span>
              <span className="h-3 w-px bg-brand/25" />
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-dim">
                Context engine online
              </span>
            </div>

            <h1 className="hero-reveal hero-delay-1 mt-5 max-w-[760px] font-display text-[clamp(2.35rem,5vw,4.35rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-text">
              <span className="block">Laravel engineering</span>
              <span className="block text-text-muted">context for</span>
              <span className="mt-2 block">
                <span className="hero-title-accent relative inline-block text-brand">
                  AI coding agents
                </span>
              </span>
            </h1>

            <p className="hero-reveal hero-delay-2 mx-auto mt-5 max-w-[640px] text-[clamp(0.95rem,1.35vw,1.08rem)] leading-7 text-text-muted lg:mx-0">
              LaraSkills equips OpenCode, Claude Code, Cursor, Codex, Copilot, and
              other coding agents with Laravel-specific skills, rules, retrieval
              workflows, and MCP support so they can work with deeper context and
              fewer guesses.
            </p>

            <div className="hero-reveal hero-delay-3 mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button
                size="lg"
                href="https://github.com/elmochilyas/laraskills"
                className="group min-h-12 gap-2.5 rounded-xl bg-[linear-gradient(180deg,#f04452,#d92735)] px-6 shadow-[0_10px_30px_rgba(230,57,70,0.22),inset_0_1px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(230,57,70,0.3)]"
              >
                Install LaraSkills
                <ArrowIcon />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/elmochilyas/laraskills"
                className="group min-h-12 gap-2.5 rounded-xl border-white/[0.09] bg-white/[0.025] px-6 text-text hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.05]"
              >
                <GitHubIcon />
                View GitHub
              </Button>
            </div>

            <div className="hero-reveal hero-delay-4 mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {proofItems.map((item) => (
                <span
                  key={item.label}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.065] bg-black/20 px-3 py-2 text-[11px] font-medium text-text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/[0.12] hover:text-text"
                >
                  <svg
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 shrink-0 ${item.color}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    {item.icon}
                  </svg>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-reveal hero-delay-2 relative mx-auto w-full max-w-[500px] lg:mx-0 lg:justify-self-end">
            <div aria-hidden="true" className="absolute -inset-10 bg-[radial-gradient(ellipse,rgba(230,57,70,0.13),transparent_68%)] blur-2xl" />

            <div className="hero-terminal-float relative">
              <div className="hero-terminal-panel relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0c11]/90 shadow-[0_30px_80px_rgba(0,0,0,0.48),0_0_0_1px_rgba(230,57,70,0.03)] backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-brand/75 to-transparent"
                />

                <div className="flex items-center justify-between border-b border-white/[0.065] bg-white/[0.018] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-text-dim">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(45,212,191,0.55)]" />
                    laraskills.context
                  </div>
                  <span className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-text-dim">
                    MCP
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-dim">
                        Retrieval session
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold text-text">
                        Optimize N+1 query
                      </p>
                    </div>
                    <span className="rounded-full border border-accent/20 bg-accent-subtle px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-accent">
                      Ready
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-white/[0.065] bg-black/35">
                    <div className="flex items-center justify-between border-b border-white/[0.055] px-3 py-2">
                      <span className="font-mono text-[9px] text-text-dim">bash</span>
                      <span className="font-mono text-[9px] text-text-dim">00:02.4</span>
                    </div>

                    <div className="space-y-2.5 p-3.5 font-mono text-[11px] leading-5 sm:text-xs">
                      <div className="hero-terminal-line flex items-start gap-2.5">
                        <span className="shrink-0 select-none text-brand">$</span>
                        <span className="break-all text-text-muted">
                          npm install --save-dev laraskills
                        </span>
                      </div>
                      <div className="hero-terminal-line hero-terminal-delay-1 flex items-start gap-2.5">
                        <span className="shrink-0 select-none text-brand">$</span>
                        <span className="text-text-muted">
                          laraskills retrieve{" "}
                          <span className="text-orange-300">&quot;Optimize N+1 query&quot;</span>
                        </span>
                      </div>
                      <div className="hero-terminal-line hero-terminal-delay-2 flex items-start gap-2.5 text-accent">
                        <CheckIcon />
                        <span>Found Laravel-specific context</span>
                      </div>
                      <div className="hero-terminal-line hero-terminal-delay-3 flex items-start gap-2.5 text-accent">
                        <CheckIcon />
                        <span>Loaded rules and examples</span>
                      </div>
                      <div className="hero-terminal-line hero-terminal-delay-4 flex items-start gap-2.5 text-accent">
                        <CheckIcon />
                        <span>Context ready for your AI agent</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["Skills", "4"],
                      ["Rules", "12"],
                      ["Examples", "8"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2.5"
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-dim">
                          {label}
                        </p>
                        <p className="mt-1 font-display text-base font-semibold text-text">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 left-8 right-8 -z-10 h-8 rounded-full bg-brand/10 blur-xl" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
