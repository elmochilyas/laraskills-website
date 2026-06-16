"use client";

import { useEffect, useState, useRef, useSyncExternalStore } from "react";
import PageContainer from "@/components/PageContainer";

const issues = [
  "Guesses conventions",
  "Misses project context",
  "Needs long manual prompts",
] as const;

const chips = ["retrieve", "rank", "apply"] as const;

const codeLines = [
  "Route::put('/posts/{post}', UpdatePost::class);",
  "Gate::authorize('update', $post);",
  "$post->update($request->validated());",
];

const benefits = [
  "Laravel-specific guidance",
  "Rules applied automatically",
  "MCP-compatible workflow",
] as const;

const rawPromptLines = [
  "Build a post update",
  "endpoint with auth",
] as const;

const XIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const LaraSkillsMark = ({ size = 140 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 389 389" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(12 0)">
      <path
        fill="#FF0814"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M281 141L279 141L279 146L290 152L279 158L279 164L297 154L297 150ZM250 141 232 150 232 155 249 164 250 158 239 152ZM272 135 268 135 266 138 256 169 261 169ZM166 0 63 57 62 169 24 169 23 163 20 161 2 161 0 163 1 183 21 183 23 181 24 175L61 175 63 177 63 196 61 205 24 205 22 197 0 198 1 218 22 218 24 210 61 210 63 212 62 239 24 240 23 234 21 232 1 232 0 252 22 253 24 245 61 245 63 247 62 292 101 314 222 314 276 282 237 261 115 260 115 85L166 57ZM6 238 16 237 17 247 6 248ZM6 203 16 202 17 212 7 213ZM6 167 16 167 17 177 7 178Z"
      />
      <path
        fill="#FFFFFF"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M259 47 253 49 143 111 143 189 145 191 312 278 312 281 307 285 229 331 131 331 227 388 240 382 365 309 365 245 197 160 197 137 200 134 254 104 258 103 328 143 365 162 365 110Z"
      />
    </g>
  </svg>
);

const railSteps = [
  { label: "Raw prompt", cls: "aus-rail-dot-1", labelCls: "aus-rail-lbl-1" },
  { label: "Retrieve", cls: "aus-rail-dot-2", labelCls: "aus-rail-lbl-2" },
  { label: "Apply rules", cls: "aus-rail-dot-3", labelCls: "aus-rail-lbl-3" },
  { label: "Laravel output", cls: "aus-rail-dot-4", labelCls: "aus-rail-lbl-4" },
] as const;

function PipelineRail({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="flex items-center justify-between px-6 lg:px-8 pt-4 pb-1.5">
      {railSteps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          {i > 0 && (
            <span className="text-white/[0.12] -ml-1 lg:-ml-2">
              <ArrowRight />
            </span>
          )}
          <div className="flex flex-col items-center gap-1">
            <span className={`text-[9px] lg:text-[10px] font-mono font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-500 ${reducedMotion ? "text-white/50" : step.labelCls}`}>
              {step.label}
            </span>
            <div className={`h-[2px] w-8 lg:w-10 rounded-full ${reducedMotion ? "bg-brand/25" : step.cls}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PipelineSVG({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" viewBox="0 0 1200 400" preserveAspectRatio="none">
      <defs>
        <filter id="pg-glow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Left → Center path */}
      <path d="M 160,220 C 320,195 460,195 600,200"
            stroke="rgba(230,57,70,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 8" opacity="0.6" />
      {/* Center → Right path */}
      <path d="M 600,200 C 740,205 880,205 1040,220"
            stroke="rgba(230,57,70,0.12)" strokeWidth="1.5" fill="none" strokeDasharray="4 8" opacity="0.6" />
      {!reducedMotion && (
        <>
          <path d="M 160,220 C 320,195 460,195 600,200 C 740,205 880,205 1040,220"
                stroke="rgba(230,57,70,0.3)" strokeWidth="2" fill="none"
                strokeDasharray="28 1070" filter="url(#pg-glow)" className="aus-sig-1" />
          <path d="M 160,220 C 320,195 460,195 600,200 C 740,205 880,205 1040,220"
                stroke="rgba(230,57,70,0.3)" strokeWidth="2" fill="none"
                strokeDasharray="28 1070" filter="url(#pg-glow)" className="aus-sig-2" />
        </>
      )}
    </svg>
  );
}

function GenericAgentCard({ active, reducedMotion }: { active: boolean; reducedMotion: boolean }) {
  return (
    <div className={`flex flex-col transition-all duration-700 delay-75 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5 lg:p-6 max-h-[260px] lg:max-h-[260px]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-text-muted leading-tight">Generic coding agent</h3>
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-amber-400/70 mt-1">
              <XIcon />
              uncertain
            </span>
          </div>
          <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] text-text-dim/40">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
        </div>
        <p className="text-xs text-text-dim/90 leading-relaxed mb-3">
          Works from broad memory and guesses project context.
        </p>
        <div className="space-y-1.5 mb-3">
          {issues.map((text) => (
            <div key={text} className="flex items-center gap-2">
              <span className="shrink-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/[0.02] text-text-dim/35">
                <XIcon />
              </span>
              <span className="text-[11px] text-text-dim/85">{text}</span>
            </div>
          ))}
        </div>
        <div className={`rounded-lg border px-2.5 py-1.5 ${!reducedMotion && active ? "aus-input-pill" : "border-white/[0.04] bg-black/30"}`}>
          {rawPromptLines.map((line, i) => (
            <div key={i} className="font-mono text-[9px] text-text-dim/50 leading-relaxed">
              <span className="text-white/15">&gt;</span> {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LaraSkillsEngine({ active, reducedMotion }: { active: boolean; reducedMotion: boolean }) {
  return (
    <div className={`flex flex-col items-center justify-center transition-all duration-700 delay-200 ease-out ${active ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
      <div className="relative mb-4 lg:mb-5">
        <div className={`absolute -inset-5 lg:-inset-6 rounded-full border border-brand/[0.06] bg-brand/[0.015] ${reducedMotion ? "" : "aus-engine-orbit"}`} />
        <div className={`absolute -inset-3 lg:-inset-4 rounded-full border border-brand/[0.12] ${reducedMotion || !active ? "" : "aus-core-pulse"}`} />
        <div className="relative flex h-[120px] w-[120px] lg:h-[140px] lg:w-[140px] items-center justify-center rounded-full border border-brand/30 bg-[#0d0d12] shadow-[0_0_35px_rgba(230,57,70,0.12)]">
          <div className="absolute inset-1 rounded-full border border-brand/10" />
          <LaraSkillsMark size={80} />
        </div>
      </div>
      <h3 className="font-display text-sm font-bold text-white mb-1">LaraSkills Engine</h3>
      <p className="text-[11px] text-text-muted text-center max-w-[170px] leading-relaxed mb-3 lg:mb-4">
        Retrieves focused Laravel context before the agent writes.
      </p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className={`rounded-md border py-0.5 px-2 font-mono text-[9px] uppercase tracking-tight ${reducedMotion || !active ? "border-brand/20 bg-brand/[0.06] text-brand/70" : "aus-chip"}`}
            style={!reducedMotion && active ? { animationDelay: `${2.1 + i * 0.3}s` } : undefined}
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

function LaravelReadyOutput({ active, reducedMotion }: { active: boolean; reducedMotion: boolean }) {
  return (
    <div className={`flex flex-col transition-all duration-700 delay-350 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      <div className={`flex-1 rounded-2xl border p-5 lg:p-6 max-h-[300px] lg:max-h-[300px] ${!reducedMotion && active ? "aus-right-card" : "border-brand/15 bg-brand/[0.02]"}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-white leading-tight">Agent with LaraSkills</h3>
            <span className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-brand/[0.07] px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-brand mt-1">
              <CheckIcon />
              Laravel-ready
            </span>
          </div>
          <div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border border-brand/20 bg-brand/[0.06] text-brand/60">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
        </div>
        <p className="text-xs text-text-dim/90 leading-relaxed mb-3">
          Uses focused Laravel retrieval before writing code.
        </p>
        <div className="overflow-hidden rounded-lg border border-white/[0.05] bg-black/40 p-2.5 mb-3">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className={`font-mono text-[10px] leading-relaxed whitespace-nowrap transition-opacity duration-300 ${reducedMotion || !active ? "opacity-100" : "aus-code-line"}`}
              style={!reducedMotion && active ? { animationDelay: `${3.5 + i * 0.5}s` } : undefined}
            >
              <span className={line.includes("Route") || line.includes("Gate") ? "text-red-400/80" : "text-text-muted/70"}>
                {line}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {benefits.map((text, i) => (
            <div
              key={text}
              className={`flex items-center gap-2 transition-opacity duration-300 ${reducedMotion || !active ? "opacity-100" : "aus-check-item"}`}
              style={!reducedMotion && active ? { animationDelay: `${4.5 + i * 0.4}s` } : undefined}
            >
              <span className="shrink-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand/[0.08] text-brand/80">
                <CheckIcon />
              </span>
              <span className="text-[11px] text-text-muted font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export default function AgentUpgradeSection() {
  const [active, setActive] = useState(false);
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-surface py-16 lg:py-16 overflow-hidden">
      <PageContainer>
        <div className="mx-auto max-w-[1180px]">
          <div className={`mb-8 lg:mb-10 text-center transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <span className="section-eyebrow">BEFORE & AFTER</span>
            <h2 className="section-title mt-2 text-xl lg:text-3xl">
              From generic agent to <span className="text-brand">Laravel-ready</span> output
            </h2>
            <p className="section-lead mx-auto mt-2 text-xs lg:text-sm max-w-2xl">
              LaraSkills turns broad coding-agent memory into precise Laravel guidance before code is written.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.05] bg-[#0d0d12]/70 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 opacity-[0.025] z-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "20px 20px" }} />

            <PipelineSVG reducedMotion={reducedMotion} />

            <div className="relative z-10">
              <PipelineRail reducedMotion={reducedMotion} />

              <div className="hidden lg:grid lg:grid-cols-[30%_28%_34%] lg:gap-9 lg:items-center px-6 lg:px-8 pb-6 lg:pb-7 pt-1">
                <GenericAgentCard active={active} reducedMotion={reducedMotion} />
                <LaraSkillsEngine active={active} reducedMotion={reducedMotion} />
                <LaravelReadyOutput active={active} reducedMotion={reducedMotion} />
              </div>

              <div className="lg:hidden flex flex-col gap-4 px-5 pb-6 pt-2">
                <div className={`transition-all duration-700 delay-75 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                  <GenericAgentCard active={active} reducedMotion={reducedMotion} />
                </div>
                <div className="flex justify-center text-text-dim/30">
                  <ArrowDown />
                </div>
                <div className={`transition-all duration-700 delay-150 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                  <LaraSkillsEngine active={active} reducedMotion={reducedMotion} />
                </div>
                <div className="flex justify-center text-text-dim/30">
                  <ArrowDown />
                </div>
                <div className={`transition-all duration-700 delay-225 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                  <LaravelReadyOutput active={active} reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      <style>{`
        /* ── SVG signal sweeps (no DOM pills) ── */

        .aus-sig-1 { animation: ausSweep1 3s linear infinite; }
        .aus-sig-2 { animation: ausSweep2 3s linear infinite; }
        @keyframes ausSweep1 {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1100; }
        }
        @keyframes ausSweep2 {
          from { stroke-dashoffset: -550; }
          to   { stroke-dashoffset: -1650; }
        }

        /* ── Pipeline rail ── */

        .aus-rail-dot-1, .aus-rail-dot-2, .aus-rail-dot-3, .aus-rail-dot-4 {
          animation: ausRd 6s ease-in-out infinite;
        }
        @keyframes ausRd {
          0%, 8% { opacity: 0.2; background-color: rgba(230,57,70,0.3); box-shadow: none; }
          14%,100% { opacity: 1; background-color: rgba(230,57,70,0.8); box-shadow: 0 0 6px rgba(230,57,70,0.3); }
        }
        .aus-rail-dot-1 { animation-delay: 0s; }
        .aus-rail-dot-2 { animation-delay: 0.9s; }
        .aus-rail-dot-3 { animation-delay: 2.1s; }
        .aus-rail-dot-4 { animation-delay: 3.0s; }

        .aus-rail-lbl-1 { animation: ausRl 6s ease-in-out infinite; animation-delay: 0s; }
        .aus-rail-lbl-2 { animation: ausRl 6s ease-in-out infinite; animation-delay: 0.9s; }
        .aus-rail-lbl-3 { animation: ausRl 6s ease-in-out infinite; animation-delay: 2.1s; }
        .aus-rail-lbl-4 { animation: ausRl 6s ease-in-out infinite; animation-delay: 3.0s; }
        @keyframes ausRl {
          0%, 8% { color: rgba(138,138,154,0.6); }
          14%,100% { color: rgba(255,255,255,0.9); }
        }

        /* ── Input pill glow (0–15% of cycle) ── */

        .aus-input-pill {
          animation: ausIptGlow 6s ease-in-out infinite;
          border-color: rgba(230,57,70,0.08);
        }
        @keyframes ausIptGlow {
          0%, 3%   { border-color: rgba(230,57,70,0.08); box-shadow: none; }
          8%, 14%  { border-color: rgba(230,57,70,0.35); box-shadow: 0 0 12px rgba(230,57,70,0.06); }
          18%,100% { border-color: rgba(230,57,70,0.08); box-shadow: none; }
        }

        /* ── Chips activate when signal reaches centre (~35%) ── */

        .aus-chip {
          animation: ausChip 6s ease-in-out infinite;
          border-color: rgba(230,57,70,0.2);
          background-color: rgba(230,57,70,0.06);
          color: rgba(230,57,70,0.5);
        }
        @keyframes ausChip {
          0%, 3%  { border-color: rgba(230,57,70,0.2); background-color: rgba(230,57,70,0.06); color: rgba(230,57,70,0.5); }
          10%,100%{ border-color: rgba(230,57,70,0.5); background-color: rgba(230,57,70,0.14); color: rgba(230,57,70,0.9); }
        }

        /* ── Engine core pulse at ~35% ── */

        .aus-core-pulse { animation: ausCore 6s ease-in-out infinite; }
        @keyframes ausCore {
          0%, 33% { border-color: rgba(230,57,70,0.12); background-color: rgba(230,57,70,0.03); box-shadow: 0 0 35px rgba(230,57,70,0.12); }
          36%,39% { border-color: rgba(230,57,70,0.35); background-color: rgba(230,57,70,0.06); box-shadow: 0 0 55px rgba(230,57,70,0.3); }
          43%,100%{ border-color: rgba(230,57,70,0.12); background-color: rgba(230,57,70,0.03); box-shadow: 0 0 35px rgba(230,57,70,0.12); }
        }

        /* ── Engine orbit ring ── */

        .aus-engine-orbit { animation: ausOrb 6s linear infinite; }
        @keyframes ausOrb {
          0%  { transform: rotate(0deg) scale(1); opacity: 0.2; }
          50% { transform: rotate(180deg) scale(1.02); opacity: 0.45; }
          100%{ transform: rotate(360deg) scale(1); opacity: 0.2; }
        }

        /* ── Code lines reveal (~58–75%) ── */

        .aus-code-line { animation: ausCode 6s ease-in-out infinite; }
        @keyframes ausCode {
          0%, 50%  { opacity: 0.15; }
          56%, 100%{ opacity: 1; }
        }

        /* ── Checkmark reveal (~75–85%) ── */

        .aus-check-item { animation: ausCheck 6s ease-in-out infinite; }
        @keyframes ausCheck {
          0%, 68%   { opacity: 0.15; }
          74%, 100% { opacity: 1; }
        }

        /* ── Right card glow (~55–80%) ── */

        .aus-right-card {
          animation: ausRight 6s ease-in-out infinite;
          border-color: rgba(230,57,70,0.15);
          background-color: rgba(230,57,70,0.02);
          box-shadow: 0 0 30px rgba(230,57,70,0.04);
        }
        @keyframes ausRight {
          0%, 50% { border-color: rgba(230,57,70,0.15); box-shadow: 0 0 30px rgba(230,57,70,0.04); }
          55%,78% { border-color: rgba(230,57,70,0.35); box-shadow: 0 0 45px rgba(230,57,70,0.1); }
          82%,100%{ border-color: rgba(230,57,70,0.15); box-shadow: 0 0 30px rgba(230,57,70,0.04); }
        }

        /* ── Reduced motion ── */

        @media (prefers-reduced-motion: reduce) {
          .aus-sig-1, .aus-sig-2,
          .aus-rail-dot-1, .aus-rail-dot-2, .aus-rail-dot-3, .aus-rail-dot-4,
          .aus-rail-lbl-1, .aus-rail-lbl-2, .aus-rail-lbl-3, .aus-rail-lbl-4,
          .aus-input-pill,
          .aus-chip, .aus-core-pulse, .aus-engine-orbit,
          .aus-code-line, .aus-check-item, .aus-right-card {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
