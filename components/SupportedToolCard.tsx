import BrandIcon from "@/components/BrandIcon";

type SupportedToolCardProps = {
  name: string;
  shortName: string;
  type: string;
  description: string;
  icon?: string;
};

export default function SupportedToolCard({ name, shortName, type, description, icon }: SupportedToolCardProps) {
  return (
    <div className="group relative flex gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-text-muted/20 hover:bg-surface-alt">
      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.02), transparent 60%)",
        }}
      />
      <BrandIcon iconKey={icon} fallbackInitials={shortName} />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <span className="text-sm font-semibold text-text">
            {name}
          </span>
          <span className="shrink-0 inline-flex items-center rounded-full border border-border/60 px-2.5 py-0.5 text-[10px] font-medium text-text-muted uppercase tracking-widest">
            {type}
          </span>
        </div>
        <p className="text-xs text-text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
