"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Skills", href: "/skills" },
  { label: "MCP", href: "/mcp" },
  { label: "Research", href: "/research" },
  { label: "GitHub", href: "https://github.com/elmochilyas/laraskills", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-text hover:text-brand transition-colors"
        >
          Laraskills
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => {
            const isActive = !link.external && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-brand"
                    : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
