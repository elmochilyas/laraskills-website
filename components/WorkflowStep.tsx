type WorkflowStepProps = {
  number: number;
  label: string;
  description: string;
};

export default function WorkflowStep({
  number,
  label,
  description,
}: WorkflowStepProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-sm font-bold text-brand shadow-sm transition-all duration-200 group-hover:border-brand/30 group-hover:shadow-glow-brand">
        {number}
      </span>
      <h4 className="text-sm font-semibold text-text">{label}</h4>
      <p className="mt-1 max-w-[140px] text-xs text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
