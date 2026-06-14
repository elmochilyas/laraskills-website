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
    <div className="flex flex-col items-center text-center">
      <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-alt text-sm font-bold text-brand">
        {number}
      </span>
      <h4 className="text-sm font-semibold text-text">{label}</h4>
      <p className="mt-0.5 text-xs text-text-muted">{description}</p>
    </div>
  );
}
