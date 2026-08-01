# fibermade.app

The Fibermade marketing site — a Nuxt 4 app that prerenders to static HTML.

Seven pages: Home, Features, Pricing, About, FAQs, Terms, Privacy.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build in .output/public
npm run build      # server build in .output/server
```

`npm run generate` prerenders every route, so the site can be deployed to any
static host. Nothing on the site needs a server at runtime.

## Launch day

Pre-launch copy is behind one flag. With it on you get the dark announcement bar
above the header, a "Launching August 2026" badge, and "Join the launch list"
buttons with waitlist fine print. Turn it off and all of that reverts to the
live wording — "Start your Fibermade shop" and the 30-day guarantee.

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

Only the home page and the header swap copy — Features, Pricing, About, and
FAQs use the live wording either way, since pre-launch their buttons point at
the same `#waitlist` anchor.

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

## Links that still need wiring

The CTAs use the anchors from the design and do not go anywhere yet:

- `#register` — every primary button, plus "Sign up" in the header
- `#login` — the header
- `#waitlist` — the announcement bar; currently lands on the closing band of the
  home page. Pre-launch this wants a real email capture form.

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
