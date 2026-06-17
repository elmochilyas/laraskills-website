"use client";

import { useState, useCallback } from "react";

type CliCommandCardProps = {
  command: string;
  label: string;
  index?: number;
  isActive?: boolean;
  onHover?: (index: number) => void;
};

function LabelBlock({ text }: { text: string }) {
  const sep = text.indexOf(" / ");
  if (sep === -1) {
    return <>{text}</>;
  }
  return (
    <>
      <span>{text.slice(0, sep)}</span>
      <span>{text.slice(sep + 3)}</span>
    </>
  );
}

export default function CliCommandCard({
  command,
  label,
  index = 0,
  isActive = false,
  onHover = () => {},
}: CliCommandCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [command]);

  const labelPlain = label.replace(/ \/ /g, " ").toLowerCase();

  return (
    <div
      className={`grid grid-cols-[24px_1fr_36px] sm:grid-cols-[24px_135px_1fr_36px] gap-x-3 items-start px-5 py-[18px] font-mono text-sm leading-relaxed transition-all duration-200 group border-l-2 ${
        isActive
          ? "border-accent/30 bg-gradient-to-r from-accent/[0.06] via-white/[0.015] to-transparent overflow-hidden relative"
          : "border-transparent hover:bg-white/[0.018]"
      }`}
      onMouseEnter={() => onHover(index)}
      onFocus={() => onHover(index)}
      tabIndex={0}
      role="listitem"
      aria-label={`Command: ${labelPlain}`}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.055] to-transparent animate-[terminal-scan_4.5s_ease-in-out_infinite] -translate-x-full" />
        </div>
      )}

      <div className="flex items-center justify-center h-full relative">
        <span
          className={`relative z-10 w-[5px] h-[5px] rounded-full transition-all duration-300 ${
            isActive
              ? "bg-accent shadow-[0_0_12px_rgba(45,212,191,0.45)]"
              : "bg-text-dim/25"
          }`}
        />
      </div>

      <span className="hidden sm:flex flex-col gap-[2px] text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted/75 leading-[1.15]">
        <LabelBlock text={label} />
      </span>

      <div className="min-w-0">
        <span className="sm:hidden block text-[9px] font-semibold uppercase tracking-[0.08em] text-text-muted/60 leading-[1.2] mb-1">
          <LabelBlock text={label} />
        </span>
        <span className="text-accent/65 select-none">$</span>{" "}
        <span className="break-words text-text-muted/90">
          {renderCommand(command)}
        </span>
        {isActive && (
          <span className="inline-block w-[2px] h-[1.1em] ml-[3px] bg-text/70 align-middle animate-[terminal-blink_1s_step-end_infinite]" />
        )}
      </div>

      <button
        onClick={copyCommand}
        className="flex items-center justify-center w-[30px] h-[30px] place-self-center rounded-lg border border-transparent opacity-40 transition-all duration-200 text-text-muted hover:text-text hover:bg-white/[0.055] hover:border-white/[0.08] focus-visible:opacity-100 focus-visible:border-white/[0.08] focus-visible:bg-white/[0.055] active:scale-90"
        aria-label={`Copy ${labelPlain} command`}
      >
        {copied ? (
          <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}

function renderCommand(full: string): React.ReactNode {
  const parts = full.split(/(\s+)/);
  return parts.map((part, i) => {
    if (part.trim() === "") return part;
    if (part.startsWith("npx")) {
      return (
        <span key={i} className="text-purple-400/85">
          {part}
        </span>
      );
    }
    if (part.startsWith("--")) {
      return (
        <span key={i} className="text-yellow-400/80">
          {part}
        </span>
      );
    }
    if (part.startsWith('"') || part.startsWith("'")) {
      return (
        <span key={i} className="text-orange-300/80">
          {part}
        </span>
      );
    }
    if (part.startsWith("@") || part.startsWith("beta")) {
      return (
        <span key={i} className="text-cyan-400/80">
          {part}
        </span>
      );
    }
    if (part.startsWith("/")) {
      return (
        <span key={i} className="text-blue-300/80">
          {part}
        </span>
      );
    }
    return (
      <span key={i} className="text-text-muted/90">
        {part}
      </span>
    );
  });
}
