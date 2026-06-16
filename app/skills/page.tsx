import Card from "@/components/Card";
import Button from "@/components/Button";
import PageContainer from "@/components/PageContainer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Laraskills skills give AI coding agents structured Laravel development capabilities — from models and controllers to testing and deployment.",
  openGraph: {
    title: "Skills — Laraskills",
    description:
      "Laraskills skills give AI coding agents structured Laravel development capabilities — from models and controllers to testing and deployment.",
  },
  twitter: {
    title: "Skills — Laraskills",
    description:
      "Laraskills skills give AI coding agents structured Laravel development capabilities — from models and controllers to testing and deployment.",
  },
};

const skillCategories = [
  {
    name: "Core Application Engineering",
    description:
      "Models, controllers, routing, service providers, and middleware patterns.",
  },
  {
    name: "Testing & Reliability",
    description:
      "Pest and PHPUnit workflows, feature tests, test factories, and CI integration.",
  },
  {
    name: "Security & Identity",
    description:
      "Authentication, authorization, Sanctum, Jetstream, and security best practices.",
  },
  {
    name: "Data & Persistence",
    description:
      "Eloquent ORM, migrations, seeding, query scopes, and database optimization.",
  },
  {
    name: "API & Integration",
    description:
      "API resources, form requests, API documentation, and third-party integrations.",
  },
  {
    name: "Infrastructure & DevOps",
    description:
      "Deployment, environment configuration, queue management, and monitoring.",
  },
];

export default function SkillsPage() {
  return (
    <>
      <div className="hero-shell">
        <PageContainer>
          <div className="max-w-2xl">
            <div className="section-eyebrow">Capabilities</div>
            <h1 className="hero-reveal text-4xl font-bold tracking-tight text-text sm:text-5xl font-display">
              Skills
            </h1>
            <p className="hero-reveal hero-delay-1 mt-4 text-lg text-text-muted leading-relaxed max-w-xl">
              Laraskills skills are structured, repeatable capabilities that
              give AI coding agents deep Laravel expertise — not just
              documentation, but actionable workflows.
            </p>
          </div>
        </PageContainer>
      </div>

      <PageContainer>
        <section className="mb-16">
          <h2 className="section-title">What are skills?</h2>
          <p className="section-lead mb-8">
            Each skill bundles knowledge units, rules, and retrieval workflows
            into a focused capability. When an AI coding agent uses a skill,
            it gets everything it needs to complete a specific Laravel
            development task — from the underlying concepts to the concrete
            implementation patterns.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="text-sm font-semibold text-accent">Knowledge</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Curated Laravel engineering knowledge units covering every
                aspect of the framework.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-accent">Rules</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Best-practice rules and conventions that guide the agent
                toward idiomatic Laravel code.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm font-semibold text-accent">Workflows</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Step-by-step retrieval and reasoning workflows that keep the
                agent on track.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">Skill categories</h2>
          <p className="section-lead mb-8">
            Skills are organized by domain, covering the full Laravel
            development lifecycle.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((cat) => (
              <Card key={cat.name}>
                <h3 className="text-sm font-semibold text-text">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">
                  {cat.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="section-title">Why skills matter for AI agents</h2>
          <p className="section-lead mb-8">
            Without structured skills, AI coding agents rely on general
            knowledge and produce generic code. Laraskills skills give agents
            Laravel-specific context, reducing guesswork, improving
            consistency, and following framework conventions automatically.
          </p>
          <Button href="/docs/skills" variant="primary" size="lg">
            Explore skills documentation &rarr;
          </Button>
        </section>
      </PageContainer>
    </>
  );
}
