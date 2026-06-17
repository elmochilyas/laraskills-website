import { getToolIcon, renderIconSvg } from "@/lib/integration-icons";

type BrandIconProps = {
  iconKey?: string;
};

export default function BrandIcon({ iconKey }: BrandIconProps) {
  if (!iconKey) return null;

  const config = getToolIcon(iconKey);
  if (!config) return null;

  if (config.source === "lobehub") {
    if (config.hasColor) {
      return <config.Component size={22} />;
    }
    return <config.Component size={22} style={{ color: "#fff" }} />;
  }

  return renderIconSvg(config.path, "h-[22px] w-[22px] shrink-0");
}
