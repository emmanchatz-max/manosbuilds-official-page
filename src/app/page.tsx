import {
  ArrowUpRight,
  Bolt,
  Briefcase,
  Cpu,
  Heart,
  Hotel,
  RefreshCcw,
  Sparkles,
  Timer,
  UtensilsCrossed,
  Wand2
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StudioImage } from "@/components/StudioImage";

const featuredWork = [
  {
    title: "Simos Mediterranean Food",
    category: "Restaurant Brand Website",
    outcome: "Modern presence with premium visuals and clear conversion paths.",
    highlights: ["Editorial layout", "Mobile-first", "Performance-focused"]
  },
  {
    title: "Personal Radio Website",
    category: "Personal Brand Website",
    outcome: "Clean layout built to showcase content, identity, and consistency.",
    highlights: ["Clear hierarchy", "Content-driven", "Consistent branding"]
  }
];

const services = [
  {
    title: "Business Websites",
    description:
      "Premium design, clear messaging, and pages built to convert visitors into leads.",
    icon: Briefcase
  },
  {
    title: "Hotel Websites",
    description:
      "Elegant presentation, fast loading, and structure that supports SEO and bookings.",
    icon: Hotel
  },
  {
    title: "Restaurant Websites",
    description:
      "Menu-first design, beautiful photography framing, and frictionless reservations.",
    icon: UtensilsCrossed
  },
  {
    title: "Website Redesign",
    description:
      "Upgrade your existing website with modern aesthetics, speed, and a stronger story.",
    icon: RefreshCcw
  }
];

const reasons = [
  {
    icon: Sparkles,
    title: "AI-powered workflows",
    description: "Faster iteration, cleaner execution, and more time for what matters."
  },
  {
    icon: Cpu,
    title: "Modern technology",
    description:
      "Built with a modern stack for speed, reliability, and long-term maintainability."
  },
  {
    icon: Heart,
    title: "Human-centered approach",
    description:
      "Psychology + coaching background means better clarity, alignment, and outcomes."
  },
  {
    icon: Timer,
    title: "Efficient process",
    description: "A focused, four-step workflow designed to ship quickly and confidently."
  },
  {
    icon: Bolt,
    title: "Aesthetics + results",
    description: "Design that feels premium and supports your business goals."
  }
];

const process = [
  {
    title: "Discover",
    description: "Understand your business, audience, and what a successful site must do."
  },
  {
    title: "Design",
    description: "Create a clean, premium interface with strong hierarchy and messaging."
  },
  {
    title: "Build",
    description: "Develop a fast, responsive site with modern standards and accessibility."
  },
  {
    title: "Launch",
    description:
      "Deploy, polish, and make sure everything is ready to perform from day one."
  }
];

export default function Home() {
  return (
    <div id="top" className="min-h-dvh">
      <Navbar />

      <main id="content">
        <section className="relative mx-auto max-w-6xl px-5 pb-12 pt-10 md:pb-20 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-[380px] max-w-6xl bg-[radial-gradient(900px_520px_at_30%_10%,rgba(47,91,78,0.14),transparent_60%),radial-gradient(820px_520px_at_80%_20%,rgba(0,0,0,0.06),transparent_60%)] blur-2xl"
          />

          <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
            <Reveal className="md:col-span-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-2 text-xs text-muted shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                  Independent digital studio · Greece
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/40 px-4 py-2 text-xs text-muted">
                  AI-powered workflow <Sparkles className="h-3.5 w-3.5" aria-hidden />
                </div>
              </div>

              <h1 className="mt-7 text-5xl font-semibold tracking-tight text-ink md:text-7xl md:leading-[1.05]">
                Premium Websites for Modern Businesses
              </h1>

              <div className="mt-7 md:hidden">
                <div className="relative overflow-hidden rounded-[32px] border border-line bg-card/80 p-3 shadow-lift">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,10,10,0.22)),radial-gradient(900px_420px_at_20%_0%,rgba(47,91,78,0.16),transparent_62%)]" />
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="hero-color-a absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(47,91,78,0.22),transparent_62%)] blur-3xl" />
                    <div className="hero-color-b absolute -right-24 -top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(215,166,106,0.16),transparent_62%)] blur-3xl" />
                  </div>
                  <div className="relative">
                    <StudioImage
                      src="/images/portrait.png"
                      fallbackSrc="/images/portrait.svg"
                      alt="Founder portrait of Manolis"
                      className="aspect-[4/5] rounded-[26px]"
                    />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                        Founder-led studio
                      </div>
                      <div className="mt-1 text-sm font-medium">
                        Personal premium digital studio by Manolis
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Beautiful, high-performing websites designed to help businesses stand
                out and grow online.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#contact" variant="primary" size="lg">
                  Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href="#work" variant="secondary" size="lg">
                  View Work
                </ButtonLink>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 text-xs text-muted">
                {["Hotels", "Restaurants", "Local businesses", "Modern brands"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-card/70 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-card/70 px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Design
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Premium layouts with strong hierarchy.
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-card/70 px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Strategy
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Messaging that connects to real goals.
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-card/70 px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Build
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Fast, responsive, SEO-ready delivery.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="hidden md:block md:col-span-6">
              <div className="relative overflow-hidden rounded-[36px] border border-line bg-card/85 p-4 shadow-lift">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(11,10,10,0.18)),radial-gradient(circle_at_top,rgba(47,91,78,0.12),transparent_55%)]" />
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="hero-color-a absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(47,91,78,0.22),transparent_62%)] blur-3xl" />
                  <div className="hero-color-b absolute -right-24 -top-28 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(215,166,106,0.18),transparent_62%)] blur-3xl" />
                  <div className="hero-color-c absolute left-1/3 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12),transparent_60%)] blur-3xl" />
                </div>
                <div className="relative">
                  <StudioImage
                    src="/images/portrait.png"
                    fallbackSrc="/images/portrait.svg"
                    alt="Founder portrait of Manolis"
                    className="aspect-[4/5] rounded-[28px]"
                  />
                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/15 bg-black/30 p-5 text-white backdrop-blur-md">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      Founder-led studio
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-tight">
                      Personal premium digital studio by Manolis
                    </div>
                    <div className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                      Design taste, business clarity, and modern technology in one
                      founder-led process.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
            <Reveal>
              <div className="relative overflow-hidden rounded-[36px] border border-line bg-card/80 p-4 shadow-lift">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,91,78,0.12),transparent_55%)]" />
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="hero-color-a absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(47,91,78,0.18),transparent_62%)] blur-3xl" />
                  <div className="hero-color-b absolute -right-24 -top-28 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(215,166,106,0.14),transparent_62%)] blur-3xl" />
                </div>
                <div className="relative grid gap-5 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-8">
                    <div className="group relative overflow-hidden rounded-3xl border border-line bg-white/40">
                      <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(22,22,21,0.18),transparent_45%),linear-gradient(180deg,transparent_55%,rgba(11,10,10,0.45)),radial-gradient(900px_420px_at_20%_0%,rgba(47,91,78,0.18),transparent_62%)]" />
                      <div className="relative aspect-[16/10]">
                        <StudioImage
                          src="/images/workspace.png"
                          fallbackSrc="/images/workspace-placeholder.svg"
                          alt="Premium workspace for MANOSBUILDS"
                          className="hero-swap-a absolute inset-0"
                          imgClassName="transition duration-700 group-hover:scale-[1.02]"
                        />
                        <StudioImage
                          src="/images/workspace.png"
                          fallbackSrc="/images/workspace-placeholder.svg"
                          alt=""
                          className="hero-swap-b absolute inset-0"
                          imgClassName="scale-[1.06] object-[50%_30%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-6 border-t border-line bg-card/80 px-4 py-3 backdrop-blur">
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                            Supporting studio visual
                          </div>
                          <div className="text-xs text-muted">Workspace · Process · Quality</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 md:col-span-4">
                    <div className="rounded-2xl border border-line bg-white/45 px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-lift">
                      <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <Wand2 className="h-4 w-4 text-accent" aria-hidden />
                        Premium aesthetics
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-muted">
                        Luxury simplicity with editorial balance.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-line bg-white/45 px-4 py-4 transition hover:-translate-y-0.5 hover:shadow-lift">
                      <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <Bolt className="h-4 w-4 text-accent" aria-hidden />
                        High performance
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-muted">
                        Fast pages, clean UX, SEO-ready structure.
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-line bg-white/40">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.05))]" />
                      <div className="relative aspect-[9/16]">
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="text-center">
                            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                              Mobile Mockup
                            </div>
                            <div className="mt-2 text-sm text-muted">
                              Drop screenshots here
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-card/80 px-4 py-3 text-xs text-muted backdrop-blur">
                        Designed for conversion & clarity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="work" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Work"
                title="Selected projects"
                description="A small set of launches. Designed to scale as more work is added."
              />
            </Reveal>

            <div className="mt-12 grid gap-6">
              {featuredWork.map((p) => (
                <Reveal key={p.title}>
                  <article className="group overflow-hidden rounded-[36px] border border-line bg-card/75 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-lift">
                    <div className="grid gap-0 md:grid-cols-12">
                      <div className="p-4 md:col-span-7 md:p-6">
                        <div className="relative overflow-hidden rounded-3xl border border-line bg-white/40">
                          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(22,22,21,0.10),transparent_55%),radial-gradient(900px_520px_at_18%_0%,rgba(47,91,78,0.18),transparent_60%)] transition duration-300 group-hover:scale-[1.02]" />
                          <div className="relative aspect-[16/10]">
                            <div className="absolute inset-0 grid place-items-center">
                              <div className="text-center">
                                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                  Project screenshot
                                </div>
                                <div className="mt-2 text-sm text-muted">
                                  Add a real preview image later
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-6 border-t border-line bg-card/80 px-4 py-3 text-xs text-muted backdrop-blur">
                              <span className="font-semibold uppercase tracking-[0.22em] text-ink">
                                Case study
                              </span>
                              <span className="hidden sm:inline">
                                Hover for detail · Built for performance
                              </span>
                            </div>
                          </div>

                          <div className="pointer-events-none absolute bottom-5 right-5 hidden w-[132px] overflow-hidden rounded-2xl border border-line bg-white/55 shadow-[0_12px_30px_rgba(0,0,0,0.10)] md:block">
                            <div className="aspect-[9/16] bg-[linear-gradient(180deg,rgba(0,0,0,0.04),transparent_55%)]" />
                            <div className="border-t border-line bg-card/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                              Mobile
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between gap-6 p-6 md:col-span-5 md:p-8">
                        <div>
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                                {p.category}
                              </div>
                              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-[34px] md:leading-[1.12]">
                                {p.title}
                              </h3>
                            </div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/30 text-muted transition group-hover:-translate-y-0.5 group-hover:text-ink">
                              <ArrowUpRight className="h-4 w-4" aria-hidden />
                            </div>
                          </div>

                          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                            {p.outcome}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {p.highlights.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-line bg-white/40 px-3 py-1.5 text-xs text-muted"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <a
                            href="mailto:manos@manosbuilds.com?subject=Case%20study%20request"
                            className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink/40"
                          >
                            Request the full case study{" "}
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </a>
                          <span className="hidden text-xs text-muted md:inline">
                            Design · Build · Launch
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Services"
                title="Designed for premium online presence"
                description="Focused offerings for businesses that want a modern, elegant website that performs."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} className="h-full">
                    <div className="group relative h-full overflow-hidden rounded-[32px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-lift">
                      <div className="absolute inset-0 bg-[radial-gradient(600px_280px_at_20%_0%,rgba(47,91,78,0.14),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/45 text-accent shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                            <Icon className="h-5 w-5" aria-hidden />
                          </div>
                          <div className="rounded-full border border-line bg-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                            Premium
                          </div>
                        </div>

                        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                          {s.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
                          {["Design", "Copy clarity", "Performance"].map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-line bg-white/40 px-3 py-1.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Why MANOSBUILDS"
                title="Premium work, modern workflow, human approach"
                description="A studio-style partnership that blends aesthetics, strategy, and efficient building."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title}>
                    <div className="group relative overflow-hidden rounded-[32px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-lift">
                      <div className="absolute inset-0 bg-[radial-gradient(700px_280px_at_20%_0%,rgba(47,91,78,0.12),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="relative flex items-start gap-4">
                        <div className="mt-0.5 flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/45 text-accent shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-ink">
                            {r.title}
                          </h3>
                          <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                            {r.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Process"
                title="A simple four-step timeline"
                description="Clear, focused, and built for momentum. No bloat—just a premium result."
              />
            </Reveal>

            <div className="relative mt-12">
              <div
                aria-hidden
                className="absolute left-6 top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-transparent via-line to-transparent"
              />
              <div className="grid gap-4">
                {process.map((step, idx) => (
                  <Reveal key={step.title}>
                    <div className="group relative pl-14">
                      <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-card/80 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition group-hover:-translate-y-0.5 group-hover:shadow-lift">
                        {idx + 1}
                      </div>
                      <div className="relative overflow-hidden rounded-[32px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition group-hover:-translate-y-1 group-hover:shadow-lift">
                        <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_20%_0%,rgba(47,91,78,0.12),transparent_60%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                        <div className="relative">
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                            {step.title}
                          </div>
                          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="A creator, not a traditional agency"
                description="I build modern websites with a premium feel—grounded in aesthetics, psychology, and real business needs."
              />
            </Reveal>

            <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
              <Reveal className="md:col-span-7">
                <div className="relative overflow-hidden rounded-[36px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_20%_0%,rgba(47,91,78,0.14),transparent_60%)] opacity-70" />
                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      Founder story
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                      Manolis — creator & digital builder
                    </h3>

                    <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                      I’m Manolis, the person behind MANOSBUILDS—an independent digital
                      studio based in Greece. My background blends psychology,
                      coaching, music production, and building websites with
                      AI-assisted development.
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                      That mix shapes how I work: clarity, emotion, and aesthetics—so
                      your website communicates trust and feels premium. The result is
                      a modern experience that looks beautiful and performs.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "Psychology",
                        "Coaching",
                        "Music production",
                        "AI-assisted development"
                      ].map((t) => (
                        <div
                          key={t}
                          className="rounded-2xl border border-line bg-white/45 px-4 py-4 text-sm text-muted shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                        >
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-ink">
                            {t}
                          </div>
                          <div className="mt-1 leading-relaxed">
                            Crafted into better clarity, tone, and experience.
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <ButtonLink href="#contact" variant="primary" size="lg">
                        Start a Project{" "}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </ButtonLink>
                      <ButtonLink href="#services" variant="secondary" size="lg">
                        Explore services
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="md:col-span-5">
                <div className="grid gap-4">
                  <div className="rounded-[32px] border border-line bg-card/75 p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      Studio principles
                    </div>
                    <div className="mt-4 grid gap-3">
                      {[
                        "Thoughtful design decisions",
                        "Founder-led communication",
                        "Modern tools with human taste"
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-line bg-white/45 px-4 py-4 text-sm leading-relaxed text-muted"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[32px] border border-line bg-card/75 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                    <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(22,22,21,0.10),transparent_55%),radial-gradient(900px_320px_at_20%_0%,rgba(47,91,78,0.16),transparent_62%)]" />
                    <div className="relative aspect-[16/10]">
                      <StudioImage
                        src="/images/workspace.png"
                        fallbackSrc="/images/workspace-placeholder.svg"
                        alt="Workspace photo"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 border-t border-line bg-card/80 px-4 py-3 text-xs text-muted backdrop-blur">
                      Studio environment — supporting visual
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s build something premium"
                description="Send a short note about your business and what you want your website to achieve."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <div className="relative overflow-hidden rounded-[36px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(900px_320px_at_20%_0%,rgba(47,91,78,0.14),transparent_60%)] opacity-70" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-6">
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        Email
                      </div>
                      <div className="rounded-full border border-line bg-white/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                        Response within 24h
                      </div>
                    </div>

                    <a
                      href="mailto:manos@manosbuilds.com"
                      className="mt-4 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink/40"
                    >
                      manos@manosbuilds.com{" "}
                      <ArrowUpRight className="h-5 w-5" aria-hidden />
                    </a>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <ButtonLink
                        href="mailto:manos@manosbuilds.com?subject=Website%20project"
                        variant="primary"
                        size="lg"
                      >
                        Start a Project{" "}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </ButtonLink>
                      <CopyEmailButton email="manos@manosbuilds.com" />
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-line bg-white/45 px-4 py-4 text-sm leading-relaxed text-muted">
                        If you already have brand assets (logo, photos, copy), attach
                        them in your email—or send a drive link.
                      </div>
                      <div className="rounded-2xl border border-line bg-white/45 px-4 py-4 text-sm leading-relaxed text-muted">
                        I can also help refine messaging and structure for clarity and
                        conversion.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="md:col-span-5">
                <div className="relative overflow-hidden rounded-[36px] border border-line bg-card/75 p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] md:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(700px_260px_at_20%_0%,rgba(47,91,78,0.10),transparent_60%)] opacity-60" />
                  <div className="relative">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      What to send
                    </div>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      Business type + target clients
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      Pages you need (home, services, bookings, contact)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      Examples you like (2–3 links)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                      Any deadlines or launches
                    </li>
                  </ul>

                  <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white/40">
                    <div className="relative aspect-[16/10]">
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="text-center">
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                            Project previews
                          </div>
                          <div className="mt-2 text-sm text-muted">
                            Add screenshots, mockups, or references
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-card/80 px-4 py-3 text-xs text-muted backdrop-blur">
                        Optional but helpful for direction
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
