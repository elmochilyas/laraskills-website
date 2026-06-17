type McpToolCardProps = {
  name: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
  badges?: string[];
};

export default function McpToolCard({ name, description, inputs, outputs, badges }: McpToolCardProps) {
  return (
    <div className="card flex flex-col p-5 group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <code className="font-mono text-sm font-semibold text-brand break-all">
          {name}
        </code>
        {badges ? (
          <div className="flex shrink-0 flex-wrap gap-1">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-text-dim"
              >
                {badge}
              </span>
            ))}
          </div>
        ) : (
          <span className="shrink-0 inline-flex items-center rounded-full border border-border/70 bg-bg-card/60 px-2.5 py-0.5 text-[11px] font-medium text-text-muted uppercase tracking-wider">
            Read-only
          </span>
        )}
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      {inputs && outputs && (
        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-3 py-2 font-mono text-[11px] leading-relaxed">
          <p>
            <span className="text-brand/70">in</span>{" "}
            <span className="text-text-dim">{inputs.join(", ")}</span>
          </p>
          <p>
            <span className="text-accent/70">out</span>{" "}
            <span className="text-text-dim">{outputs.join(", ")}</span>
          </p>
        </div>
      )}
    </div>
  );
}
