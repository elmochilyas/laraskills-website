import Link from "next/link";

const footerLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Glossary", href: "/glossary" },
  { label: "GitHub", href: "https://github.com/elmochilyas/laraskills", external: true },
  { label: "MCP", href: "/mcp" },
  { label: "Research", href: "/research" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-alt">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-text hover:text-brand transition-colors duration-200"
            >
              Laraskills
            </Link>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Laravel-focused AI coding-agent operating layer and engineering
              knowledge system.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-text-muted transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-text-muted/60">
          &copy; {new Date().getFullYear()} Laraskills. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
