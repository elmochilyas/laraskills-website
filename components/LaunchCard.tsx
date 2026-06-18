"use client";

import Link from "next/link";
import Button from "@/components/Button";

export default function LaunchCard() {
  return (
    <section className="relative bg-bg py-16 md:py-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 450px at 50% 45%, rgba(230,57,70,0.035) 0%, rgba(124,58,237,0.02) 40%, transparent 70%)",
        }}
      />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-4xl">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(230,57,70,0.1)]">
            <div className="text-center">
              <h2 className="section-title">
                Ready to ship better Laravel code?
              </h2>
              <p className="section-lead mx-auto">
                Install Laraskills and give your coding agent Laravel-specific context in seconds.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-border bg-zinc-900">
              <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-text-muted">
                  TERMINAL
                </span>
              </div>
              <pre className="overflow-x-auto px-4 py-3 font-mono text-sm">
                <code>
                  <span className="text-accent">$</span> npm install --save-dev laraskills
                </code>
              </pre>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" href="https://github.com/elmochilyas/laraskills">
                Install Laraskills
              </Button>
              <Button variant="secondary" size="lg" href="https://github.com/elmochilyas/laraskills">
                View GitHub
              </Button>
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 text-center">
              <p className="text-xs text-text-muted">
                Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios.{" "}
                <Link
                  href="/research"
                  className="text-accent transition-colors hover:text-accent-dim"
                >
                  Read the study&nbsp;&rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
