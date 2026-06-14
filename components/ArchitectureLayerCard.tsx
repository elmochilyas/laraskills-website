type ArchitectureLayerCardProps = {
  number: number;
  title: string;
  items: string[];
};

export default function ArchitectureLayerCard({
  number,
  title,
  items,
}: ArchitectureLayerCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface p-6">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand">
        {number}
      </span>
      <h3 className="mb-3 text-lg font-semibold text-text">{title}</h3>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
