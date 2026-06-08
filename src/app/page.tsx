import Image from "next/image";
import { ArrowUpRight, Bolt, Cpu, Heart, Sparkles, Timer, Wand2 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const featuredWork = [
  {
    title: "Simos Mediterranean Food",
    category: "Restaurant Brand Website",
    outcome: "Modern presence with premium visuals and clear conversion paths."
  },
  {
    title: "Personal Radio Website",
    category: "Personal Brand Website",
    outcome: "Clean layout built to showcase content, identity, and consistency."
  }
];

const services = [
  {
    title: "Business Websites",
    description:
      "Premium design, clear messaging, and pages built to convert visitors into leads."
  },
  {
    title: "Hotel Websites",
    description:
      "Elegant presentation, fast loading, and structure that supports SEO and bookings."
  },
  {
    title: "Restaurant Websites",
    description:
      "Menu-first design, beautiful photography framing, and frictionless reservations."
  },
  {
    title: "Website Redesign",
    description:
      "Upgrade your existing website with modern aesthetics, speed, and a stronger story."
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
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pb-16 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
            <Reveal className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-xs text-muted">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                Independent digital studio · Greece
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
                Premium Websites for Modern Businesses
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Beautiful, high-performing websites designed to help businesses stand
                out and grow online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="#contact" variant="primary" size="lg">
                  Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href="#work" variant="secondary" size="lg">
                  View Work
                </ButtonLink>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-card px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Design
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Premium layouts with strong hierarchy.
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-card px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Strategy
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Messaging that connects to real goals.
                  </div>
                </div>
                <div className="rounded-2xl border border-line bg-card px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                    Build
                  </div>
                  <div className="mt-1 leading-relaxed">
                    Fast, responsive, SEO-ready delivery.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-card shadow-lift">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,91,78,0.12),transparent_55%)]" />
                <div className="relative p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                      MANOSBUILDS
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/40 px-3 py-1 text-xs text-muted">
                      AI-powered
                      <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-2xl border border-line">
                    <Image
                      src="/images/portrait.svg"
                      alt="Portrait photo used for MANOSBUILDS"
                      width={900}
                      height={1100}
                      priority
                      unoptimized
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-line bg-white/40 px-4 py-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <Wand2 className="h-4 w-4 text-accent" aria-hidden />
                        Premium aesthetics
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-muted">
                        Minimal, modern, and warm.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-line bg-white/40 px-4 py-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <Bolt className="h-4 w-4 text-accent" aria-hidden />
                        High performance
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-muted">
                        Speed-focused, built for results.
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

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {featuredWork.map((p) => (
                <Reveal key={p.title} className="h-full">
                  <div className="group h-full rounded-3xl border border-line bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                          {p.category}
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                          {p.title}
                        </h3>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/30 text-muted transition group-hover:text-ink">
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </div>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {p.outcome}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Design", "Build", "Performance"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-white/40 px-3 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7">
                      <a
                        href="mailto:manos@manosbuilds.com?subject=Case%20study%20request"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink/40"
                      >
                        Request the full case study{" "}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  </div>
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

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <Reveal key={s.title} className="h-full">
                  <div className="h-full rounded-3xl border border-line bg-card p-7 transition hover:-translate-y-1 hover:shadow-lift">
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </div>
                </Reveal>
              ))}
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

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <Reveal key={r.title}>
                    <div className="rounded-3xl border border-line bg-card p-7">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-white/40 text-accent">
                          <Icon className="h-4 w-4" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-ink">
                            {r.title}
                          </h3>
                          <p className="mt-2 text-base leading-relaxed text-muted">
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

            <div className="mt-12 grid gap-4">
              {process.map((step, idx) => (
                <Reveal key={step.title}>
                  <div className="rounded-3xl border border-line bg-card p-7">
                    <div className="grid gap-4 md:grid-cols-12 md:items-start">
                      <div className="md:col-span-3">
                        <div className="inline-flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-white/40 text-sm font-semibold text-ink">
                            {idx + 1}
                          </div>
                          <div className="text-sm font-semibold tracking-tight text-ink">
                            {step.title}
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-9">
                        <p className="text-base leading-relaxed text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
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
              <Reveal className="md:col-span-5">
                <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-sm">
                  <Image
                    src="/images/portrait.svg"
                    alt="Portrait photo of Manolis"
                    width={900}
                    height={1100}
                    unoptimized
                    className="h-auto w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal className="md:col-span-7">
                <div className="rounded-3xl border border-line bg-card p-7">
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    I’m Manolis, the person behind MANOSBUILDS—an independent digital
                    studio based in Greece. My background combines psychology,
                    coaching, music production, and building websites with AI-assisted
                    development.
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                    That mix shapes how I work: I care about clarity, emotion,
                    aesthetics, and making sure your website communicates trust. The
                    goal is a premium experience that feels human—and performs.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href="#contact" variant="primary" size="lg">
                      Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </ButtonLink>
                    <ButtonLink href="#services" variant="secondary" size="lg">
                      Explore services
                    </ButtonLink>
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

            <div className="mt-10 grid gap-5 md:grid-cols-12">
              <Reveal className="md:col-span-7">
                <div className="rounded-3xl border border-line bg-card p-7">
                  <div className="text-sm font-semibold text-ink">Email</div>
                  <a
                    href="mailto:manos@manosbuilds.com"
                    className="mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-ink underline decoration-line underline-offset-4 hover:decoration-ink/40"
                  >
                    manos@manosbuilds.com{" "}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink
                      href="mailto:manos@manosbuilds.com?subject=Website%20project"
                      variant="primary"
                      size="lg"
                    >
                      Start a Project <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </ButtonLink>
                    <CopyEmailButton email="manos@manosbuilds.com" />
                  </div>

                  <div className="mt-7 rounded-2xl border border-line bg-white/40 px-4 py-4 text-sm leading-relaxed text-muted">
                    If you already have brand assets (logo, photos, copy), attach them
                    in your email—or send a drive link. I can also help refine copy and
                    structure.
                  </div>
                </div>
              </Reveal>

              <Reveal className="md:col-span-5">
                <div className="rounded-3xl border border-line bg-card p-7">
                  <div className="text-sm font-semibold text-ink">What to send</div>
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
