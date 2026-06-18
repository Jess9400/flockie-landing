"use client";

import { useState } from "react";
import { WAITLIST } from "@/lib/content";

type WaitlistFormProps = {
  variant: "minimal" | "bold";
};

const CONFETTI_COLORS = ["#4A9FD4", "#E8704E", "#FFD166", "#06D6A0", "#FFFFFF"];

export default function WaitlistForm({ variant }: WaitlistFormProps) {
  const bold = variant === "bold";
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [burst, setBurst] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    if (bold) {
      setBurst(true);
      window.setTimeout(() => setBurst(false), 1600);
    }
  }

  const input = bold
    ? "w-full rounded-full border-2 border-ink bg-white px-5 py-3.5 font-dm font-medium text-ink placeholder:text-muted focus:outline-none"
    : "w-full rounded-full border border-gray-200 bg-white px-5 py-3 font-sans text-ink placeholder:text-muted focus:border-flockie-blue focus:outline-none";

  const button = bold
    ? "shrink-0 rounded-full border-2 border-ink bg-flockie-orange px-7 py-3.5 font-dm font-bold text-white shadow-[0_4px_0_0_#E0512C] pushable transition-transform hover:scale-105"
    : "shrink-0 rounded-full bg-flockie-orange px-7 py-3 font-sans font-medium text-white transition hover:brightness-105";

  if (submitted) {
    return (
      <div
        className={
          bold
            ? "rounded-full border-2 border-white bg-white/10 px-6 py-4 text-center font-dm font-bold text-white"
            : "rounded-full border border-gray-200 bg-soft-blue px-6 py-3 text-center font-sans text-ink"
        }
        role="status"
      >
        {WAITLIST.success}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor={`waitlist-email-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`waitlist-email-${variant}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={WAITLIST.placeholder}
        className={input}
      />
      <button type="submit" className={button}>
        {WAITLIST.cta}
      </button>

      {/* Bold-only confetti burst */}
      {burst && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center"
          aria-hidden="true"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                left: `${(i / 24) * 100}%`,
                backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                animationDelay: `${(i % 6) * 0.05}s`,
                transform: `translateY(0) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      )}
    </form>
  );
}
