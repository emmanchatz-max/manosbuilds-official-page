import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold tracking-[0.22em] text-ink outline-none"
      aria-label="MANOSBUILDS home"
    >
      <span className="uppercase">Manosbuilds</span>
      <span className="h-px w-8 bg-line transition-colors group-hover:bg-ink/25" />
    </Link>
  );
}
