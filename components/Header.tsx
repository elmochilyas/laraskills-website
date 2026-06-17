"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatedHeaderLogo } from "@/components/AnimatedHeaderLogo";

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Skills", href: "/docs/skills" },
  { label: "MCP", href: "/docs/mcp" },
  { label: "Research", href: "/research" },
  { label: "Glossary", href: "/glossary" },
  { label: "GitHub", href: "https://github.com/elmochilyas/laraskills", external: true },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12" />
  </svg>
);

/* ── glass pill that slides behind active nav item ── */
function ActivePill({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute inset-0 -z-10 rounded-lg bg-brand/10 transition-all duration-300 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function NavLink({
  link,
  pathname,
  onClick,
}: {
  link: (typeof navLinks)[number];
  pathname: string;
  onClick?: () => void;
}) {
  const isActive = !link.external && (link.href === "/docs"
    ? pathname === "/docs" || pathname.startsWith("/docs/")
    : pathname === link.href);

  return (
    <Link
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className="group relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm transition-all duration-200"
    >
      <ActivePill active={isActive} />

      {/* terminal-style prefix that appears on hover */}
      <span className="w-0 overflow-hidden whitespace-nowrap text-text-dim/30 font-mono text-[10px] transition-all duration-200 group-hover:w-[10px]">
        &gt;
      </span>

      {link.label === "GitHub" ? (
        <span className="relative z-10 text-text-muted transition-colors duration-200 group-hover:text-text">
          <GitHubIcon />
        </span>
      ) : (
        <span
          className={`relative z-10 transition-colors duration-200 ${
            isActive ? "text-brand font-medium" : "text-text-muted group-hover:text-text"
          }`}
        >
          {link.label}
        </span>
      )}
    </Link>
  );
}

/* ── "npm install" pill ── */
function InstallPill() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("npm install --save-dev laraskills").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group relative hidden items-center gap-2 rounded-full border border-[#2a2a38] bg-[#0f0f15] px-3 py-1 text-[11px] font-mono text-text-dim transition-all duration-200 hover:border-brand/20 hover:text-text hover:shadow-[0_0_16px_rgba(230,57,70,0.06)] lg:flex"
    >
      <span className="text-brand/60">$</span>
      <span>npm i laraskills</span>
      <span className="h-3 w-px bg-[#2a2a38]" />
      <span className="text-[10px] transition-all duration-200 group-hover:text-brand/80">
        {copied ? (
          <span className="text-accent">done</span>
        ) : (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </span>
    </button>
  );
}

/* ── hamburger that morphs into an upward arrow ── */
function MenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
      className="group relative z-50 flex h-9 w-9 items-center justify-center rounded-xl text-text-muted transition-all duration-200 hover:text-text hover:bg-white/[0.04] sm:hidden"
    >
      <span className="flex flex-col items-center gap-[3.5px] transition-all duration-300 group-active:scale-90">
        <span
          className={`block h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "w-4 translate-y-[4.5px] -rotate-45" : "w-4"
          }`}
        />
        <span
          className={`block h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "w-4 opacity-0" : "w-3"
          }`}
        />
        <span
          className={`block h-[1.5px] rounded-full bg-current transition-all duration-300 ${
            open ? "w-4 -translate-y-[4.5px] rotate-45" : "w-4"
          }`}
        />
      </span>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* ── backdrop layer ── */}
      <div
        className={`absolute inset-0 -z-10 border-b transition-all duration-500 ${
          scrolled
            ? "border-[rgba(230,57,70,0.06)] bg-[rgba(11,11,15,0.82)] backdrop-blur-2xl"
            : "border-transparent bg-[rgba(11,11,15,0.5)] backdrop-blur-lg"
        }`}
      />

      {/* ── subtle brand glow at center bottom on scroll ── */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-px max-w-md transition-opacity duration-700 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="mx-auto -mt-[3px] h-[6px] w-24 rounded-full bg-brand/20 blur-md" />
      </div>

      <div className={`mx-auto flex max-w-[1200px] items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${
        scrolled ? "h-14" : "h-16"
      }`}>
        {/* ── logo ── */}
        <Link
          href="/"
          aria-label="LaraSkills home"
          className="group relative flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <AnimatedHeaderLogo />
        </Link>

        {/* ── desktop nav ── */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.slice(0, -1).map((link) => (
            <NavLink key={link.label} link={link} pathname={pathname} />
          ))}

          <span className="mx-2 h-4 w-px bg-[#2a2a38]/60" />

          {/* GitHub icon + install pill */}
          <NavLink link={navLinks[navLinks.length - 1]} pathname={pathname} />
          <InstallPill />
        </nav>

        {/* ── mobile toggle ── */}
        <MenuToggle open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* ── mobile overlay ── */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 transition-opacity duration-500 sm:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* dark backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

        {/* decorative gradient orbs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand/8 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* ── mobile drawer ── */}
      <div
        className={`fixed inset-y-0 right-0 z-40 flex w-72 flex-col border-l border-[#1e1e2a] bg-[#0b0b0f]/90 backdrop-blur-2xl transition-all duration-400 sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* decorative watermark */}
        <div className="pointer-events-none absolute -right-10 bottom-10 select-none text-[12rem] font-display font-black leading-none text-white/[0.015]">
          L
        </div>

        {/* header */}
        <div className="relative flex h-16 items-center justify-between border-b border-[#1e1e2a] px-5">
          <span className="font-display text-sm font-semibold tracking-wider text-text-muted uppercase">
            Navigate
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:text-text hover:bg-white/[0.04]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* links */}
        <nav className="flex flex-col gap-1.5 p-4 pt-6">
          {navLinks.map((link, i) => {
            const isActive = !link.external && (link.href === "/docs"
              ? pathname === "/docs" || pathname.startsWith("/docs/")
              : pathname === link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="group relative overflow-hidden rounded-xl px-4 py-3 transition-all duration-200"
                style={{
                  animation: menuOpen
                    ? `slideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.04}s both`
                    : "none",
                }}
              >
                {/* background fill on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/[0.03] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {/* active left bar */}
                {isActive && (
                  <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-brand" />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  {link.label === "GitHub" ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1a1a28] text-text-muted">
                      <GitHubIcon />
                    </span>
                  ) : (
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-mono font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-brand/15 text-brand"
                          : "bg-[#1a1a28] text-text-dim group-hover:bg-[#222233]"
                      }`}
                    >
                      {i + 1}
                    </span>
                  )}
                  <span
                    className={`text-sm transition-colors duration-200 ${
                      isActive ? "text-brand font-medium" : "text-text-muted group-hover:text-text"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* install command at bottom */}
        <div className="mt-auto border-t border-[#1e1e2a] px-4 py-4">
          <InstallPill />
        </div>

        {/* style for slide animation */}
        <style>{`
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px) scale(0.96); }
            to { opacity: 1; transform: translateX(0) scale(1); }
          }
        `}</style>
      </div>
    </header>
  );
}
