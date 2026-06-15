"use client";

import { useEffect, useRef, useState } from "react";

const METRIC_ICONS: Record<string, { viewBox: string; path: string }> = {
  "knowledge-units": {
    viewBox: "0 0 24 24",
    path: "M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7l8 5 8-5",
  },
  skills: {
    viewBox: "0 0 24 24",
    path: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z",
  },
  rules: {
    viewBox: "0 0 24 24",
    path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  agents: {
    viewBox: "0 0 24 24",
    path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  },
  domains: {
    viewBox: "0 0 24 24",
    path: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20",
  },
  mcp: {
    viewBox: "0 0 24 24",
    path: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  },
  harnesses: {
    viewBox: "0 0 24 24",
    path: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
  },
};

type MetricsCardProps = {
  value: string;
  label: string;
  metricId?: string;
  description?: string;
  featured?: boolean;
  compact?: boolean;
  forceVisible?: boolean;
  className?: string;
  style?: { [key: string]: string };
};

function formatDisplay(value: number): string {
  return value.toLocaleString("en-US");
}

export default function MetricsCard({
  value,
  label,
  metricId,
  description,
  featured = false,
  compact = false,
  forceVisible = false,
  className = "",
  style,
}: MetricsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const target = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9,]/g, "");
  const icon = metricId ? METRIC_ICONS[metricId] : null;
  const [count, setCount] = useState(featured || compact ? 0 : target);
  const isVisible = entered || forceVisible;

  useEffect(() => {
    const el = ref.current;
    if (!el || entered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    if ((!entered && !forceVisible) || (!featured && !compact)) return;

    let frame = 0;
    const total = featured ? 55 : 40;
    let rafId: number;

    const animate = () => {
      frame++;
      const t = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (frame < total) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [entered, forceVisible, featured, compact, target]);

  if (compact) {
    return (
      <div
        ref={ref}
        style={style}
        className={`relative rounded-lg border border-border bg-bg-card transition-all duration-500 ease-out p-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        } hover:-translate-y-0.5 hover:shadow-md hover:border-border-light cursor-default ${className}`}
      >
        <div className="flex items-start gap-3.5">
          {icon && (
            <svg
              viewBox={icon.viewBox}
              className="size-5 mt-0.5 shrink-0 text-brand/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icon.path} />
            </svg>
          )}
          <div className="min-w-0">
            <span className="font-display font-bold text-white leading-none text-xl sm:text-2xl block">
              {formatDisplay(count)}{suffix}
            </span>
            <span className="text-text-muted text-sm font-medium leading-snug block mt-0.5">
              {label}
            </span>
            {description && (
              <p className="text-text-dim text-xs leading-relaxed mt-1.5">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const cardClass = featured ? "card-featured" : "card";

  return (
    <div
      ref={ref}
      style={style}
      className={`relative overflow-hidden rounded-xl transition-all duration-500 ease-out ${cardClass} ${
        featured ? "p-8 sm:p-10" : "p-5"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} hover:-translate-y-0.5 hover:shadow-lg cursor-default ${className}`}
    >
      {featured && (
        <div
          className="pointer-events-none absolute -inset-20 rounded-full opacity-0 animate-breathe-radial"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(230,57,70,0.1) 0%, transparent 60%)",
          }}
        />
      )}

      {icon && (
        <svg
          viewBox={icon.viewBox}
          className={`${
            featured ? "size-8 mb-5" : "size-5 mb-3"
          } text-brand/45`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={icon.path} />
        </svg>
      )}

      <span
        className={`font-display font-semibold tracking-tight text-white block leading-none ${
          featured
            ? "text-5xl sm:text-6xl lg:text-7xl font-bold mb-3"
            : "text-2xl mb-1"
        }`}
      >
        {featured ? `${formatDisplay(count)}${suffix}` : value}
      </span>

      <span
        className={`text-text-muted leading-snug block ${
          featured ? "text-base sm:text-lg font-medium" : "text-sm font-medium"
        }`}
      >
        {label}
      </span>

      {description && (
        <p
          className={`text-text-dim leading-relaxed ${
            featured ? "mt-3 text-sm max-w-md" : "mt-2 text-xs"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
