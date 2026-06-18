import Image from "next/image";
import Link from "next/link";
import { SOCIALS, FOOTER } from "@/lib/content";
import { SOCIAL_ICONS } from "./icons";

type FooterProps = {
  variant: "minimal" | "bold";
};

export default function Footer({ variant }: FooterProps) {
  const bold = variant === "bold";

  const wrap = bold
    ? "bg-ink text-white font-dm"
    : "bg-white text-ink border-t border-gray-100 font-sans";

  const tagline = bold
    ? "text-2xl font-extrabold"
    : "text-lg text-muted";

  const iconBtn = bold
    ? "inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-ink transition-colors"
    : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-muted hover:text-flockie-blue hover:border-flockie-blue transition-colors";

  return (
    <footer className={wrap}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          {/* Footer uses the birds-only mark */}
          <Image
            src="/logo-mark.svg"
            alt="Flockie"
            width={56}
            height={50}
            className="h-10 w-auto"
          />
          <p className={`mt-4 ${tagline}`}>{FOOTER.tagline}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={iconBtn}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${FOOTER.email}`}
            className={
              bold
                ? "text-white/80 hover:text-white transition-colors"
                : "text-muted hover:text-ink transition-colors"
            }
          >
            {FOOTER.email}
          </a>
        </div>
      </div>

      <div
        className={
          bold
            ? "border-t border-white/10"
            : "border-t border-gray-100"
        }
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm sm:flex-row sm:items-center sm:justify-between ${
            bold ? "text-white/60" : "text-muted"
          }`}
        >
          <p>{FOOTER.legal}</p>
          <Link
            href="/privacy"
            className={
              bold ? "hover:text-white transition-colors" : "hover:text-ink transition-colors"
            }
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
