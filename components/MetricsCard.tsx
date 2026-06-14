type MetricsCardProps = {
  value: string;
  label: string;
};

export default function MetricsCard({ value, label }: MetricsCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center">
      <span className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-sm text-text-muted">{label}</span>
    </div>
  );
}
