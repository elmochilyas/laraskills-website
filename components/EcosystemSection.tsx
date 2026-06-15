"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import PageContainer from "@/components/PageContainer";
import MetricsCard from "@/components/MetricsCard";
import metricsData from "@/data/homepage-metrics.json";

function formatDisplay(value: number): string {
  return value.toLocaleString("en-US");
}

function CountUpValue({ valueStr, className }: { valueStr: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [entered, setEntered] = useState(false);
  const target = parseInt(valueStr.replace(/[^0-9]/g, ""), 10);
  const suffix = valueStr.replace(/[0-9,]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || entered) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEntered(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    if (!entered) return;
    let frame = 0;
    const total = 55;
    let rafId: number;
    const animate = () => {
      frame++;
      const t = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (frame < total) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [entered, target]);

  return (
    <span ref={ref} className={className}>
      {formatDisplay(count)}{suffix}
    </span>
  );
}

function StepGroup({
  stepActive,
  dotColor,
  label,
  accent,
  children,
}: {
  stepActive: boolean;
  dotColor: string;
  label: string;
  accent: "brand" | "accent";
  children: React.ReactNode;
}) {
  return (
    <div className={`eco-step-group ${stepActive ? "eco-step-visible" : "eco-step-hidden"}`}>
      <div className="relative">
        <div className={`hidden lg:block absolute -left-[9px] top-[7px] size-[7px] rounded-full ${dotColor}`} />
        <div className="flex items-center gap-2.5 mb-4">
          <div className={`size-2 rounded-full transition-colors duration-500 ${stepActive ? accent === "brand" ? "bg-brand" : "bg-accent" : "bg-border"}`} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">{label}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function EcosystemSection() {
  const m = metricsData.metrics;
  const spacerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = spacerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalScroll = rect.height + vh;
      const scrolled = vh - rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / totalScroll)));
    };

    update();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let step = 0;
  if (progress > 0.08 && progress <= 0.35) step = 1;
  else if (progress > 0.35 && progress <= 0.65) step = 2;
  else if (progress > 0.65) step = 3;

  return (
    <Section variant="alt" className="!py-0">
      <div className="eco-scroll-wrapper">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_70%_30%,rgba(230,57,70,0.04),transparent_70%)]" />

        {/* Desktop: sticky storytelling container */}
        <div className="hidden lg:block eco-sticky-container">
          <div className="eco-spine" />
          <PageContainer>
            <div className="eco-sticky-inner">
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-6 bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted font-mono">Scale</span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold tracking-tight leading-none">
                  LaraSkills <span className="text-brand">at a glance</span>
                </h2>
                <p className="mt-1.5 text-text-muted leading-relaxed text-sm">
                  The LaraSkills knowledge system today
                </p>
              </div>
              <div className="grid grid-cols-12 gap-0">
                {/* Left: Hero card */}
                <div className="col-span-5 pr-6 xl:pr-8 relative">
                  <div className="absolute -right-[9px] top-1/2 -translate-y-1/2 size-[7px] rounded-full bg-brand/60 shadow-[0_0_8px_rgba(230,57,70,0.3)]" />
                  <div className="card-featured relative overflow-hidden rounded-xl p-6">
                    <div className="eco-hero-glow" />
                    <svg viewBox="0 0 24 24" className="size-6 mb-4 text-brand/45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7l8 5 8-5" />
                    </svg>
                    <CountUpValue valueStr={m[4].value} className="font-display font-bold tracking-tight text-white block leading-none text-4xl sm:text-5xl mb-2" />
                    <span className="text-text-muted text-sm sm:text-base font-medium block leading-snug">Knowledge units</span>
                    <div className="my-3 h-px bg-gradient-to-r from-brand/20 via-brand/10 to-transparent" />
                    <div className="eco-badge mb-2">Core retrieval foundation</div>
                    <p className="text-text-dim text-xs leading-relaxed">Curated Laravel knowledge chunks that ground AI coding agents with precise, framework-aware context.</p>
                  </div>
                </div>
                {/* Right: Groups */}
                <div className="col-span-7 pl-6 xl:pl-8 relative">
                  {step === 1 && (
                    <div key="g1" className="eco-step-group-enter">
                      <StepGroup stepActive={true} dotColor="bg-brand/60 eco-node-dot" label="Knowledge Core" accent="brand">
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                          <MetricsCard value={m[0].value} label={m[0].label} metricId={m[0].id} description="Implementation skills across key Laravel engineering tasks and patterns." compact forceVisible={true} />
                        </div>
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                          <MetricsCard value={m[1].value} label={m[1].label} metricId={m[1].id} description="Guardrails that improve consistency and reduce unsafe output." compact forceVisible={true} />
                        </div>
                      </StepGroup>
                    </div>
                  )}
                  {step === 2 && (
                    <div key="g2" className="eco-step-group-enter">
                      <StepGroup stepActive={true} dotColor="bg-accent/60 eco-node-dot-accent" label="Ecosystem Coverage" accent="accent">
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                          <MetricsCard value={m[2].value} label={m[2].label} metricId={m[2].id} description="Structured agent behaviors for coding and retrieval workflows." compact forceVisible={true} />
                        </div>
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                          <MetricsCard value={m[3].value} label={m[3].label} metricId={m[3].id} description="Coverage across architecture, validation, APIs, queues, testing, and more." compact forceVisible={true} />
                        </div>
                      </StepGroup>
                    </div>
                  )}
                  {step === 3 && (
                    <div key="g3" className="eco-step-group-enter">
                      <StepGroup stepActive={true} dotColor="bg-brand/60 eco-node-dot" label="Integration Layer" accent="brand">
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                          <MetricsCard value={m[5].value} label={m[5].label} metricId={m[5].id} description="Safe protocol tools that expose LaraSkills intelligence to coding agents." compact forceVisible={true} />
                        </div>
                        <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                          <MetricsCard value={m[6].value} label={m[6].label} metricId={m[6].id} description="Compatible with multiple agent environments and developer workflows." compact forceVisible={true} />
                        </div>
                      </StepGroup>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </PageContainer>
          {/* Progress indicator */}
          <div className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
            <div className={`eco-progress-dot ${step >= 1 ? "eco-progress-dot-active" : "eco-progress-dot-inactive"}`} />
            <div className="h-5 w-px bg-gradient-to-b from-border/60 to-transparent" />
            <div className={`eco-progress-dot ${step >= 2 ? "eco-progress-dot-active-accent" : "eco-progress-dot-inactive"}`} />
            <div className="h-5 w-px bg-gradient-to-b from-border/60 to-transparent" />
            <div className={`eco-progress-dot ${step >= 3 ? "eco-progress-dot-active" : "eco-progress-dot-inactive"}`} />
          </div>
        </div>

        {/* Mobile/tablet: static stacked layout */}
        <div className="lg:hidden">
          <PageContainer>
            <div className="pt-16 md:pt-24 pb-8">
              <div className="card-featured relative overflow-hidden rounded-xl p-6 sm:p-8">
                <div className="eco-hero-glow" />
                <svg viewBox="0 0 24 24" className="size-6 mb-4 text-brand/45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7l8 5 8-5" />
                </svg>
                <CountUpValue valueStr={m[4].value} className="font-display font-bold tracking-tight text-white block leading-none text-4xl sm:text-5xl mb-2" />
                <span className="text-text-muted text-base font-medium block leading-snug mb-3">Knowledge units</span>
                <div className="eco-badge mb-3">Core retrieval foundation</div>
                <p className="text-text-dim text-sm leading-relaxed">Curated Laravel knowledge chunks that ground AI coding agents with precise, framework-aware context.</p>
              </div>
            </div>
            <div className="space-y-6 pb-16 md:pb-24">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="size-2 rounded-full bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">Knowledge Core</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard value={m[0].value} label={m[0].label} metricId={m[0].id} description="Implementation skills across key Laravel engineering tasks and patterns." compact />
                  <MetricsCard value={m[1].value} label={m[1].label} metricId={m[1].id} description="Guardrails that improve consistency and reduce unsafe output." compact />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="size-2 rounded-full bg-accent/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">Ecosystem Coverage</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard value={m[2].value} label={m[2].label} metricId={m[2].id} description="Structured agent behaviors for coding and retrieval workflows." compact />
                  <MetricsCard value={m[3].value} label={m[3].label} metricId={m[3].id} description="Coverage across architecture, validation, APIs, queues, testing, and more." compact />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="size-2 rounded-full bg-brand/40" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">Integration Layer</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard value={m[5].value} label={m[5].label} metricId={m[5].id} description="Safe protocol tools that expose LaraSkills intelligence to coding agents." compact />
                  <MetricsCard value={m[6].value} label={m[6].label} metricId={m[6].id} description="Compatible with multiple agent environments and developer workflows." compact />
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

        {/* Desktop spacer â€” provides scroll distance for sticky pinning */}
        <div ref={spacerRef} className="hidden lg:block eco-spacer" />
      </div>
    </Section>
  );
}
