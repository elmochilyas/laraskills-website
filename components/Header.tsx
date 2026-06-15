"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Skills", href: "/skills" },
  { label: "MCP", href: "/mcp" },
  { label: "Research", href: "/research" },
  { label: "Glossary", href: "/glossary" },
  { label: "GitHub", href: "https://github.com/elmochilyas/laraskills", external: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="glass-strong sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-text hover:text-brand transition-colors duration-200"
        >
          Laraskills
        </Link>

        <nav className="hidden items-center gap-0.5 sm:flex">
          {navLinks.map((link) => {
            const isActive = !link.external && (
              link.href === "/docs"
                ? pathname === "/docs" || pathname.startsWith("/docs/")
                : pathname === link.href
            );
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-brand bg-brand-subtle font-medium"
                    : "text-text-muted hover:text-text hover:bg-white/[0.04]"
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
