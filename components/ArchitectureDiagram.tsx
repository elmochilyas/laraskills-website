"use client";

import { CSSProperties, useEffect, useRef } from "react";

type ArchitectureLayer = {
  number: number;
  title: string;
  role: string;
  items: string[];
};

type ArchitectureDiagramProps = {
  layers: ArchitectureLayer[];
};

type IconName = "operating" | "intelligence" | "retrieval";

const iconNames: IconName[] = ["operating", "intelligence", "retrieval"];

function LayerIcon({ name }: { name: IconName }) {
  if (name === "intelligence") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8.5h10M7 15.5h10" />
        <circle cx="7" cy="8.5" r="2.5" />
        <circle cx="17" cy="8.5" r="2.5" />
        <circle cx="7" cy="15.5" r="2.5" />
        <circle cx="17" cy="15.5" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12" />
      </svg>
    );
  }

  if (name === "retrieval") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15 15 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5h6M10.5 7.5v6" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h9M18 6h1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h1M10 12h9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 18h7M16 18h3" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="14" cy="18" r="2" />
    </svg>
  );
}

function FlowConnector({ label, delay }: { label: string; delay: string }) {
  return (
    <div
      aria-hidden="true"
      className="architecture-connector"
      style={{ "--signal-delay": delay } as CSSProperties}
    >
      <span className="architecture-connector-label">{label}</span>
      <span className="architecture-signal-line" />
    </div>
  );
}

function LayerCard({
  layer,
  index,
}: {
  layer: ArchitectureLayer;
  index: number;
}) {
  const isCore = index === 1;
  const layerNumber = String(layer.number).padStart(2, "0");

  return (
    <article
      className={`architecture-card ${isCore ? "architecture-card-core" : ""}`}
      style={{ "--layer-delay": `${index * 130}ms` } as CSSProperties}
    >
      <div className="architecture-card-head">
        <span className="architecture-layer-badge">{layerNumber}</span>
        <span className="architecture-icon-shell">
          <LayerIcon name={iconNames[index] ?? "operating"} />
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="architecture-layer-title">{layer.title}</h3>
        <p className="architecture-layer-role">{layer.role}</p>
      </div>

      <ul className="architecture-layer-items">
        {layer.items.map((item) => (
          <li key={item} className="architecture-layer-item">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ArchitectureDiagram({ layers }: ArchitectureDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = diagramRef.current;
    if (!node) {
      return;
    }

    const reveal = () => {
      node.classList.remove("architecture-pre-reveal");
      node.classList.add("architecture-visible");
    };

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reveal();
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return;
    }

    node.classList.add("architecture-pre-reveal");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.22 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={diagramRef}
      className="architecture-diagram"
      aria-label="Laraskills layered knowledge architecture"
    >
      <div className="architecture-flow-grid">
        <LayerCard layer={layers[0]} index={0} />
        <FlowConnector label="defines" delay="520ms" />
        <LayerCard layer={layers[1]} index={1} />
        <FlowConnector label="routes" delay="940ms" />
        <LayerCard layer={layers[2]} index={2} />
      </div>
    </div>
  );
}
