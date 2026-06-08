"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setOpen(false);
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/65 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <ButtonLink href="#contact" variant="primary" size="md">
            Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v: boolean) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          open ? "block border-t border-line bg-canvas" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 text-sm text-ink hover:bg-card"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <ButtonLink href="#contact" variant="primary" size="lg">
              Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
