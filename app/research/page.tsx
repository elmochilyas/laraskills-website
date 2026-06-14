import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Research — Laraskills",
  description: "Research and evidence behind the Laraskills engineering knowledge system.",
};

export default function ResearchPage() {
  return (
    <Section>
      <PageContainer>
        <div className="mx-auto max-w-2xl text-center py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Research
          </h1>
          <p className="mt-4 text-text-muted">
            The full research paper and methodology for the attribution study will be published here. The study measures how Laraskills affects coding agent performance on Laravel implementation tasks.
          </p>
          <div className="mt-8">
            <Button variant="secondary" href="/">
              Back to homepage
            </Button>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
