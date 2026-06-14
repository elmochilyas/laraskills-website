import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Home() {
  return (
    <Section>
      <PageContainer>
        <div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Laraskills
          </h1>
          <p className="mt-4 max-w-lg text-lg text-text-muted">
            Laravel-focused AI coding-agent operating layer and engineering
            knowledge system.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button href="https://github.com/elmochilyas/laraskills">
              Get Started
            </Button>
            <Button variant="secondary" href="/docs">
              Read the Docs
            </Button>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
