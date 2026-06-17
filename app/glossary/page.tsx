"use client";

import { useState, useMemo } from "react";
import { glossaryTerms, termCategories } from "@/data/glossary";
import PageContainer from "@/components/PageContainer";

import type { TermCategory } from "@/data/glossary";

const categoryMeta: Record<TermCategory, { description: string }> = {
  Architecture: {
    description: "Core concepts that make up the Laraskills knowledge system.",
  },
  Retrieval: {
    description:
      "How Laraskills finds and delivers the right knowledge to AI agents.",
  },
  "Agent Workflow": {
    description:
      "How skills and workflows turn knowledge into actionable AI capabilities.",
  },
  Validation: {
    description:
      "Tools and processes that ensure knowledge integrity and correctness.",
  },
};

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return glossaryTerms;
    const q = search.toLowerCase();
    return glossaryTerms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        t.whyItMatters.toLowerCase().includes(q),
    );
  }, [search]);

  const grouped = useMemo(() => {
    const map = new Map<TermCategory, typeof filtered>();
    for (const cat of termCategories) {
      const items = filtered.filter((t) => t.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Glossary — Laraskills",
            description:
              "Key terms and concepts used in the Laraskills engineering knowledge system, organized by category with search.",
            isPartOf: {
              "@type": "WebSite",
              name: "Laraskills",
            },
          }),
        }}
      />

      <div className="hero-shell">
        <PageContainer>
          <div className="max-w-2xl">
            <div className="section-eyebrow">Reference</div>
            <h1 className="hero-reveal text-4xl font-bold tracking-tight text-text sm:text-5xl font-display">
              Glossary
            </h1>
            <p className="hero-reveal hero-delay-1 mt-4 text-lg text-text-muted leading-relaxed max-w-xl">
              Key terms and concepts used throughout the Laraskills
              documentation and engineering knowledge system.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <div className="relative mt-8 mb-10">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-lg border border-border bg-bg-card py-2.5 pl-10 pr-4 text-sm text-text placeholder-text-dim transition-colors duration-200 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/20"
          />
        </div>
      </PageContainer>

      <PageContainer>
        {grouped.size === 0 ? (
          <div className="py-16 text-center">
            <p className="text-text-muted text-lg">
              No terms match &ldquo;{search}&rdquo;
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-2 text-sm text-brand hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          Array.from(grouped.entries()).map(([category, terms]) => (
            <section key={category} className="mb-14">
              <div className="mb-1">
                <span className="section-eyebrow">{category}</span>
              </div>
              <p className="text-sm text-text-muted mb-6">
                {categoryMeta[category].description}
              </p>
              <div className="grid gap-4">
                {terms.map((t) => (
                  <div
                    key={t.term}
                    className="card p-5"
                  >
                    <h3 className="text-sm font-semibold text-brand">
                      {t.term}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {t.definition}
                    </p>
                    <div className="mt-3 rounded-md border border-border/50 bg-bg-alt/50 px-3.5 py-2.5">
                      <span className="text-xs font-medium text-text-dim uppercase tracking-wider">
                        Why it matters
                      </span>
                      <p className="mt-1 text-sm text-text leading-relaxed">
                        {t.whyItMatters}
                      </p>
                    </div>
                    {t.relatedLinks && t.relatedLinks.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        {t.relatedLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="text-xs text-accent hover:text-accent-dim transition-colors duration-200"
                          >
                            {link.label} &rarr;
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </PageContainer>
    </>
  );
}
