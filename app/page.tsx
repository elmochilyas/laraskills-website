"use client";

import { useState } from "react";
import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  /* TODO: verify `npx laraskills@beta` is the final npm package name before production launch */
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText("npx laraskills@beta install");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Section className="relative overflow-hidden">
      {/* Subtle glow effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)",
        }}
      />

      <PageContainer>
        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 min-h-[calc(100dvh-3.5rem)] items-center py-16 md:py-24">
          {/* Left column: text and CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-brand">
              Laraskills
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Laravel engineering context for AI coding agents
            </h1>
            <p className="mt-4 max-w-lg text-base text-text-muted sm:text-lg">
              Laraskills equips OpenCode, Claude Code, Cursor, Codex, Copilot,
              and other coding agents with Laravel-specific skills, rules,
              retrieval workflows, and MCP support so they can work with deeper
              context and fewer guesses.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" href="https://github.com/elmochilyas/laraskills">
                Install Laraskills
              </Button>
              <Button variant="secondary" size="lg" href="https://github.com/elmochilyas/laraskills">
                View GitHub
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Built for Laravel developers using AI coding agents
            </p>
          </div>

          {/* Right column: terminal command card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-3">
                <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Terminal
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
              </div>
              <pre className="overflow-x-auto text-sm">
                <code className="text-text-muted">
                  <span className="text-green-400">$</span> npx laraskills@beta install
                </code>
              </pre>
              <button
                onClick={copyCommand}
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-text-muted hover:text-text"
              >
                {copied ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            </Card>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
