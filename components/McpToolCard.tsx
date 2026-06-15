type McpToolCardProps = {
  name: string;
  description: string;
};

export default function McpToolCard({ name, description }: McpToolCardProps) {
  return (
    <div className="card flex flex-col p-5 group">
      <div className="flex items-start justify-between gap-2 mb-2">
        <code className="font-mono text-sm font-semibold text-brand break-all">
          {name}
        </code>
        <span className="shrink-0 inline-flex items-center rounded-full border border-border/70 bg-bg-card/60 px-2.5 py-0.5 text-[11px] font-medium text-text-muted uppercase tracking-wider">
          Read-only
        </span>
      </div>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
