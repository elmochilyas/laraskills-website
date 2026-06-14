"use client";

import { icons, type IconRecord } from "@/lib/simple-icons";

type BrandIconProps = {
  iconKey?: string;
  fallbackInitials: string;
};

const fallbackGradients = [
  "from-zinc-500 to-zinc-700",
  "from-orange-500 to-orange-700",
  "from-sky-500 to-sky-700",
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-emerald-700",
  "from-violet-500 to-violet-700",
  "from-cyan-500 to-cyan-700",
  "from-rose-500 to-rose-700",
  "from-amber-500 to-amber-700",
  "from-teal-500 to-teal-700",
  "from-indigo-500 to-indigo-700",
  "from-pink-500 to-pink-700",
];

function hashIndex(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function IconSvg({ record }: { record: IconRecord }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="#fff"
    >
      <path d={record.path} />
    </svg>
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function BrandIcon({ iconKey, fallbackInitials }: BrandIconProps) {
  if (iconKey && icons[iconKey]) {
    const record = icons[iconKey];
    const hasBrandColor = record.hex !== "000000";
    const bgHex = hasBrandColor ? record.hex : "4a4a4a";
    const glow = hasBrandColor ? hexToRgba(record.hex, 0.3) : "rgba(255,255,255,0.08)";

    return (
      <div className="relative shrink-0">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl shadow-sm"
          style={{
            backgroundColor: `#${bgHex}`,
            boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 12px ${glow}`,
          }}
        >
          <IconSvg record={record} />
        </div>
      </div>
    );
  }

  const gradient = fallbackGradients[hashIndex(fallbackInitials) % fallbackGradients.length];
  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-sm`}>
      <span className="text-sm font-bold uppercase tracking-wide text-white">
        {fallbackInitials}
      </span>
    </div>
  );
}
