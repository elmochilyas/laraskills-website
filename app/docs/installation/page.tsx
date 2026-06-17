import CliCommandCard from "@/components/CliCommandCard";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Install Laraskills via npm, build from source, update, and run diagnostics.",
  openGraph: {
    title: "Installation — Laraskills",
    description:
      "Install Laraskills via npm, build from source, update, and run diagnostics.",
  },
  twitter: {
    title: "Installation — Laraskills",
    description:
      "Install Laraskills via npm, build from source, update, and run diagnostics.",
  },
};

export default function InstallationPage() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-text">
        Installation
      </h1>

      <h2 className="mt-10 text-xl font-semibold text-text">
        npm install
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        Install Laraskills globally via npm:
      </p>
      <div className="mt-3 max-w-xl">
        <CliCommandCard command="npm install -g laraskills" label="npm" />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Build from source
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        Clone the repository and install dependencies:
      </p>
      <div className="mt-3 max-w-xl">
        <CliCommandCard command="git clone https://github.com/elmochilyas/laraskills.git && cd laraskills && npm install" label="Source" />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Update
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        Update to the latest version:
      </p>
      <div className="mt-3 max-w-xl">
        <CliCommandCard command="npm update -g laraskills" label="Update" />
      </div>

      <h2 className="mt-10 text-xl font-semibold text-text">
        Verify installation
      </h2>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        Run the doctor command to verify everything is working:
      </p>
      <div className="mt-3 max-w-xl">
        <CliCommandCard command="laraskills doctor" label="Doctor" />
      </div>
    </>
  );
}
