import { getToolIcon, renderIconSvg } from "@/lib/integration-icons";

type BrandIconProps = {
  iconKey?: string;
  size?: number;
};

export default function BrandIcon({ iconKey, size = 22 }: BrandIconProps) {
  if (!iconKey) return null;

  const config = getToolIcon(iconKey);
  if (!config) return null;

  if (config.source === "lobehub") {
    if (config.hasColor) {
      return <config.Component size={size} />;
    }
    return <config.Component size={size} style={{ color: "#fff" }} />;
  }

  return renderIconSvg(config.path, size);
}
