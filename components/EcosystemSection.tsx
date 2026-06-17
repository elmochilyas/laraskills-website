"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Section from "@/components/Section";
import PageContainer from "@/components/PageContainer";
import metricsData from "@/data/homepage-metrics.json";

/* ── Icons ── */

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);

const BracesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m16 18 2 2 2-2" />
    <path d="M8 22H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3" />
    <path d="M16 2h3a3 3 0 0 1 3 3v3.5" />
    <path d="M22 11V5a2 2 0 0 0-2-2h-3" />
    <path d="M2 13v6a2 2 0 0 0 2 2h3" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const BotIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </svg>
);

const PlugIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22v-5" />
    <path d="M9 8V2" />
    <path d="M15 8V2" />
    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
  </svg>
);

const TerminalSquareIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="m7 11 2 2-2 2" />
    <path d="M11 15h4" />
  </svg>
);

/* ── Sub-components ── */

function CountUpValue({ valueStr }: { valueStr: string }) {
  const [count, setCount] = useState(0);
  const [entered, setEntered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseInt(valueStr.replace(/[^0-9]/g, ""), 10);
  const suffix = valueStr.replace(/[0-9,]/g, "");

  useEffect(() => {
    const el = ref.current;
    if (!el || entered) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setEntered(true);
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [entered]);

  useEffect(() => {
    if (!entered) return;
    let frame = 0;
    const total = 60;
    let rafId: number;
    const animate = () => {
      frame++;
      const t = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - t, 4); // Quart easing
      setCount(Math.round(eased * target));
      if (frame < total) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [entered, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US")}{suffix}
    </span>
  );
}

const steps = [
  {
    id: 1,
    title: "Knowledge Core",
    description: "The fundamental engineering knowledge and rules that drive consistent output.",
    accent: "brand",
    metrics: [
      {
        id: "skills",
        icon: <BracesIcon className="size-5" />,
        value: metricsData.metrics[0].value,
        label: metricsData.metrics[0].label,
        desc: "Implementation skills across key Laravel engineering tasks and patterns."
      },
      {
        id: "rules",
        icon: <ShieldCheckIcon className="size-5" />,
        value: metricsData.metrics[1].value,
        label: metricsData.metrics[1].label,
        desc: "Guardrails that improve consistency and reduce unsafe output."
      }
    ]
  },
  {
    id: 2,
    title: "Ecosystem Coverage",
    description: "Broad coverage across Laravel engineering domains and agent personas.",
    accent: "accent",
    metrics: [
      {
        id: "agents",
        icon: <BotIcon className="size-5" />,
        value: metricsData.metrics[2].value,
        label: metricsData.metrics[2].label,
        desc: "Structured agent behaviors for coding and retrieval workflows."
      },
      {
        id: "domains",
        icon: <NetworkIcon className="size-5" />,
        value: metricsData.metrics[3].value,
        label: metricsData.metrics[3].label,
        desc: "Coverage across architecture, validation, APIs, queues, testing, and more."
      }
    ]
  },
  {
    id: 3,
    title: "Integration Layer",
    description: "Secure interfaces that connect the knowledge base to your engineering tools.",
    accent: "brand",
    metrics: [
      {
        id: "mcp",
        icon: <PlugIcon className="size-5" />,
        value: metricsData.metrics[5].value,
        label: metricsData.metrics[5].label,
        desc: "Safe protocol tools that expose LaraSkills intelligence to coding agents."
      },
      {
        id: "harnesses",
        icon: <TerminalSquareIcon className="size-5" />,
        value: metricsData.metrics[6].value,
        label: metricsData.metrics[6].label,
        desc: "Compatible with multiple agent environments and developer workflows."
      }
    ]
  }
];

export default function EcosystemSection() {
  const m = metricsData.metrics;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const updateActiveStep = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollRange = rect.height - viewportHeight;
    
    // Calculate progress (0 to 1) based on how much of the section has been scrolled through
    const progress = Math.max(0, Math.min(1, (-rect.top) / scrollRange));
    
    let step = 1;
    if (progress > 0.66) step = 3;
    else if (progress > 0.33) step = 2;
    
    setActiveStep(step);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    updateActiveStep();
    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [updateActiveStep]);

  return (
    <Section variant="alt" className="!p-0 relative overflow-visible">
      <div ref={wrapperRef} className="relative lg:min-h-[300vh]">
        <div className="eco-atmosphere" aria-hidden="true" />
        
        {/* Sticky container for desktop */}
        <div className="hidden lg:flex sticky top-0 h-screen items-center">
          <PageContainer className="w-full">
            <div className="relative grid grid-cols-12 gap-8 items-center bg-[#0d0d12]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl overflow-hidden">
              
              {/* Decorative Scanline */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent top-1/4 animate-[scan_8s_linear_infinite]" />
              </div>

              {/* Left Column: System Status */}
              <div className="col-span-5 relative z-10">
                <div className="section-eyebrow !mb-4">Scale</div>
                <h2 className="section-title !text-[2.6rem] !mb-2">
                  LaraSkills <span className="text-brand">at a glance</span>
                </h2>
                <p className="section-lead !text-base mb-10">
                  The LaraSkills knowledge system today
                </p>

                <div className="card-featured p-8 border-brand/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <DatabaseIcon className="size-24 text-brand" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="eco-badge mb-4">Core retrieval foundation</div>
                    <div className="font-display font-bold text-6xl xl:text-7xl text-white tracking-tight mb-2">
                      <CountUpValue valueStr={m[4].value} />
                    </div>
                    <div className="text-text-muted text-lg font-medium mb-6">Knowledge units</div>
                    <p className="text-text-dim text-sm leading-relaxed max-w-sm">
                      Curated Laravel knowledge chunks that ground AI coding agents with precise, 
                      framework-aware context.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Step Storytelling */}
              <div className="col-span-6 col-start-7 relative z-10">
                <div className="relative min-h-[360px] flex flex-col justify-center">
                  {steps.map((step) => {
                    const isActive = activeStep === step.id;
                    return (
                      <div 
                        key={step.id}
                        className={`transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1) absolute inset-0 flex flex-col justify-center ${
                          isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.98] pointer-events-none"
                        }`}
                      >
                        <div className="mb-8">
                          <h3 className={`font-display font-bold text-3xl mb-3 ${step.accent === "brand" ? "text-brand" : "text-accent"}`}>
                            {step.title}
                          </h3>
                          <p className="text-text-muted text-base max-w-md leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                          {step.metrics.map((metric) => (
                            <div 
                              key={metric.id}
                              className="bg-bg-card/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors group"
                            >
                              <div className={`mb-4 flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/5 transition-colors ${step.accent === "brand" ? "group-hover:text-brand group-hover:border-brand/30" : "group-hover:text-accent group-hover:border-accent/30"}`}>
                                {metric.icon}
                              </div>
                              <div className="font-display font-bold text-3xl text-white mb-1">
                                {metric.value}
                              </div>
                              <div className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
                                {metric.label}
                              </div>
                              <p className="text-text-dim text-xs leading-relaxed">
                                {metric.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Rail (far right) */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 py-8">
                <div className="absolute inset-y-0 w-px bg-white/5" />
                {steps.map((step) => {
                  const isActive = activeStep === step.id;
                  const isCompleted = activeStep > step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => {
                        const wrapper = wrapperRef.current;
                        if (!wrapper) return;
                        const targetPos = wrapper.offsetTop + (step.id - 1) * (window.innerHeight);
                        window.scrollTo({ top: targetPos, behavior: "smooth" });
                      }}
                      className="group relative flex items-center justify-center p-2"
                    >
                      <span className="sr-only">{step.title}</span>
                      <div className={`relative z-10 size-2.5 rounded-full transition-all duration-500 border-2 ${
                        isActive 
                          ? step.accent === "brand" ? "bg-brand border-brand shadow-[0_0_12px_rgba(230,57,70,0.5)] scale-125" : "bg-accent border-accent shadow-[0_0_12px_rgba(45,212,191,0.5)] scale-125"
                          : isCompleted ? "bg-white/40 border-white/40" : "bg-white/10 border-white/10 group-hover:border-white/30"
                      }`} />
                      
                      <div className={`absolute right-full mr-4 whitespace-nowrap text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 ${
                        isActive ? "opacity-100 -translate-x-0 text-text-muted" : "opacity-0 -translate-x-2 text-text-dim"
                      }`}>
                        {step.title.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </PageContainer>
        </div>

        {/* Mobile: simple stacked dashboard */}
        <div className="lg:hidden">
          <PageContainer className="py-20 flex flex-col gap-12">
            <div className="space-y-4">
              <div className="section-eyebrow">Scale</div>
              <h2 className="section-title text-3xl">
                LaraSkills <span className="text-brand">at a glance</span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                The LaraSkills knowledge system today
              </p>
            </div>

            <div className="card-featured p-8 border-brand/20 relative overflow-hidden">
              <div className="eco-badge mb-4">Core retrieval foundation</div>
              <div className="font-display font-bold text-6xl text-white tracking-tight mb-2">
                <CountUpValue valueStr={m[4].value} />
              </div>
              <div className="text-text-muted text-lg font-medium mb-6">Knowledge units</div>
              <p className="text-text-dim text-sm leading-relaxed">
                Curated Laravel knowledge chunks that ground AI coding agents with precise, 
                framework-aware context.
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step) => (
                <div key={step.id} className="space-y-8">
                  <div className="relative pl-6">
                    <div className={`absolute left-0 inset-y-0 w-1 rounded-full ${step.accent === "brand" ? "bg-brand" : "bg-accent"}`} />
                    <h3 className={`font-display font-bold text-2xl mb-2 ${step.accent === "brand" ? "text-brand" : "text-accent"}`}>
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.metrics.map((metric) => (
                      <div 
                        key={metric.id}
                        className="bg-bg-card/40 border border-white/5 rounded-2xl p-6"
                      >
                        <div className="mb-4 flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/5 text-text-muted">
                          {metric.icon}
                        </div>
                        <div className="font-display font-bold text-3xl text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-3">
                          {metric.label}
                        </div>
                        <p className="text-text-dim text-xs leading-relaxed">
                          {metric.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(0); }
          to { transform: translateY(400px); }
        }
      `}</style>
    </Section>
  );
}
