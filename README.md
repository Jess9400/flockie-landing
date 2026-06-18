# Flockie — landing page

Marketing site for **Flockie** — travel buddy matching + Buddy Bounty.
Find your flock. Your next trip needs a +1.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: "export"`) — builds to `out/`

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
```

## Build

```sh
npm run build    # outputs static site to ./out
```

## Deploy

Auto-deploys on push via the connected host (Vercel). Custom domain:
`findflockie.com`.

## Notes

- The **Bold Playful** style is live at `/`. The alternate **Polished
  Minimalist** style and the old two-style chooser are archived in
  `_reference/` (not built) — see `_reference/README.md` to restore.
- All page copy + data lives in `src/lib/content.ts`.
- The waitlist form is currently front-end only (no backend yet).
