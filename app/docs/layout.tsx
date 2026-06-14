import DocsSidebar from "@/components/DocsSidebar";
import PageContainer from "@/components/PageContainer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <DocsSidebar />
      <main className="flex-1 min-w-0 py-10 md:py-16">
        <PageContainer>{children}</PageContainer>
      </main>
    </div>
  );
}
