import BrandIcon from "@/components/BrandIcon";

type IntegrationCloudItemProps = {
  name: string;
  icon?: string;
};

export default function IntegrationCloudItem({ name, icon }: IntegrationCloudItemProps) {
  if (icon) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
        <BrandIcon iconKey={icon} />
        <span className="text-sm font-medium text-text whitespace-nowrap">{name}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border border-border/60 bg-surface-alt px-4 py-2">
      <span className="text-sm font-medium text-text-muted whitespace-nowrap">{name}</span>
    </div>
  );
}
