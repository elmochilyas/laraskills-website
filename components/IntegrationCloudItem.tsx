import BrandIcon from "@/components/BrandIcon";

type IntegrationCloudItemProps = {
  name: string;
  icon?: string;
};

export default function IntegrationCloudItem({ name, icon }: IntegrationCloudItemProps) {
  if (icon) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-card/80 px-4 py-2 transition-all duration-200 hover:border-brand/30 hover:bg-brand/[0.03] hover:shadow-glow-brand">
        <BrandIcon iconKey={icon} />
        <span className="text-sm font-medium text-text whitespace-nowrap">{name}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border border-border/50 bg-surface-alt/60 px-4 py-2 transition-all duration-200 hover:border-text-muted/20 hover:bg-white/[0.02]">
      <span className="text-sm font-medium text-text-muted whitespace-nowrap">{name}</span>
    </div>
  );
}
