export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-xs tracking-wide text-muted">
          © {new Date().getFullYear()} MANOSBUILDS
        </div>
        <div className="flex items-center gap-6 text-xs text-muted">
          <a className="hover:text-ink" href="mailto:manos@manosbuilds.com">
            manos@manosbuilds.com
          </a>
          <a className="hover:text-ink" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
