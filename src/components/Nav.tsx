"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";

type NavProps = {
  variant: "minimal" | "bold";
};

export default function Nav({ variant }: NavProps) {
  const [open, setOpen] = useState(false);
  const bold = variant === "bold";

  // Pill container
  const pill = bold
    ? "bg-white border-2 border-ink rounded-full shadow-[0_4px_0_0_rgba(26,26,26,1)]"
    : "bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-sm";

  const linkClass = bold
    ? "font-dm font-bold text-ink hover:text-flockie-orange transition-colors"
    : "font-sans text-muted hover:text-ink transition-colors";

  // Buttons share compact sizing on mobile, larger from sm up. whitespace-nowrap
  // keeps "Launch App" on one line so the row stays aligned.
  const secondary = bold
    ? "font-dm font-bold whitespace-nowrap rounded-full border-2 border-ink bg-white text-ink pushable transition-transform hover:scale-105 text-xs px-3 py-2 sm:text-base sm:px-4"
    : "font-sans whitespace-nowrap rounded-full border border-gray-200 text-ink hover:bg-gray-50 transition-colors text-xs px-3 py-2 sm:text-sm sm:px-4";

  const primary = bold
    ? "font-dm font-bold whitespace-nowrap rounded-full bg-flockie-orange text-white border-2 border-ink shadow-[0_4px_0_0_#E0512C] pushable transition-transform hover:scale-105 text-xs px-3 py-2 sm:text-base sm:px-5"
    : "font-sans whitespace-nowrap rounded-full bg-flockie-orange text-white hover:brightness-105 transition text-xs px-3 py-2 sm:text-sm sm:px-5";

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-5 sm:py-2.5 ${pill}`}
        aria-label="Primary"
      >
        {/* Logo lockup */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Flockie home"
        >
          <Image
            src="/logo.svg"
            alt="Flockie"
            width={140}
            height={47}
            priority
            className="h-7 w-auto sm:h-9"
          />
        </Link>

        {/* Center links — desktop only */}
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right cluster — both buttons always visible */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a href="#waitlist" className={`${secondary} hidden sm:inline-flex`}>
            Join waitlist
          </a>
          <a href="#waitlist" className={`${secondary} sm:hidden`}>
            Waitlist
          </a>
          <a href="#" className={primary}>
            Launch App
          </a>

          {/* Hamburger — mobile only, toggles the center links */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center md:hidden ${
              bold
                ? "rounded-full border-2 border-ink"
                : "rounded-full border border-gray-200"
            }`}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-ink transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-ink transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-ink transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          id="mobile-menu"
          className={`mx-auto mt-2 max-w-6xl overflow-hidden px-5 py-4 md:hidden ${
            bold
              ? "rounded-3xl border-2 border-ink bg-white"
              : "rounded-2xl border border-gray-100 bg-white shadow-sm"
          }`}
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-1 ${linkClass}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
