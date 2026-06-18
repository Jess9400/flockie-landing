// Shared brand copy + data used by both the minimal and bold landing pages.
// Single source of truth so the two styles stay content-identical.

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#vibe-check" },
] as const;

export const HERO = {
  eyebrow: "Travel buddies + Buddy Bounty",
  headlineLead: "Find your flock.",
  headlineRest: "Your next trip needs a +1.",
  subhead:
    "The matching platform for solo travelers, nomads, and anyone who hates doing things alone. Find a travel buddy for your next trip — or post a Buddy Bounty for tonight. Matched on a vibe check, so you actually click.",
  cta: "Join the waitlist",
  trust: "287 travelers waiting · Founding members get lifetime perks",
} as const;

// Hero photos — pairs of people *doing things together*, not just places.
// Reinforces that Flockie is for trips AND any activity you'd rather not do
// alone (see Buddy Bounty). Unsplash placeholders, all verified.
export const HERO_PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1562278996-b055b6a1190f?auto=format&fit=crop&w=900&q=80",
    alt: "Two people tandem skydiving together high above the coast",
    label: "Skydive",
  },
  {
    src: "https://images.unsplash.com/photo-1678030523822-cf542960e377?auto=format&fit=crop&w=900&q=80",
    alt: "Two people riding a camel together across the desert in Morocco",
    label: "Camel ride",
  },
  {
    src: "https://images.unsplash.com/photo-1666276845220-7b94f61e3d35?auto=format&fit=crop&w=900&q=80",
    alt: "Two friends sharing a surfboard on an ocean wave",
    label: "Surf",
  },
  {
    src: "https://images.unsplash.com/photo-1634294007943-f24d8c9e7d39?auto=format&fit=crop&w=900&q=80",
    alt: "A group of friends toasting drinks together at a dinner table",
    label: "Dinner's on me",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Build your vibe check",
    body: "Answer 10 quick questions about how you travel. Then a friend fills out the same form about you — the gap between the two answers is the real signal.",
  },
  {
    n: "02",
    title: "Swipe to match",
    body: "The algorithm scores compatibility on travel style, pace, and social energy, then serves your top buddies. Swipe right — a mutual like opens a chat.",
  },
  {
    n: "03",
    title: "Plan it all in one place",
    body: "Build a shared itinerary inside the chat and lock in the best deals on hotels, flights, and activities — without ever leaving Flockie.",
  },
  {
    n: "04",
    title: "Travel, then review",
    body: "After the trip, you and your buddy leave honest reviews. Those reviews feed the algorithm, so every future match gets sharper.",
  },
] as const;

// Portrait avatars (verified Unsplash) used inside the app mockups.
export const AVATARS = {
  maya: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  leo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  sofia: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
  noah: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  amelia: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=80",
} as const;

// Product tour — copy for each in-app screen mockup.
export const SHOWCASE = {
  eyebrow: "A look inside the app",
  headline: "The whole trip, one app.",
  subhead:
    "From the vibe check to booking the hotel — here's what you'll actually be using.",
  features: [
    {
      id: "vibe",
      title: "A vibe check you can't fake",
      body: "Ten questions about how you really travel — then a friend answers the same ten about you. The gap between the two is the matching gold.",
      tags: ["10 questions", "Friend-vouched"],
    },
    {
      id: "swipe",
      title: "Swipe on people who actually fit",
      body: "Every card is pre-scored by the algorithm. See your match %, shared vibe tags, and where they're headed before you swipe right.",
      tags: ["Match %", "Vibe tags"],
    },
    {
      id: "planner",
      title: "Plan and book in one place",
      body: "Build a day-by-day itinerary with your buddy, then lock in hotels, flights, and activities at member prices — without ever leaving Flockie.",
      tags: ["Shared itinerary", "Best deals"],
    },
    {
      id: "flock",
      title: "Or start a Flock others can join",
      body: "Post an open trip, set the vibe, budget, and number of spots, and let compatible travelers request in after a quick trip vibe check. A marketplace for group trips — minus the randoms.",
      tags: ["Open trips", "Request to join"],
    },
  ],
} as const;

export const VIBE = {
  // Legacy fields — still consumed by the archived minimal page (_reference).
  headline: "The vibe check is the difference.",
  subhead:
    "Nobody rates themselves as inflexible. Your friend will. That's the unfakeable compatibility signal.",
  self: {
    title: "How you see yourself",
    traits: [
      { label: "Spontaneous", value: 90 },
      { label: "Easygoing", value: 85 },
      { label: "Up for anything", value: 95 },
    ],
  },
  friend: {
    title: "How your friend rates you",
    traits: [
      { label: "Needs a plan", value: 70 },
      { label: "Hangry by noon", value: 80 },
      { label: "Secretly a planner", value: 65 },
    ],
  },

  // Merged "proof you can't fake" section (live home page): social proof +
  // the vibe check + post-trip reviews, all in one.
  eyebrow: "Proof you can't fake",
  headline2: "Reviews of people, not just places.",
  intro:
    "You'd never book a hotel without reading the reviews. Or a restaurant. Or a tour. So why trust a stranger with ten days of your life on a hunch? Flockie is the first place you check a travel buddy before you go — built on two signals nobody can fake.",
  // The social-proof analogy: the obvious ones, then the new one.
  checklist: [
    { label: "Restaurants", checked: true },
    { label: "Hotels", checked: true },
    { label: "Activities", checked: true },
    { label: "Your travel buddy", checked: false },
  ],
  vibeCard: {
    title: "The vibe check",
    blurb:
      "Nobody rates themselves as inflexible — a friend will. The gap between how you see yourself and how a friend sees you is the part you can't fake.",
  },
  reviewsCard: {
    title: "Honest post-trip reviews",
    blurb:
      "After every trip, buddies leave reviews — positive-only tags that feed straight back into who you match with next.",
    person: "Maya, 29",
    meta: "6 trips · 5.0 ★",
    tags: [
      "Great planner",
      "Easy-going",
      "Communicative",
      "Spontaneous",
      "Respectful",
    ],
  },
} as const;

// Buddy Bounty — the broader positioning: find someone to do *anything* with,
// not just travel. Post an activity (with an optional perk), people opt in.
export const BOUNTY = {
  eyebrow: "New · Buddy Bounty",
  headline: "Not just trips. Find someone to do anything with.",
  subhead:
    "Don't want to do it alone? Post a Buddy Bounty — a dinner, a hike, a gig, a dive. Add a perk if you like. Compatible people nearby opt in.",
  examples: [
    {
      avatar: "maya",
      emoji: "🍝",
      host: "Maya",
      title: "Dinner at Casa Lola, tonight",
      perk: "Dinner's on me",
      meta: "8pm · Lisbon · 4 in",
      accent: "bg-flockie-orange text-white",
    },
    {
      avatar: "leo",
      emoji: "🪂",
      host: "Léo",
      title: "Sunrise skydive on Saturday",
      perk: "Split the gas",
      meta: "Sat 6am · 2 spots left",
      accent: "bg-flockie-blue text-white",
    },
    {
      avatar: "amelia",
      emoji: "🏄",
      host: "Amelia",
      title: "Beginner surf lesson",
      perk: "I'll bring the boards",
      meta: "Sun · Ericeira · 3 in",
      accent: "bg-[#FFD166] text-ink",
    },
  ],
} as const;

export const WAITLIST = {
  kicker: "Travel with people who actually match your vibe.",
  headline: "Be one of the first 500 on the inside.",
  subhead: "Founding members get lifetime perks and early matching.",
  placeholder: "you@email.com",
  cta: "Join the waitlist",
  success: "You're on the list. Check your inbox to confirm.",
} as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/find.flockie", icon: "instagram" },
  { label: "TikTok", href: "https://tiktok.com/@findflockie", icon: "tiktok" },
  { label: "X / Twitter", href: "https://x.com/findflockie", icon: "x" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/findflockie/", icon: "linkedin" },
] as const;

export const FOOTER = {
  tagline: "Find your flock.",
  email: "hello@findflockie.com",
  legal: "© 2026 Flockie. Made for travelers.",
} as const;
