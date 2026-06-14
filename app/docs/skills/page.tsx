import Card from "@/components/Card";

export const metadata = {
  title: "Skills — Laraskills",
  description:
    "Laraskills skill workflows provide AI coding agents with structured Laravel development capabilities.",
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
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Skills
      </h1>

      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        Laraskills skill workflows define structured capabilities that AI
        coding agents can use when working with Laravel projects. Each skill
        bundles knowledge units, rules, and contextual retrieval workflows
        into a repeatable capability.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Skill categories
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
    </>
  );
}
