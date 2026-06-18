// Shared brand copy + data used by both the minimal and bold landing pages.
// Single source of truth so the two styles stay content-identical.

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#vibe-check" },
] as const;

export const HERO = {
  eyebrow: "Trips, meetups, anything",
  headlineLead: "Find your flock.",
  headlineRest: "Your next plan needs a +1.",
  subhead:
    "The platform to find compatible, vibe-checked people to do anything with you, from a trip across the world to dinner across town. Answer a few questions, swipe, and go.",
  cta: "Join the waitlist",
  trust: "287 travelers waiting · Founding members get lifetime perks",
} as const;

// Hero photos — pairs of people *doing things together*, not just places.
// Reinforces that Flockie is for trips AND any activity you'd rather not do
// alone (see Vibe Buddy). Unsplash placeholders, all verified.
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
    label: "Dinner",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Build your vibe check",
    body: "Answer 10 quick questions about how you like to spend time. Then a friend fills out the same form about you, so the gap between the two answers becomes the real signal.",
  },
  {
    n: "02",
    title: "Swipe to match",
    body: "The algorithm scores compatibility on style, pace, and social energy, then serves your top people. Swipe right, and a mutual like opens a chat.",
  },
  {
    n: "03",
    title: "Plan it all in one place",
    body: "Sort the details right inside the chat, from booking a trip together to picking the bar for tonight, without ever leaving Flockie.",
  },
  {
    n: "04",
    title: "Meet up, then review",
    body: "After you hang out or travel together, you both leave honest reviews. Those reviews feed the algorithm, so every future match gets sharper.",
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
  headline: "The whole plan, one app.",
  subhead:
    "From the vibe check to making the plan, here's what you'll actually be using.",
  features: [
    {
      id: "vibe",
      title: "A vibe check you can't fake",
      body: "Ten questions about how you really like to spend time, then a friend answers the same ten about you. The gap between the two is the matching gold.",
      tags: ["10 questions", "Friend-vouched"],
    },
    {
      id: "swipe",
      title: "Swipe on people who actually fit",
      body: "Every card is pre-scored by the algorithm. See your match %, shared vibe tags, and what they're up to before you swipe right.",
      tags: ["Match %", "Vibe tags"],
    },
    {
      id: "planner",
      title: "Plan and book in one place",
      body: "Plan it together in the chat, then lock in tables, tickets, hotels, and activities at member prices, without ever leaving Flockie.",
      tags: ["Shared plans", "Best deals"],
    },
    {
      id: "flock",
      title: "Or start a Flock others can join",
      body: "Post an open plan, a trip or a night out, set the vibe and the number of spots, and let compatible people request in after a quick vibe check. A marketplace for plans, minus the randoms.",
      tags: ["Open plans", "Request to join"],
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
    "You'd never book a hotel without reading the reviews. Or a restaurant. Or a tour. So why trust a stranger with your time on a hunch? Flockie is the first place you check a person before you make plans, built on two signals nobody can fake.",
  // The social-proof analogy: the obvious ones, then the new one.
  checklist: [
    { label: "Restaurants", checked: true },
    { label: "Hotels", checked: true },
    { label: "Activities", checked: true },
    { label: "The actual person", checked: false },
  ],
  vibeCard: {
    title: "The vibe check",
    blurb:
      "Nobody rates themselves as inflexible, but a friend will. The gap between how you see yourself and how a friend sees you is the part you can't fake.",
  },
  reviewsCard: {
    title: "Honest post-meetup reviews",
    blurb:
      "After you meet up or travel, people leave reviews, positive-only tags that feed straight back into who you match with next.",
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

// Vibe Buddy — the broader positioning: find someone to do *anything* with,
// not just travel. Post a plan, compatible people nearby opt in.
export const VIBE_BUDDY = {
  eyebrow: "New · Vibe Buddy",
  headline: "Not just trips. Find someone to do anything with.",
  subhead:
    "Don't want to do it alone? Post a Vibe Buddy plan, a dinner, a hike, a gig, a weekend away, and compatible people nearby (or heading the same way) opt in.",
  examples: [
    {
      avatar: "maya",
      emoji: "🍝",
      host: "Maya",
      title: "Dinner at Casa Lola, tonight",
      tag: "Foodies welcome",
      meta: "8pm · Lisbon · 4 in",
      accent: "bg-flockie-orange text-white",
    },
    {
      avatar: "leo",
      emoji: "🎸",
      host: "Léo",
      title: "Live music at the docks, Friday",
      tag: "Chill night",
      meta: "Fri 9pm · 3 in",
      accent: "bg-flockie-blue text-white",
    },
    {
      avatar: "amelia",
      emoji: "🏄",
      host: "Amelia",
      title: "Beginner surf lesson, Sunday",
      tag: "Beginners welcome",
      meta: "Sun · Ericeira · 3 in",
      accent: "bg-[#FFD166] text-ink",
    },
  ],
} as const;

export const WAITLIST = {
  kicker: "Find people who actually match your vibe.",
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
