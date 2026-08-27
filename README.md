# fibermade.app

The Fibermade marketing site — a Nuxt 4 app, deployed as a live Node server (not static-only, since it has a server API route).

Seven pages: Home, Features, Pricing, About, FAQs, Terms, Privacy.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build in .output/public
npm run build      # server build in .output/server
```

`npm run build` produces the server build in `.output/server` — this is what
must actually run at runtime (`.output/server/index.mjs`) for the site to fully
work, including the server-only `/api/waitlist` route. `npm run generate` still
works for static prerendering, but the static output alone is no longer
sufficient once the launch-list signup feature is live.

## Launch day

Pre-launch copy is behind one flag. With it on you get the dark announcement bar
above the header, a "Launching September 2026" badge, and "Join the launch list"
buttons with waitlist fine print. Turn it off and all of that reverts to the
live wording — "Start your Fibermade shop" and the 30-day guarantee.

The month itself ("September 2026") is `NUXT_PUBLIC_LAUNCH_MONTH`, so it can
change without editing code:

```bash
NUXT_PUBLIC_LAUNCH_MONTH="October 2026" npm run generate
```

```bash
NUXT_PUBLIC_COMING_SOON=false npm run generate
```

Or change the default in `nuxt.config.ts`:

```ts
runtimeConfig: {
  public: {
    comingSoon: false,
  },
},
```

The copy for both states lives in one place: `app/composables/useLaunch.ts`.

Every page's primary CTAs swap copy together — while `comingSoon` is true, all
of them read "Join the launch list" and open the launch-list signup modal
instead of linking anywhere; turn the flag off and they all revert to today's
live wording, "Start your Fibermade shop" — still linking to the placeholder
`#register` anchor (a pre-existing gap unrelated to this feature; see `.env.example`
above for how `NUXT_PUBLIC_APP_URL` wires the header's own Log in/Sign up links).

## Header Log in / Sign up links

The header's Log in and Sign up links point at the app, not this site, so
they're driven by `NUXT_PUBLIC_APP_URL` rather than a route. Set it to the
app's base URL and the links appear, pointing at `{appUrl}/login` and
`{appUrl}/register`; leave it unset and both links are hidden — useful for an
environment (like production before launch) that doesn't have the app live yet.

```bash
NUXT_PUBLIC_APP_URL=https://app.staging.fibermade.app npm run generate
```

## Launch list (MailerLite)

The header announcement bar and every "Join the launch list" CTA open a modal
that posts to a server-only `/api/waitlist` route, which adds the signup to a
MailerLite group as an immediate opt-in (no confirmation email). Two
server-only env vars configure it — `NUXT_MAILERLITE_API_KEY` and
`NUXT_MAILERLITE_GROUP_ID` — neither is ever exposed to the client. Until both
are set, the endpoint returns a 503 and the modal shows a generic error
instead of crashing.

```bash
NUXT_MAILERLITE_API_KEY=your-key NUXT_MAILERLITE_GROUP_ID=your-group-id npm run build
```

## Imagery

Every image on the site is a stand-in. They render desaturated under a dashed
overlay with a note describing the photo that belongs there — hero storefront,
booth photo, wholesale order detail, storefront desktop+phone, video thumbnail,
and the Bad Frog studio. The colorways screenshot is marked `KEEP`; it just
needs retaking with a full photographed catalog instead of seed data.

To replace one: drop the file in `public/`, point the `src` at it, and either
turn off the overlay globally

```bash
NUXT_PUBLIC_SHOW_PLACEHOLDERS=false npm run generate
```

or per image, so the finished ones render clean while the rest stay marked:

```vue
<PlaceholderImage :placeholder="false" ... />
```

The `alt` prop is the real alt text and takes over once the overlay is off.

## Structure

```
app/
  assets/css/main.css     design tokens + long-form legal styles
  components/             header, footer, and the pieces the pages share
  composables/useLaunch   pre-launch vs live copy
  layouts/default.vue     header + page + footer
  pages/                  one file per route
public/                   logo, icon, screenshots
```

Styling is Tailwind v4, configured entirely in `app/assets/css/main.css` — there
is no `tailwind.config`. The palette is pinned to the exact hexes from the
design (terracotta `#c46a34` on a stone ramp) rather than Tailwind's defaults,
and the fluid headline sizes are theme tokens: `text-display`, `text-heading`,
`text-lead`.

Fonts and icons are self-hosted from npm (`@fontsource-variable/instrument-sans`,
`@tabler/icons-webfont`) rather than loaded from a CDN.

## Where this came from

The pages were built from Claude Design prototypes exported out of the
`Website pages recreation project` bundle, which were themselves recreated from
`resources/js/pages/website` in the `joshevensen/fibermade` app repo. Copy
follows the post-Shopify positioning: Fibermade as a full commerce platform with
Square-powered checkout and POS.
