import Reveal from "@/components/Reveal";
import { PhoneFrame, SCREENS } from "@/components/mockups/AppScreens";
import { SHOWCASE } from "@/lib/content";

type ProductTourProps = {
  variant: "minimal" | "bold";
};

// Subtle alternating rotation for the bold variant's phones.
const BOLD_TILT = ["rotate-[-3deg]", "rotate-[3deg]", "rotate-[-2deg]", "rotate-[3deg]"];

export default function ProductTour({ variant }: ProductTourProps) {
  const bold = variant === "bold";

  const section = bold
    ? "bg-[#FBF8F3] text-ink"
    : "bg-white text-ink";

  const eyebrow = bold
    ? "inline-flex items-center rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold"
    : "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-muted";

  const heading = bold
    ? "font-black leading-tight tracking-[-0.02em] [font-size:clamp(2rem,5vw,4rem)]"
    : "font-medium tracking-[-0.03em] [font-size:clamp(1.75rem,4vw,3rem)]";

  const featureTitle = bold
    ? "text-2xl font-extrabold"
    : "text-2xl font-medium tracking-[-0.01em]";

  const tagChip = bold
    ? "rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold"
    : "rounded-full bg-soft-blue px-3 py-1 text-xs font-medium text-flockie-blue";

  return (
    <section id="product-tour" className={section}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* intro */}
        <Reveal className="max-w-2xl">
          {bold ? (
            <span className={eyebrow}>{SHOWCASE.eyebrow}</span>
          ) : (
            <span className={eyebrow}>
              <span className="h-1.5 w-1.5 rounded-full bg-flockie-orange" />
              {SHOWCASE.eyebrow}
            </span>
          )}
          <h2 className={`mt-5 ${heading}`}>{SHOWCASE.headline}</h2>
          <p
            className={`mt-4 text-lg ${
              bold ? "font-medium text-ink/70" : "text-muted"
            }`}
          >
            {SHOWCASE.subhead}
          </p>
        </Reveal>

        {/* alternating feature rows */}
        <div className="mt-16 flex flex-col gap-20 lg:gap-28">
          {SHOWCASE.features.map((f, i) => {
            const Screen = SCREENS[f.id as keyof typeof SCREENS];
            const flip = i % 2 === 1;
            return (
              <div
                key={f.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* phone */}
                <Reveal
                  className={`flex justify-center ${
                    flip ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <PhoneFrame
                    variant={variant}
                    className={bold ? BOLD_TILT[i] : "rotate-[-1deg]"}
                  >
                    <Screen />
                  </PhoneFrame>
                </Reveal>

                {/* caption */}
                <Reveal
                  delay={100}
                  className={flip ? "lg:order-1" : "lg:order-2"}
                >
                  <span
                    className={`text-sm font-bold ${
                      bold ? "text-flockie-orange" : "text-flockie-blue"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`mt-2 ${featureTitle}`}>{f.title}</h3>
                  <p
                    className={`mt-3 max-w-md text-lg leading-relaxed ${
                      bold ? "font-medium text-ink/70" : "text-muted"
                    }`}
                  >
                    {f.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className={tagChip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
