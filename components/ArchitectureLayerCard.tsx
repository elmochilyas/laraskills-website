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
    <div className="card flex flex-col p-6 group">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-subtle text-sm font-semibold text-brand transition-all duration-200 group-hover:bg-brand/[0.12]">
        {number}
      </span>
      <h3 className="font-display mb-3 text-lg font-semibold text-text">{title}</h3>
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
