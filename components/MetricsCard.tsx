type MetricsCardProps = {
  value: string;
  label: string;
};

export default function MetricsCard({ value, label }: MetricsCardProps) {
  return (
    <div className="card flex flex-col items-center p-6 text-center group">
      <span className="font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl transition-transform duration-300 group-hover:scale-105">
        {value}
      </span>
      <span className="mt-1.5 text-sm text-text-muted leading-snug">{label}</span>
    </div>
  );
}
