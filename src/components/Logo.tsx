import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-md px-2 py-1 text-[13px] font-semibold tracking-[0.26em] text-ink outline-none"
      aria-label="MANOSBUILDS home"
    >
      <span className="uppercase">MANOSBUILDS</span>
      <span className="h-px w-9 bg-gradient-to-r from-line via-ink/15 to-line transition-opacity group-hover:opacity-70" />
    </Link>
  );
}
