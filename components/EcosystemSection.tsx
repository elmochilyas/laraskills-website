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
      ([entry]) => {
        if (entry.isIntersecting) setEntered(true);
      },
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
  label,
  accent,
  children,
}: {
  stepActive: boolean;
  label: string;
  accent: "brand" | "accent";
  children: React.ReactNode;
}) {
  const accentClass = accent === "brand" ? "eco-step-group-brand" : "eco-step-group-accent";

  return (
    <div
      className={`eco-step-group ${accentClass} ${
        stepActive ? "eco-step-visible" : "eco-step-hidden"
      }`}
    >
      <div className="eco-step-heading">
        <div className="eco-step-marker" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted font-mono">
          {label}
        </span>
        <div className="eco-step-heading-line" aria-hidden="true" />
      </div>
      <div className="eco-step-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function EcosystemSection() {
  const m = metricsData.metrics;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let rafId = 0;
    const step2Start = 0.28;
    const step3Start = 0.52;

    const getStickyOffset = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-height")
        .trim();
      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) ? parsed : 56;
    };

    const updateStep = () => {
      rafId = 0;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const stickyOffset = getStickyOffset();
      const stickyHeight = Math.max(viewportHeight - stickyOffset, 1);
      const scrollRange = Math.max(rect.height - stickyHeight, 1);
      const progress = Math.min(Math.max((stickyOffset - rect.top) / scrollRange, 0), 1);
      const nextStep = progress >= step3Start ? 3 : progress >= step2Start ? 2 : 1;

      setStep((currentStep) => (currentStep === nextStep ? currentStep : nextStep));
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateStep);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <Section variant="alt" className="!py-0">
      <div ref={wrapperRef} className="eco-scroll-wrapper">
        <div className="eco-atmosphere" aria-hidden="true" />

        {/* Desktop: sticky storytelling container */}
        <div className="hidden lg:block eco-sticky-container">
          <PageContainer>
            <div className="eco-sticky-inner">
              <div className="eco-panel">
                <div className="eco-section-heading">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px w-6 bg-brand/50" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted font-mono">
                      Scale
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-[2.4rem] font-display font-bold tracking-[-0.04em] leading-[0.98]">
                    LaraSkills <span className="text-brand">at a glance</span>
                  </h2>
                  <p className="mt-2 text-text-muted leading-relaxed text-sm">
                    The LaraSkills knowledge system today
                  </p>
                </div>

                <div className="eco-dashboard-grid">
                  <div className="eco-feature-column">
                    <div className="card-featured eco-feature-card">
                      <div className="eco-feature-content">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="size-7 mb-5 text-brand/55"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7l8 5 8-5" />
                        </svg>
                        <CountUpValue
                          valueStr={m[4].value}
                          className="eco-feature-number font-display font-bold tracking-[-0.07em] text-white block leading-none mb-3"
                        />
                        <span className="text-text-muted text-base font-medium block leading-snug">
                          Knowledge units
                        </span>
                        <div className="my-5 h-px bg-gradient-to-r from-brand/45 via-white/10 to-transparent" />
                        <div className="eco-badge mb-3">Core retrieval foundation</div>
                        <p className="max-w-[28rem] text-text-dim text-sm leading-relaxed">
                          Curated Laravel knowledge chunks that ground AI coding agents with precise,
                          framework-aware context.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`eco-story-rail eco-story-rail-step-${step}`} aria-hidden="true">
                    <div className="eco-rail-line" />
                  </div>

                  <div className="eco-story-column">
                    <div className="eco-story-card">
                      {step === 1 && (
                        <div key="g1" className="eco-step-group-enter">
                          <StepGroup stepActive={true} label="Knowledge Core" accent="brand">
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                              <MetricsCard
                                className="eco-metric-card"
                                value={m[0].value}
                                label={m[0].label}
                                metricId={m[0].id}
                                description="Implementation skills across key Laravel engineering tasks and patterns."
                                compact
                                forceVisible={true}
                              />
                            </div>
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                              <MetricsCard
                                className="eco-metric-card"
                                value={m[1].value}
                                label={m[1].label}
                                metricId={m[1].id}
                                description="Guardrails that improve consistency and reduce unsafe output."
                                compact
                                forceVisible={true}
                              />
                            </div>
                          </StepGroup>
                        </div>
                      )}
                      {step === 2 && (
                        <div key="g2" className="eco-step-group-enter">
                          <StepGroup stepActive={true} label="Ecosystem Coverage" accent="accent">
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                              <MetricsCard
                                className="eco-metric-card eco-metric-card-accent"
                                value={m[2].value}
                                label={m[2].label}
                                metricId={m[2].id}
                                description="Structured agent behaviors for coding and retrieval workflows."
                                compact
                                forceVisible={true}
                              />
                            </div>
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                              <MetricsCard
                                className="eco-metric-card eco-metric-card-accent"
                                value={m[3].value}
                                label={m[3].label}
                                metricId={m[3].id}
                                description="Coverage across architecture, validation, APIs, queues, testing, and more."
                                compact
                                forceVisible={true}
                              />
                            </div>
                          </StepGroup>
                        </div>
                      )}
                      {step === 3 && (
                        <div key="g3" className="eco-step-group-enter">
                          <StepGroup stepActive={true} label="Integration Layer" accent="brand">
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "0ms" }}>
                              <MetricsCard
                                className="eco-metric-card"
                                value={m[5].value}
                                label={m[5].label}
                                metricId={m[5].id}
                                description="Safe protocol tools that expose LaraSkills intelligence to coding agents."
                                compact
                                forceVisible={true}
                              />
                            </div>
                            <div className="eco-step-card eco-step-card-visible" style={{ transitionDelay: "120ms" }}>
                              <MetricsCard
                                className="eco-metric-card"
                                value={m[6].value}
                                label={m[6].label}
                                metricId={m[6].id}
                                description="Compatible with multiple agent environments and developer workflows."
                                compact
                                forceVisible={true}
                              />
                            </div>
                          </StepGroup>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>

          {/* Progress indicator */}
          <div className="eco-progress-nav" aria-hidden="true">
            <div className="eco-progress-track" aria-hidden="true" />
            <div className={`eco-progress-dot ${step >= 1 ? "eco-progress-dot-active" : "eco-progress-dot-inactive"}`} />
            <div className={`eco-progress-dot ${step >= 2 ? "eco-progress-dot-active-accent" : "eco-progress-dot-inactive"}`} />
            <div className={`eco-progress-dot ${step >= 3 ? "eco-progress-dot-active" : "eco-progress-dot-inactive"}`} />
          </div>
        </div>

        {/* Mobile/tablet: static stacked layout */}
        <div className="lg:hidden">
          <PageContainer>
            <div className="pt-16 md:pt-24 pb-8">
              <div className="eco-mobile-heading">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-px w-6 bg-brand/50" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted font-mono">
                    Scale
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold tracking-[-0.04em] leading-none">
                  LaraSkills <span className="text-brand">at a glance</span>
                </h2>
                <p className="mt-2 text-text-muted leading-relaxed text-sm">
                  The LaraSkills knowledge system today
                </p>
              </div>

              <div className="card-featured eco-feature-card eco-feature-card-mobile">
                <div className="eco-feature-content">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-7 mb-5 text-brand/55"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2M4 7l8 5 8-5" />
                  </svg>
                  <CountUpValue
                    valueStr={m[4].value}
                    className="eco-feature-number font-display font-bold tracking-[-0.07em] text-white block leading-none mb-3"
                  />
                  <span className="text-text-muted text-base font-medium block leading-snug mb-3">
                    Knowledge units
                  </span>
                  <div className="eco-badge mb-3">Core retrieval foundation</div>
                  <p className="text-text-dim text-sm leading-relaxed">
                    Curated Laravel knowledge chunks that ground AI coding agents with precise,
                    framework-aware context.
                  </p>
                </div>
              </div>
            </div>

            <div className="eco-mobile-groups pb-16 md:pb-24">
              <div className="eco-mobile-group eco-step-group-brand">
                <div className="eco-mobile-group-heading">
                  <span className="eco-step-marker" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">
                    Knowledge Core
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard
                    className="eco-metric-card"
                    value={m[0].value}
                    label={m[0].label}
                    metricId={m[0].id}
                    description="Implementation skills across key Laravel engineering tasks and patterns."
                    compact
                  />
                  <MetricsCard
                    className="eco-metric-card"
                    value={m[1].value}
                    label={m[1].label}
                    metricId={m[1].id}
                    description="Guardrails that improve consistency and reduce unsafe output."
                    compact
                  />
                </div>
              </div>

              <div className="eco-mobile-group eco-step-group-accent">
                <div className="eco-mobile-group-heading">
                  <span className="eco-step-marker" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">
                    Ecosystem Coverage
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard
                    className="eco-metric-card eco-metric-card-accent"
                    value={m[2].value}
                    label={m[2].label}
                    metricId={m[2].id}
                    description="Structured agent behaviors for coding and retrieval workflows."
                    compact
                  />
                  <MetricsCard
                    className="eco-metric-card eco-metric-card-accent"
                    value={m[3].value}
                    label={m[3].label}
                    metricId={m[3].id}
                    description="Coverage across architecture, validation, APIs, queues, testing, and more."
                    compact
                  />
                </div>
              </div>

              <div className="eco-mobile-group eco-step-group-brand">
                <div className="eco-mobile-group-heading">
                  <span className="eco-step-marker" aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-dim font-mono">
                    Integration Layer
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <MetricsCard
                    className="eco-metric-card"
                    value={m[5].value}
                    label={m[5].label}
                    metricId={m[5].id}
                    description="Safe protocol tools that expose LaraSkills intelligence to coding agents."
                    compact
                  />
                  <MetricsCard
                    className="eco-metric-card"
                    value={m[6].value}
                    label={m[6].label}
                    metricId={m[6].id}
                    description="Compatible with multiple agent environments and developer workflows."
                    compact
                  />
                </div>
              </div>
            </div>
          </PageContainer>
        </div>

      </div>
    </Section>
  );
}
