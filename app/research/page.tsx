import type { Metadata } from "next";
import PageContainer from "@/components/PageContainer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Research",
  description: "Research and evidence behind the Laraskills engineering knowledge system.",
  openGraph: {
    title: "Research — Laraskills",
    description: "Research and evidence behind the Laraskills engineering knowledge system.",
  },
  twitter: {
    title: "Research — Laraskills",
    description: "Research and evidence behind the Laraskills engineering knowledge system.",
  },
};

export default function ResearchPage() {
  return (
    <Section>
      <PageContainer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Research — Laraskills",
              description:
                "Research and evidence behind the Laraskills engineering knowledge system.",
              url: `${siteConfig.url}/research`,
              isPartOf: {
                "@type": "WebSite",
                name: "Laraskills",
                url: siteConfig.url,
              },
            }),
          }}
        />
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
