type ComparisonItem = {
  label: string;
};

type ComparisonTableProps = {
  beforeTitle: string;
  beforeItems: ComparisonItem[];
  afterTitle: string;
  afterItems: ComparisonItem[];
};

function ComparisonColumn({
  title,
  items,
  variant,
}: {
  title: string;
  items: ComparisonItem[];
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";

  return (
    <div
      className={`flex flex-col rounded-xl border p-6 ${
        isBefore
          ? "card"
          : "card-featured"
      }`}
    >
      <h3
        className={`font-display mb-4 text-lg font-semibold ${
          isBefore ? "text-text-muted" : "text-brand"
        }`}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-text">
            <span
              className={`mt-0.5 shrink-0 text-base ${
                isBefore ? "text-text-dim" : "text-accent"
              }`}
            >
              {isBefore ? "âœ•" : "âœ“"}
            </span>
            <span className={isBefore ? "text-text-muted" : ""}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ComparisonTable({
  beforeTitle,
  beforeItems,
  afterTitle,
  afterItems,
}: ComparisonTableProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <ComparisonColumn
        title={beforeTitle}
        items={beforeItems}
        variant="before"
      />
      <ComparisonColumn
        title={afterTitle}
        items={afterItems}
        variant="after"
      />
    </div>
  );
}
