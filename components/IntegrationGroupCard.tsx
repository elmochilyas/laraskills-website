import BrandIcon from "@/components/BrandIcon";

type GroupTool = {
  name: string;
  icon?: string;
};

type IntegrationGroupCardProps = {
  title: string;
  description: string;
  tools: GroupTool[];
};

export default function IntegrationGroupCard({ title, description, tools }: IntegrationGroupCardProps) {
  return (
    <div className="card-base flex flex-col p-6 group">
      <div className="mb-1">
        <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/[0.06] px-3 py-0.5 text-[11px] font-semibold text-brand uppercase tracking-wider transition-colors duration-200 group-hover:bg-brand/[0.1] group-hover:border-brand/30">
          {title}
        </span>
      </div>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {tools.map((tool, i) => (
          <div key={i} className="inline-flex items-center gap-2">
            {tool.icon ? (
              <BrandIcon iconKey={tool.icon} />
            ) : null}
            <span className="text-sm text-text">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
