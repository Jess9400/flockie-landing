import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import ProductTour from "@/components/ProductTour";
import Bird from "@/components/Bird";
import {
  HERO,
  HERO_PHOTOS,
  STEPS,
  VIBE,
  WAITLIST,
  BOUNTY,
  AVATARS,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Flockie — Find your flock",
  description: HERO.subhead,
};

// Polaroid placement: aggressive rotation + scatter.
const POLAROID = [
  "rotate-[-8deg] sm:translate-y-2",
  "rotate-[5deg] sm:-translate-y-4",
  "rotate-[7deg] sm:translate-y-6",
  "rotate-[-5deg] sm:-translate-y-1",
];

const STICKER_COLORS = [
  "bg-flockie-blue",
  "bg-flockie-orange",
  "bg-[#FFD166] text-ink",
  "bg-[#06D6A0]",
];

export default function HomePage() {
  return (
    <div className="bg-[#FBF8F3] font-dm text-ink">
      <Nav variant="bold" />

      <main>
        {/* ---------------------------------------------------------- HERO */}
        <section className="relative overflow-hidden bg-[#FBF8F3]">
          {/* decorative dot pattern + drifting birds */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(#1a1a1a 1.4px, transparent 1.4px)",
              backgroundSize: "26px 26px",
              maskImage:
                "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          <Bird className="flap absolute left-[8%] top-32 hidden h-10 w-10 md:block" />
          <Bird className="flap-slow absolute right-[12%] top-44 hidden h-8 w-8 md:block" />

          <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-36 lg:grid-cols-2 lg:pt-40">
            {/* Copy */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold">
                  <Bird className="h-4 w-4" />
                  {HERO.eyebrow}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 font-black leading-[0.95] tracking-[-0.02em] [font-size:clamp(2.5rem,7vw,6rem)]">
                  Find your <span className="text-flockie-blue">flock.</span>{" "}
                  <span className="block">
                    Your next trip needs a{" "}
                    <span className="wavy decoration-flockie-orange">+1.</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-md text-lg font-medium text-ink/80">
                  {HERO.subhead}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-col items-start gap-4">
                  <a
                    href="#waitlist"
                    className="rounded-full border-2 border-ink bg-flockie-orange px-8 py-4 text-lg font-bold text-white shadow-[0_5px_0_0_#E0512C] pushable transition-transform hover:scale-105"
                  >
                    {HERO.cta}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Trip photos — scattered polaroids with sticker badges */}
            <Reveal delay={200} className="relative">
              <div className="grid grid-cols-2 gap-5">
                {HERO_PHOTOS.map((p, i) => (
                  <figure
                    key={p.label}
                    className={`group relative rounded-2xl border-[5px] border-white bg-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${POLAROID[i]}`}
                  >
                    <span
                      className={`absolute -right-2 -top-2 z-10 -rotate-6 rounded-full border-2 border-ink px-2.5 py-0.5 text-xs font-extrabold text-white shadow-[0_2px_0_0_rgba(26,26,26,1)] ${STICKER_COLORS[i]}`}
                    >
                      {p.label}!
                    </span>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={450}
                      height={520}
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      priority={i < 2}
                      className="h-40 w-full rounded-lg object-cover sm:h-52"
                    />
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------- HOW IT WORKS */}
        {/* full Flockie blue, white text */}
        <section
          id="how-it-works"
          className="relative overflow-hidden bg-flockie-blue text-white"
        >
          <Bird
            className="drift absolute right-[6%] top-10 hidden h-12 w-12 lg:block"
            body="#FFFFFF"
            shadow="#2C7CB2"
          />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal className="max-w-2xl">
              <h2 className="font-black leading-tight tracking-[-0.02em] [font-size:clamp(2rem,5vw,4rem)]">
                How it works
              </h2>
              <p className="mt-4 text-lg font-medium text-white/90">
                Match on vibe, then plan a whole trip together — or just meet up
                tonight. The whole loop lives in one app, start to finish.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <div
                    className={`h-full rounded-3xl border-2 border-ink bg-white p-7 text-ink shadow-[0_6px_0_0_rgba(26,26,26,1)] transition-transform hover:-translate-y-1 ${
                      i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                    }`}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-flockie-orange text-lg font-black text-white">
                      {s.n}
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
                    <p className="mt-3 font-medium text-ink/75">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- PRODUCT TOUR */}
        <ProductTour variant="bold" />

        {/* ----------------------------------- PROOF (vibe check + reviews) */}
        {/* full Flockie orange, white text */}
        <section
          id="vibe-check"
          className="relative overflow-hidden bg-flockie-orange text-white"
        >
          <Bird
            className="flap absolute left-[5%] bottom-12 hidden h-10 w-10 lg:block"
            body="#FFFFFF"
            shadow="#E0512C"
          />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border-2 border-white/40 bg-white/10 px-4 py-1.5 text-sm font-bold">
                {VIBE.eyebrow}
              </span>
              <h2 className="mt-5 font-black leading-[0.95] tracking-[-0.02em] [font-size:clamp(2rem,5vw,4rem)]">
                Reviews of{" "}
                <span className="wavy decoration-white">people</span>, not just
                places.
              </h2>
              <p className="mt-5 text-lg font-medium text-white/90">
                {VIBE.intro}
              </p>
            </Reveal>

            {/* social-proof analogy: the obvious reviews, then the new one */}
            <Reveal delay={80} className="mt-8 flex flex-wrap items-center gap-3">
              {VIBE.checklist.map((c) =>
                c.checked ? (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white/80"
                  >
                    <span aria-hidden>✓</span>
                    {c.label}
                  </span>
                ) : (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-[0_4px_0_0_rgba(26,26,26,1)]"
                  >
                    <Bird className="h-4 w-4" />
                    {c.label}
                  </span>
                )
              )}
            </Reveal>

            {/* two pillars: the vibe check + post-trip reviews */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* vibe check */}
              <Reveal>
                <div className="h-full rounded-3xl border-2 border-ink bg-white p-6 text-ink shadow-[0_6px_0_0_rgba(26,26,26,1)]">
                  <h3 className="text-xl font-extrabold">{VIBE.vibeCard.title}</h3>
                  <p className="mt-2 text-sm font-medium text-ink/70">
                    {VIBE.vibeCard.blurb}
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[VIBE.self, VIBE.friend].map((card, idx) => (
                      <div key={card.title}>
                        <h4 className="text-[11px] font-extrabold uppercase tracking-wide text-muted">
                          {card.title}
                        </h4>
                        <ul className="mt-3 space-y-3">
                          {card.traits.map((t) => (
                            <li key={t.label}>
                              <span className="text-xs font-bold">{t.label}</span>
                              <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
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
                </div>
              </Reveal>

              {/* post-trip reviews */}
              <Reveal delay={120}>
                <div className="h-full rounded-3xl border-2 border-ink bg-white p-6 text-ink shadow-[0_6px_0_0_rgba(26,26,26,1)]">
                  <h3 className="text-xl font-extrabold">
                    {VIBE.reviewsCard.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-ink/70">
                    {VIBE.reviewsCard.blurb}
                  </p>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-soft-orange p-3">
                    <Image
                      src={AVATARS.maya}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                    />
                    <div>
                      <p className="text-sm font-extrabold">
                        {VIBE.reviewsCard.person}
                      </p>
                      <p className="text-xs font-semibold text-flockie-orange">
                        {VIBE.reviewsCard.meta}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {VIBE.reviewsCard.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-semibold text-muted">
                    Positive-only tags — every review sharpens your next match.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- BUDDY BOUNTY */}
        {/* cream block between the orange proof section and black waitlist */}
        <section id="buddy-bounty" className="relative overflow-hidden bg-[#FBF8F3]">
          <Bird className="drift absolute right-[8%] top-16 hidden h-9 w-9 lg:block" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border-2 border-ink bg-[#FFD166] px-4 py-1.5 text-sm font-extrabold text-ink">
                {BOUNTY.eyebrow}
              </span>
              <h2 className="mt-5 font-black leading-[0.98] tracking-[-0.02em] [font-size:clamp(2rem,5vw,4rem)]">
                Not just trips. Find someone to do{" "}
                <span className="wavy decoration-flockie-orange">anything</span>{" "}
                with.
              </h2>
              <p className="mt-4 text-lg font-medium text-ink/70">
                {BOUNTY.subhead}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {BOUNTY.examples.map((b, i) => (
                <Reveal key={b.title} delay={i * 100}>
                  <div
                    className={`flex h-full flex-col rounded-3xl border-2 border-ink bg-white p-5 shadow-[0_6px_0_0_rgba(26,26,26,1)] transition-transform hover:-translate-y-1 ${
                      i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={AVATARS[b.avatar as keyof typeof AVATARS]}
                        alt=""
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                      />
                      <p className="text-sm font-bold text-ink">
                        {b.host} wants company
                      </p>
                    </div>

                    <p className="mt-4 text-lg font-extrabold leading-snug">
                      <span className="mr-1" aria-hidden>
                        {b.emoji}
                      </span>
                      {b.title}
                    </p>

                    <span
                      className={`mt-3 inline-flex w-fit rounded-full border-2 border-ink px-3 py-1 text-xs font-extrabold ${b.accent}`}
                    >
                      {b.perk}
                    </span>

                    <p className="mt-4 text-xs font-semibold text-muted">
                      {b.meta}
                    </p>

                    <button className="mt-4 w-full rounded-full border-2 border-ink bg-ink py-2.5 text-sm font-bold text-white pushable transition-transform hover:scale-[1.03]">
                      I&apos;m in
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- WAITLIST */}
        {/* black bg, white + orange accents */}
        <section
          id="waitlist"
          className="relative overflow-hidden bg-ink text-white"
        >
          <Bird className="drift absolute left-[12%] top-12 hidden h-9 w-9 md:block" />
          <Bird className="flap absolute right-[14%] bottom-12 hidden h-10 w-10 md:block" />
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Reveal>
              <p className="text-base font-extrabold uppercase tracking-[0.12em] text-flockie-orange">
                {WAITLIST.kicker}
              </p>
              <h2 className="mt-4 font-black leading-[0.95] tracking-[-0.02em] [font-size:clamp(2rem,5vw,4rem)]">
                Be one of the first{" "}
                <span className="text-flockie-orange">500</span> on the inside.
              </h2>
            </Reveal>
            <Reveal delay={120} className="mt-9">
              <WaitlistForm variant="bold" />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer variant="bold" />
    </div>
  );
}
