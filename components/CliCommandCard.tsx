"use client";

import { useState } from "react";

type CliCommandCardProps = {
  command: string;
  label: string;
  className?: string;
};

export default function CliCommandCard({
  command,
  label,
  className = "",
}: CliCommandCardProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className={`card p-4 sm:p-5 group ${className}`}>
      <div className="flex items-center justify-between border-b border-border/80 pb-2 mb-3">
        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
          {label}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
      </div>
      <div className="font-mono text-sm whitespace-pre-wrap break-words">
        <span className="text-accent/80">$</span>{" "}
        {renderCommand(command)}
      </div>
      <button
        onClick={copyCommand}
        className="mt-3 inline-flex items-center gap-2 rounded-md border border-border/80 px-3 py-1.5 text-xs font-medium text-text-muted transition-all duration-200 hover:border-text-muted/30 hover:text-text hover:bg-white/[0.03] active:scale-95"
      >
        {copied ? (
          <>
            <svg className="h-3.5 w-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </>
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
        <span key={i} className="text-purple-400/90">
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
      <span key={i} className="text-text-muted">
        {part}
      </span>
    );
  });
}
