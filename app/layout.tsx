import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Laraskills — Laravel AI Engineering Knowledge System",
  description:
    "Laravel-focused AI coding-agent operating layer and engineering knowledge system.",
  openGraph: {
    title: "Laraskills — Laravel AI Engineering Knowledge System",
    description:
      "Laravel-focused AI coding-agent operating layer and engineering knowledge system.",
    siteName: "Laraskills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
