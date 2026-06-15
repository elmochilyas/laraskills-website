"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebarLinks = [
  { label: "Overview", href: "/docs" },
  { label: "Getting Started", href: "/docs/getting-started" },
  { label: "Installation", href: "/docs/installation" },
  { label: "CLI Reference", href: "/docs/cli" },
  { label: "MCP Support", href: "/docs/mcp" },
  { label: "OpenCode Setup", href: "/docs/opencode-setup" },
  { label: "Integrations", href: "/docs/integrations" },
  { label: "Skills", href: "/docs/skills" },
];

function SidebarNav({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col py-4 px-3 gap-1">
      {sidebarLinks.map((link) => {
        const isActive =
          link.href === "/docs"
            ? pathname === "/docs"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-brand/10 text-brand font-medium"
                : "text-text-muted hover:text-text hover:bg-bg"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function DocsSidebar() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const close = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  return (
    <>
      {/* Mobile open button */}
      <button
        onClick={openDrawer}
        className="flex lg:hidden items-center gap-2 px-4 py-3 text-sm text-text-muted hover:text-text transition-colors border-b border-border bg-bg w-full"
        aria-label="Open docs navigation"
      >
        <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span>Docs menu</span>
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-bg-alt border-r border-border transform transition-transform duration-200 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 h-14">
          <span className="text-sm font-semibold text-text">Docs</span>
          <button
            onClick={close}
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-bg transition-colors"
            aria-label="Close navigation"
          >
            <svg className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
        </div>
        <SidebarNav onLinkClick={close} />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:block shrink-0 border-r border-border bg-bg-alt transition-all duration-200 ${
          collapsed ? "w-12" : "w-56"
        }`}
      >
        <div className="sticky top-14">
          <div className="flex items-center justify-end border-b border-border h-10 px-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="inline-flex items-center justify-center rounded-md p-1.5 text-text-muted hover:text-text hover:bg-bg transition-colors"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {collapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                )}
              </svg>
            </button>
          </div>
          {!collapsed && <SidebarNav />}
        </div>
      </aside>
    </>
  );
}
