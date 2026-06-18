import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flockie — Choose a landing style",
  description: "Preview the two Flockie landing page variants side by side.",
};

const CARDS = [
  {
    href: "/minimal",
    eyebrow: "Style A",
    title: "Polished Minimalist",
    blurb:
      "White space, calm confidence, Geist + Instrument Serif accents. Hinge meets Linear meets Airbnb.",
    className:
      "bg-white border border-gray-100 hover:border-flockie-blue/40 hover:shadow-xl",
    titleClass: "font-sans tracking-[-0.03em] text-ink",
    accent: "text-flockie-blue",
    cta: "text-flockie-orange",
  },
  {
    href: "/bold",
    eyebrow: "Style B",
    title: "Bold Playful",
    blurb:
      "Color-blocked, chunky type, springy motion. Duolingo meets Bumble meets Cash App.",
    className:
      "bg-[#FBF8F3] border-2 border-ink hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(26,26,26,1)]",
    titleClass: "font-dm font-black text-ink",
    accent: "text-flockie-orange font-dm font-bold",
    cta: "text-flockie-blue font-dm font-bold",
  },
] as const;

export default function ChooserPage() {
  return (
    <main className="min-h-screen bg-soft-bg">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo-stacked.svg"
            alt="Flockie"
            width={150}
            height={134}
            priority
            className="h-24 w-auto"
          />
          <h1 className="mt-6 font-sans text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">
            Two landing styles. One brand.
          </h1>
          <p className="mt-2 max-w-md text-muted">
            Same content, same sections — different visual language. Open each and
            use the floating toggle to compare.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group flex flex-col rounded-3xl p-8 transition-all duration-300 ${c.className}`}
            >
              <span className={`text-sm font-medium ${c.accent}`}>
                {c.eyebrow}
              </span>
              <h2 className={`mt-2 text-3xl ${c.titleClass}`}>{c.title}</h2>
              <p className="mt-3 flex-1 text-muted">{c.blurb}</p>
              <span className={`mt-6 inline-flex items-center gap-2 ${c.cta}`}>
                View this style
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
