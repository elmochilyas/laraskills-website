type ComparisonItem = {
  label: string;
  description?: string;
};

type ComparisonTableProps = {
  beforeTitle: string;
  beforeSubtitle?: string;
  beforeItems: ComparisonItem[];
  afterTitle: string;
  afterSubtitle?: string;
  afterItems: ComparisonItem[];
};

const codeLines = [
  "Route::put('/posts/{post}', UpdatePost::class);",
  "",
  "Gate::authorize('update', $post);",
  "$post->update($request->validated());",
  "",
  "return to_route('posts.show', $post);",
];

function CrossIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M18 6 6 18" />
      <path d="M6 6 18 18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim">
      {children}
    </p>
  );
}

function GenericPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ComparisonItem[];
}) {
  return (
    <div className="relative flex min-h-[25rem] flex-col rounded-2xl border border-white/[0.06] bg-[#09090e]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <PhaseLabel>Before</PhaseLabel>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-text-muted">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 max-w-[24rem] text-sm leading-relaxed text-text-dim">
              {subtitle}
            </p>
          )}
        </div>
        <span className="rounded-full border border-red-300/10 bg-red-300/[0.035] px-2.5 py-1 font-mono text-[10px] text-red-200/55">
          uncertain
        </span>
      </div>

      <div className="mt-8 rounded-xl border border-white/[0.055] bg-white/[0.025] p-4">
        <p className="font-mono text-[11px] text-text-dim/75">
          generic prompt
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          Build the Laravel feature with whatever the base model remembers.
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium text-text-dim">Missing context</p>
        <div className="mt-3 space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-red-300/10 bg-red-300/[0.035] text-red-200/55">
                <CrossIcon />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug text-text-muted">
                  {item.label}
                </p>
                {item.description && (
                  <p className="mt-0.5 text-[12px] leading-relaxed text-text-dim/70">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EnginePanel() {
  return (
    <div className="relative flex min-h-[12rem] items-center justify-center lg:min-h-[25rem]">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand/35 to-transparent lg:hidden" />
      <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-brand/45 to-transparent lg:block" />

      <div className="relative z-10 w-full max-w-[13.5rem] rounded-2xl border border-brand/30 bg-[#120b0e] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.35),0_0_26px_rgba(230,57,70,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 font-mono text-sm font-semibold text-brand">
          LS
        </div>
        <div className="mt-4 text-center">
          <PhaseLabel>Context</PhaseLabel>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-white">
            LaraSkills engine
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
            Retrieves Laravel guidance before the agent writes.
          </p>
        </div>

        <div className="mt-5 space-y-2 border-t border-white/[0.07] pt-4 font-mono text-[11px] text-text-muted">
          <div className="flex items-center justify-between gap-3">
            <span>retrieve</span>
            <span className="text-brand">rules</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>rank</span>
            <span className="text-brand">context</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>apply</span>
            <span className="text-brand">checklists</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutputPanel({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: ComparisonItem[];
}) {
  return (
    <div className="relative flex min-h-[25rem] flex-col rounded-2xl border border-brand/25 bg-[#111118] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/65 to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <PhaseLabel>After</PhaseLabel>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-2 max-w-[25rem] text-sm leading-relaxed text-text-muted">
              {subtitle}
            </p>
          )}
        </div>
        <span className="rounded-full border border-brand/20 bg-brand/[0.08] px-2.5 py-1 font-mono text-[10px] text-red-100">
          Laravel-ready
        </span>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-[#08080d]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
          <p className="font-mono text-[10px] text-text-muted">
            Laravel output
          </p>
          <p className="font-mono text-[10px] text-brand">context applied</p>
        </div>
        <pre className="overflow-x-auto px-4 py-3 text-[11px] leading-relaxed text-text-muted">
          <code>
            {codeLines.map((line, index) => (
              <span key={`${line}-${index}`} className="block min-w-max">
                <span className="mr-3 inline-block w-4 text-right text-text-dim/50">
                  {index + 1}
                </span>
                <span
                  className={
                    line.includes("Gate::") ||
                    line.includes("validated") ||
                    line.includes("to_route")
                      ? "text-red-100"
                      : "text-text-muted"
                  }
                >
                  {line || " "}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
              <CheckIcon />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug text-text">
                {item.label}
              </p>
              {item.description && (
                <p className="mt-0.5 text-[12px] leading-relaxed text-text-muted">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComparisonTable({
  beforeTitle,
  beforeSubtitle,
  beforeItems,
  afterTitle,
  afterSubtitle,
  afterItems,
}: ComparisonTableProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b0b10] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-5 lg:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="relative mb-5 flex flex-col gap-3 border-b border-white/[0.07] pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[11px] font-medium text-brand">
            Generic prompt -&gt; LaraSkills context engine -&gt; Laravel-ready output
          </p>
          <p className="mt-2 max-w-[42rem] text-sm leading-relaxed text-text-muted">
            The same task moves from uncertain framework memory to Laravel-specific guidance before code is produced.
          </p>
        </div>
        <div className="hidden items-center gap-2 text-brand/70 lg:flex">
          <ArrowIcon className="h-4 w-4" />
          <ArrowIcon className="h-4 w-4" />
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_11rem_minmax(0,1.08fr)] lg:items-stretch">
        <GenericPanel
          title={beforeTitle}
          subtitle={beforeSubtitle}
          items={beforeItems}
        />
        <EnginePanel />
        <OutputPanel
          title={afterTitle}
          subtitle={afterSubtitle}
          items={afterItems}
        />
      </div>
    </div>
  );
}
