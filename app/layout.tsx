import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laraskills",
  description:
    "Laravel-focused AI coding-agent operating layer and engineering knowledge system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
