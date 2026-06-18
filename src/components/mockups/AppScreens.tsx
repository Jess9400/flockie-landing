import Image from "next/image";
import { AVATARS, HERO_PHOTOS } from "@/lib/content";

/* ------------------------------------------------------------------ frame */

export function PhoneFrame({
  children,
  variant,
  className = "",
}: {
  children: React.ReactNode;
  variant: "minimal" | "bold";
  className?: string;
}) {
  const shadow =
    variant === "bold"
      ? "shadow-[10px_12px_0_0_rgba(26,26,26,0.18)]"
      : "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]";
  return (
    <div
      className={`relative mx-auto w-[268px] shrink-0 rounded-[2.6rem] bg-ink p-2.5 ${shadow} ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" />
      <div className="relative h-[538px] overflow-hidden rounded-[2.05rem] bg-white">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ small parts */

function AppHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-4 pb-2.5 pt-7">
      <div className="flex items-center gap-1.5">
        <Image src="/logo-mark.svg" alt="" width={22} height={20} className="h-5 w-auto" />
        <span className="text-[13px] font-semibold text-ink">{title}</span>
      </div>
      <div className="flex flex-col gap-[3px]" aria-hidden>
        <span className="block h-0.5 w-4 rounded bg-gray-400" />
        <span className="block h-0.5 w-4 rounded bg-gray-400" />
        <span className="block h-0.5 w-4 rounded bg-gray-400" />
      </div>
    </div>
  );
}

function ModeToggle({ active }: { active: "people" | "trips" }) {
  return (
    <div className="mx-4 mt-3 grid grid-cols-2 rounded-full bg-gray-100 p-1 text-[12px] font-semibold">
      <span
        className={`rounded-full py-1.5 text-center ${
          active === "people" ? "bg-white text-ink shadow-sm" : "text-gray-400"
        }`}
      >
        Find people
      </span>
      <span
        className={`rounded-full py-1.5 text-center ${
          active === "trips" ? "bg-white text-ink shadow-sm" : "text-gray-400"
        }`}
      >
        Find trips
      </span>
    </div>
  );
}

function Avatar({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

/* ----------------------------------------------------------- 1. swipe deck */

export function SwipeScreen() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Find your flockie" />
      <ModeToggle active="people" />

      <div className="relative mx-4 mt-4 flex-1">
        {/* back card peeking */}
        <div className="absolute inset-x-3 top-2 bottom-6 rounded-3xl bg-gray-100" />
        {/* main card */}
        <div className="relative h-full overflow-hidden rounded-3xl">
          <Image
            src={AVATARS.maya}
            alt="Maya's travel profile"
            fill
            sizes="240px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />
          {/* destination + match */}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-flockie-blue">
            📍 Bali · Aug 12–22
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-flockie-orange px-2.5 py-1 text-[11px] font-extrabold text-white shadow">
            92% vibe
          </span>
          {/* identity */}
          <div className="absolute inset-x-3 bottom-3 text-white">
            <p className="text-lg font-bold leading-tight">Maya, 29</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {["beach", "chill", "foodie"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/25 px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <div className="flex items-center justify-center gap-6 py-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-400">
          ✕
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flockie-orange text-white shadow-lg">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 21s-7.5-4.9-10-9.2C.4 8.6 2 5 5.4 5c2 0 3.3 1.1 4.1 2.3l.5.8.5-.8C11.3 6.1 12.6 5 14.6 5 18 5 19.6 8.6 18 11.8 15.5 16.1 12 21 12 21z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------- 2. vibe check */

export function VibeScreen() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Your vibe check" />

      <div className="px-4 pt-4">
        <div className="flex items-center justify-between text-[12px] font-semibold text-muted">
          <span>Question 4 of 10</span>
          <span className="text-flockie-blue">40%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[40%] rounded-full bg-flockie-blue" />
        </div>
      </div>

      <div className="px-4 pt-5">
        <p className="text-[15px] font-semibold text-ink">
          How do you plan a trip?
        </p>
        <div className="mt-3 space-y-2">
          {[
            { label: "Go with the flow", on: true },
            { label: "A loose plan", on: false },
            { label: "Booked by the hour", on: false },
          ].map((o) => (
            <div
              key={o.label}
              className={`flex items-center justify-between rounded-2xl border px-3.5 py-2.5 text-[13px] font-medium ${
                o.on
                  ? "border-flockie-blue bg-soft-blue text-ink"
                  : "border-gray-200 text-gray-500"
              }`}
            >
              {o.label}
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white ${
                  o.on ? "bg-flockie-blue" : "bg-gray-200"
                }`}
              >
                {o.on ? "✓" : ""}
              </span>
            </div>
          ))}
        </div>

        {/* pace slider */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[11px] font-semibold text-muted">
            <span>Slow mornings</span>
            <span>Dawn till dusk</span>
          </div>
          <div className="relative mt-2 h-2 rounded-full bg-gray-100">
            <div className="absolute left-0 top-0 h-2 w-[38%] rounded-full bg-flockie-orange" />
            <div className="absolute left-[38%] top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-flockie-orange bg-white shadow" />
          </div>
        </div>
      </div>

      {/* friend vouch */}
      <div className="mt-auto m-4 flex items-center gap-3 rounded-2xl bg-soft-orange px-3.5 py-3">
        <Avatar src={AVATARS.sofia} className="h-9 w-9 ring-2 ring-white" />
        <div className="text-[12px] leading-tight">
          <p className="font-semibold text-ink">Sofia is vouching for you</p>
          <p className="text-muted">She answers the same 10 about you</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------- 3. trip planner */

export function PlannerScreen() {
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Bali · Aug 12–22" />

      {/* day tabs */}
      <div className="flex gap-2 px-4 pt-3 text-[12px] font-semibold">
        {["Day 1", "Day 2", "Day 3"].map((d, i) => (
          <span
            key={d}
            className={`rounded-full px-3 py-1 ${
              i === 0 ? "bg-flockie-blue text-white" : "bg-gray-100 text-gray-500"
            }`}
          >
            {d}
          </span>
        ))}
      </div>

      {/* itinerary */}
      <div className="px-4 pt-4">
        {[
          { t: "08:00", a: "Sunrise hike, Mt Batur" },
          { t: "13:00", a: "Beach club, Canggu" },
          { t: "19:30", a: "Night market dinner" },
        ].map((row) => (
          <div key={row.t} className="flex gap-3 py-1.5">
            <span className="w-10 shrink-0 text-[11px] font-bold text-flockie-blue">
              {row.t}
            </span>
            <span className="text-[13px] text-ink">{row.a}</span>
          </div>
        ))}
      </div>

      {/* best deals */}
      <div className="mt-auto m-4 rounded-2xl border border-gray-100 p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-ink">Best deals</p>
          <span className="rounded-full bg-soft-blue px-2 py-0.5 text-[10px] font-bold text-flockie-blue">
            via Flockie · 2% back
          </span>
        </div>
        <div className="mt-2.5 space-y-2">
          {[
            { k: "🏨", n: "The Lawn, Canggu", p: "$48/nt" },
            { k: "✈️", n: "DPS · round trip", p: "$312" },
            { k: "🤿", n: "Reef dive + guide", p: "$25" },
          ].map((d) => (
            <div key={d.n} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[12px] text-ink">
                <span>{d.k}</span>
                {d.n}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-ink">{d.p}</span>
                <span className="rounded-full bg-flockie-orange px-2.5 py-1 text-[10px] font-bold text-white">
                  Book
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------- 4. open trip (marketplace) */

export function FlockScreen() {
  const members = [AVATARS.leo, AVATARS.noah, AVATARS.amelia];
  return (
    <div className="flex h-full flex-col">
      <AppHeader title="Find your flockie" />
      <ModeToggle active="trips" />

      <div className="mx-4 mt-4 overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
        {/* cover */}
        <div className="relative h-28">
          <Image
            src={HERO_PHOTOS[2].src}
            alt="Open trip to Lisbon"
            fill
            sizes="240px"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#06D6A0] px-2.5 py-1 text-[10px] font-extrabold text-white shadow">
            OPEN · 3 of 5 spots
          </span>
        </div>

        <div className="p-3.5">
          <p className="text-[15px] font-bold text-ink">Lisbon surf & work</p>
          <div className="mt-1 flex items-center gap-2">
            <Avatar src={AVATARS.leo} className="h-5 w-5" />
            <span className="text-[11px] text-muted">Hosted by Léo · Aug 3–10</span>
          </div>

          {/* settings chips */}
          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] font-semibold">
            {["€€ mid", "EN · PT", "work-friendly", "surf", "chill"].map((c) => (
              <span
                key={c}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600"
              >
                {c}
              </span>
            ))}
          </div>

          {/* members */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex -space-x-2">
              {members.map((m, i) => (
                <Avatar key={i} src={m} className="h-6 w-6 ring-2 ring-white" />
              ))}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-[9px] font-bold text-gray-500 ring-2 ring-white">
                +2
              </span>
            </div>
          </div>

          <button className="mt-3.5 w-full rounded-full bg-flockie-orange py-2.5 text-[13px] font-bold text-white">
            Request to join
          </button>
          <p className="mt-2 text-center text-[10px] text-muted">
            Quick trip vibe check keeps the group in sync
          </p>
        </div>
      </div>
    </div>
  );
}

export const SCREENS = {
  vibe: VibeScreen,
  swipe: SwipeScreen,
  planner: PlannerScreen,
  flock: FlockScreen,
} as const;
