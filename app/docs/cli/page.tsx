import CliCommandCard from "@/components/CliCommandCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLI Reference",
  description:
    "Complete documentation for the Laraskills CLI commands: install, retrieve, search, get, validate, doctor.",
  openGraph: {
    title: "CLI Reference — Laraskills",
    description:
      "Complete documentation for the Laraskills CLI commands: install, retrieve, search, get, validate, doctor.",
  },
  twitter: {
    title: "CLI Reference — Laraskills",
    description:
      "Complete documentation for the Laraskills CLI commands: install, retrieve, search, get, validate, doctor.",
  },
};

const commands = [
  {
    name: "install",
    command: "laraskills install",
    description:
      "Install Laraskills intelligence layer — knowledge units, rules, and skill workflows for your project.",
  },
  {
    name: "retrieve",
    command: "laraskills retrieve \"<task description>\"",
    description:
      "Retrieve a context bundle for a Laravel engineering task. Returns the most relevant knowledge units, rules, and skills.",
  },
  {
    name: "search",
    command: "laraskills search \"<query>\"",
    description:
      "Search the knowledge unit catalog. Returns ranked results with relevance scores.",
  },
  {
    name: "get",
    command: "laraskills get <unit-id>",
    description:
      "Inspect a single knowledge unit by ID. Shows metadata, prerequisites, and related topics.",
  },
  {
    name: "validate",
    command: "laraskills validate",
    description:
      "Validate the structural integrity of the installed intelligence layer. Checks for cycles, dangling edges, and consistency.",
  },
  {
    name: "doctor",
    command: "laraskills doctor",
    description:
      "Run system diagnostics to verify Laraskills is installed and configured correctly.",
  },
];

export default function CliPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        CLI Reference
      </h1>
      <p className="mt-3 text-lg text-text-muted leading-relaxed">
        Laraskills provides a set of CLI commands to install, retrieve, search,
        and manage the knowledge intelligence layer.
      </p>

      <div className="mt-10 space-y-8">
        {commands.map((cmd, index) => (
          <div key={cmd.name}>
            <h2 className="text-xl font-semibold text-text mb-2 capitalize">
              {cmd.name}
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mb-3">
              {cmd.description}
            </p>
            <div className="max-w-xl">
              <CliCommandCard
                command={cmd.command}
                label={cmd.name}
                index={index}
                isActive={false}
                onHover={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
