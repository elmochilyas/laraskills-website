import BrandIcon from "@/components/BrandIcon";

type IntegrationCloudItemProps = {
  name: string;
  icon?: string;
};

export default function IntegrationCloudItem({ name, icon }: IntegrationCloudItemProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-bg-card/80 px-4 py-2 transition-all duration-200 hover:border-brand/25 hover:bg-brand-subtle">
      <BrandIcon iconKey={icon} />
      <span className="text-sm font-medium text-text whitespace-nowrap">{name}</span>
    </div>
  );
}
