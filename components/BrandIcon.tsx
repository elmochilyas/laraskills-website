import { icons, type IconRecord } from "@/lib/simple-icons";

type BrandIconProps = {
  iconKey?: string;
  className?: string;
};

function IconSvg({ record }: { record: IconRecord }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="#fff"
    >
      <path d={record.path} />
    </svg>
  );
}

export default function BrandIcon({ iconKey, className = "" }: BrandIconProps) {
  if (!iconKey || !icons[iconKey]) return null;

  const record = icons[iconKey];
  const hasBrandColor = record.hex !== "000000";
  const bgHex = hasBrandColor ? record.hex : "4a4a4a";

  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${className}`}
      style={{ backgroundColor: `#${bgHex}` }}
    >
      <IconSvg record={record} />
    </div>
  );
}
