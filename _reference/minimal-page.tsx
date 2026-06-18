import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StyleToggle from "@/components/StyleToggle";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import ProductTour from "@/components/ProductTour";
import { HERO, HERO_PHOTOS, STEPS, VIBE, WAITLIST } from "@/lib/content";

export const metadata: Metadata = {
  title: "Flockie — Find your flock",
  description: HERO.subhead,
};

// Text-roll CTA used in the hero (the one personality signature beyond the serif).
function RollCTA({ children }: { children: string }) {
  return (
    <a
      href="#waitlist"
      className="text-roll-host group inline-flex items-center justify-center rounded-full bg-flockie-orange px-7 py-3.5 font-medium text-white transition hover:brightness-105"
    >
      <span className="text-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </a>
  );
}

// Per-photo placement: asymmetric, slight rotation, soft shadow.
const PHOTO_LAYOUT = [
  "rotate-[-3deg] sm:mt-8",
  "rotate-[2deg]",
  "rotate-[3deg] sm:-mt-4",
  "rotate-[-2deg] sm:mt-6",
];

export default function MinimalPage() {
  return (
    <div className="bg-white font-sans text-ink">
      <Nav variant="minimal" />
      <StyleToggle current="minimal" />

      <main>
        {/* ---------------------------------------------------------- HERO */}
        <section className="relative min-h-screen overflow-hidden">
          {/* subtle radial wash + floating color orbs */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 0%, #ffffff 0%, #fbfdff 60%, #f7fafc 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="orb-a pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-flockie-blue/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="orb-b pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-flockie-orange/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2 lg:pt-40">
            {/* Copy */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-flockie-blue" />
                  {HERO.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 font-medium leading-[1.05] tracking-[-0.03em] text-ink [font-size:clamp(2rem,5vw,4.5rem)]">
                  Find your flock. Your next trip needs a{" "}
                  <span className="font-serif italic text-flockie-blue">+1.</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                  {HERO.subhead}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-start gap-4">
                  <RollCTA>{HERO.cta}</RollCTA>
                  <p className="text-sm text-muted">{HERO.trust}</p>
                </div>
              </Reveal>
            </div>

            {/* Trip photos — asymmetric grid */}
            <Reveal delay={200} className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {HERO_PHOTOS.map((p, i) => (
                  <figure
                    key={p.label}
                    className={`overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 ${PHOTO_LAYOUT[i]}`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={450}
                      height={560}
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      priority={i < 2}
                      className="h-44 w-full object-cover sm:h-56"
                    />
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------- HOW IT WORKS */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <h2 className="font-medium tracking-[-0.03em] [font-size:clamp(1.75rem,4vw,3rem)]">
              How it works
            </h2>
            <p className="mt-4 text-lg text-muted">
              From sign-up to your next trip — the whole loop lives inside one
              app. No endless swiping, no juggling tabs.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-md">
                  <span className="font-serif text-3xl italic text-flockie-blue">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-xl font-medium tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------- PRODUCT TOUR */}
        <ProductTour variant="minimal" />

        {/* -------------------------------------------------- VIBE CHECK */}
        <section id="vibe-check" className="bg-soft-blue">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-medium leading-tight tracking-[-0.03em] [font-size:clamp(1.75rem,4vw,3.25rem)]">
                The{" "}
                <span className="font-serif italic text-flockie-orange">
                  vibe check
                </span>{" "}
                is the difference.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                {VIBE.subhead}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[VIBE.self, VIBE.friend].map((card, idx) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-sm font-medium text-muted">
                      {card.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {card.traits.map((t) => (
                        <li key={t.label}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-ink">{t.label}</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                            <div
                              className={`h-full rounded-full ${
                                idx === 0
                                  ? "bg-flockie-blue"
                                  : "bg-flockie-orange"
                              }`}
                              style={{ width: `${t.value}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------- WAITLIST */}
        <section id="waitlist" className="mx-auto max-w-3xl px-6 py-24 text-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-flockie-orange">
              {WAITLIST.kicker}
            </p>
            <h2 className="mt-4 font-medium leading-tight tracking-[-0.03em] [font-size:clamp(1.75rem,4vw,3.25rem)]">
              Be one of the first{" "}
              <span className="font-serif italic text-flockie-blue">500</span> on
              the inside.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted">
              Founding members get lifetime perks and early matching.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <WaitlistForm variant="minimal" />
          </Reveal>
        </section>
      </main>

      <Footer variant="minimal" />
    </div>
  );
}
