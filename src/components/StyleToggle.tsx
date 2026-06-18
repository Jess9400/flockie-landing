"use client";

import Link from "next/link";

type StyleToggleProps = {
  /** The style the *current* page is rendering. */
  current: "minimal" | "bold";
};

/**
 * Floating A/B toggle pinned top-right, just below the nav. Links to the other
 * style so the team can flip between variants instantly.
 */
export default function StyleToggle({ current }: StyleToggleProps) {
  const target = current === "minimal" ? "bold" : "minimal";
  const targetLabel = current === "minimal" ? "Bold" : "Minimalist";

  const base =
    "fixed right-4 top-24 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-transform";

  const skin =
    current === "minimal"
      ? "bg-ink text-white hover:scale-[1.03] font-sans"
      : "bg-white text-ink border-2 border-ink hover:scale-105 font-dm font-bold";

  return (
    <Link
      href={`/${target}`}
      className={`${base} ${skin}`}
      aria-label={`Switch to ${targetLabel} style`}
    >
      <span aria-hidden="true">⇄</span>
      <span>Switch to {targetLabel}</span>
    </Link>
  );
}
