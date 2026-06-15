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
    <div className="card-base flex flex-col p-6 group">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-sm font-bold text-brand ring-1 ring-brand/20 group-hover:bg-brand/15 group-hover:ring-brand/30 transition-all duration-200">
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
