# Reference — archived styles

The team chose **Style B (Bold Playful)**. It now lives at the site root (`/`) in
`src/app/page.tsx`. The other style and the old chooser are saved here so they can
be brought back later. Nothing in this folder is built or deployed (it's outside
`src/app`).

All shared components still support `variant="minimal"` (Nav, Footer, ProductTour,
WaitlistForm, Reveal, AppScreens), so restoring is just a matter of moving files
back — no rewrites needed.

## Files

- `minimal-page.tsx` — the full **Style A (Polished Minimalist)** landing page.
- `chooser-page.tsx` — the original `/` chooser page that linked to both styles.
- (`src/components/StyleToggle.tsx` stays in the project; it's the floating A/B
  toggle used by both styles. Currently unused by the live single-style site.)

## Restore Style A as its own route (`/minimal`)

```sh
mkdir -p src/app/minimal
cp _reference/minimal-page.tsx src/app/minimal/page.tsx
```

Then `npm run dev` and visit `/minimal`. (The minimal page renders a
`<StyleToggle current="minimal" />`; to make the toggle work both ways again,
also re-add `<StyleToggle current="bold" />` to `src/app/page.tsx`.)

## Restore the two-style chooser at `/`

1. Restore `/minimal` as above.
2. Move the current Bold landing to its own route:
   ```sh
   mkdir -p src/app/bold
   # move the page body into src/app/bold/page.tsx (rename the component to BoldPage)
   ```
3. Put the chooser back at the root:
   ```sh
   cp _reference/chooser-page.tsx src/app/page.tsx
   ```

That returns the project to its original `/` + `/minimal` + `/bold` layout.
