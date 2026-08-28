<script setup lang="ts">
const { badgeText, ctaLabel, ctaNote, ctaNoteShort, comingSoon } = useLaunch()

useSeoMeta({
  title: 'Fibermade — Commerce for hand dyers',
  description:
    'Your shop, your wholesale, your shows, and your inventory in one place — built around colorways, bases, and skeins instead of generic products and variants.',
})

const differentiators = [
  {
    icon: 'palette',
    title: 'It speaks yarn',
    body: 'Colorways, bases, skeins, and collections — not products, variants, and SKUs bent into the shape of yarn. Change a base once and every colorway on it follows.',
  },
  {
    icon: 'package',
    title: 'One inventory, three channels',
    body: 'Your shop, your wholesale orders, and the booth all draw from the same stock. What exists stays separate from what is available, so nothing gets sold twice.',
  },
  {
    icon: 'heart-handshake',
    title: 'Wholesale that feels personal',
    body: 'Each store gets its own terms, minimums, and lead times. Orders arrive in one place with the terms attached, instead of in an email thread you have to reconstruct.',
  },
  {
    icon: 'calendar-event',
    title: 'Shows are first-class',
    body: 'Plan what to bring to each show, sell at the booth from the same stock, and reconcile when you get home — not "just another order type."',
  },
]

const steps = [
  {
    title: 'Import your catalog',
    body: 'Bring colorways, bases, and inventory across from Shopify or Square. Starting from scratch instead? Add them by hand — most dyers finish everything in 4 to 6 hours.',
    timing: '1–2 hours importing',
  },
  {
    title: 'Make it yours',
    body: 'Add your logo, pick a mood and palette, and answer a few questions — Fibermade writes your shipping and return policies from a vetted template.',
    timing: '~30 minutes',
  },
  {
    title: 'Go live',
    body: 'Connect Square, then publish to your free yourshop.fibermade.shop address or point your own domain at it. SSL is included and handled for you.',
    timing: 'Minutes',
  },
]

const posPoints = [
  "Square's free plan is all you need — no extra software cost",
  'Free magstripe reader, or the $59 tap-and-chip reader most dyers use',
  'Post-show reconciliation without a second spreadsheet',
]

const origins = [
  {
    icon: 'heart-handshake',
    title: 'Built inside Bad Frog',
    body: 'Fibermade started at Bad Frog Yarn Co, a real hand-dyed yarn business with colorways, bases, inventory, shows, and wholesale relationships to keep straight.',
  },
  {
    icon: 'pencil-cog',
    title: 'Built for the whole job',
    body: 'Dyeing is a fraction of the work. Production, inventory, shows, wholesale, shipping, and customer questions all live in the same business, so they live in the same tool.',
  },
  {
    icon: 'code',
    title: 'Made by a builder',
    body: 'Fibermade is built by a solo founder who has been writing software since 2014 and running Novelize, another SaaS product, since 2016.',
  },
]
</script>

<template>
  <main>
    <!-- Hero -->
    <div class="overflow-hidden bg-stone-50">
      <div
        class="mx-auto flex max-w-7xl flex-col items-start px-6 py-8 lg:flex-row lg:p-8"
      >
        <div class="min-w-0 max-w-2xl lg:flex-[1_1_26rem]">
          <div class="mt-14">
            <span
              class="inline-block rounded-full bg-terracotta-tint px-3 py-1 text-sm/6 font-semibold text-terracotta shadow-[inset_0_0_0_1px_rgba(196,106,52,0.2)]"
            >
              {{ badgeText }}
            </span>
          </div>
          <h1 class="mt-8 text-display text-pretty text-stone-900">
            Commerce for hand dyers
          </h1>
          <p class="mt-7 text-lead font-medium text-pretty text-stone-500">
            Your shop, your wholesale, your shows, and your inventory in one place — built
            around colorways, bases, and skeins instead of generic products and variants.
          </p>
          <div class="mt-9">
            <CtaButton :waitlist="comingSoon">{{ ctaLabel }}</CtaButton>
            <p class="mt-4 text-[15px]/[1.6] text-stone-500">{{ ctaNote }}</p>
            <p class="mt-5 text-[15px]/[1.6]">
              <NuxtLink
                to="/features"
                class="font-semibold text-terracotta underline underline-offset-[3px] hover:text-terracotta-deep"
              >
                See everything Fibermade does &rarr;
              </NuxtLink>
            </p>
          </div>
        </div>

        <div class="flex w-full lg:ml-16 lg:min-w-[22rem] lg:flex-[1_1_30rem]">
          <div class="mt-14 w-full">
            <PlaceholderImage
              src="/screenshots/bad-frog-storefront.png"
              alt="The Bad Frog Yarn Co storefront on desktop"
              label="REPLACE — HERO IMAGE"
              brief="A real Fibermade storefront on desktop — Bad Frog Yarn Co works. Big colorway photography above the fold, the shop's own logo and palette visible. This is the product promise; an admin dashboard is not."
              :shadow="false"
              :placeholder="false"
              cap-brief
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Why Fibermade -->
    <div class="bg-stone-200 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader eyebrow="Why Fibermade" title="Four things nothing else does">
            Other tools let you sell online. Fibermade understands the rest of the job —
            dye sessions, limited runs, the store that always orders in September, the
            festival next month.
          </SectionHeader>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 text-[17px]/[1.7] text-stone-600 lg:grid-cols-2"
        >
          <IconFeature
            v-for="item in differentiators"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            variant="large"
          >
            {{ item.body }}
          </IconFeature>
        </dl>
      </div>
    </div>

    <!-- Switching -->
    <div class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader eyebrow="Switching" title="Open by this afternoon">
            No developer, no theme to build, no migration project. Import what you already
            have and your shop is live on the web the same day.
          </SectionHeader>
        </div>
        <ol class="mt-16 grid list-none grid-cols-1 gap-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="(step, index) in steps"
            :key="step.title"
            class="rounded-2xl bg-white p-8 shadow-hairline"
          >
            <span
              class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-tint text-base font-bold text-terracotta"
            >
              {{ index + 1 }}
            </span>
            <h3 class="mt-5 text-xl/[1.3] font-semibold text-stone-900">{{ step.title }}</h3>
            <p class="mt-2.5 text-base/[1.7] text-stone-600">{{ step.body }}</p>
            <p class="mt-4 font-mono text-[13px] font-semibold text-terracotta">
              {{ step.timing }}
            </p>
          </li>
        </ol>
        <div class="mt-14 flex flex-wrap items-center gap-6">
          <CtaButton :waitlist="comingSoon">{{ ctaLabel }}</CtaButton>
          <span class="text-[15px]/[1.6] text-stone-500">{{ ctaNoteShort }}</span>
        </div>
      </div>
    </div>

    <!-- Sell in person -->
    <div class="bg-stone-200 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Sell in person"
              title="The booth runs on the same stock"
            >
              Fibermade's point of sale runs on Square, so the skein you sell at a festival
              comes out of the same inventory as your shop and your wholesale commitments.
              It recognizes store owners buying wholesale at your booth, too.
            </SectionHeader>
            <ul class="mt-7 flex list-none flex-col gap-3 p-0 text-base/[1.7] text-stone-700">
              <li v-for="point in posPoints" :key="point" class="flex gap-3">
                <i class="ti ti-check w-5 flex-none text-xl/7 text-terracotta" aria-hidden="true" />
                {{ point }}
              </li>
            </ul>
          </div>
          <PlaceholderImage
            src="/screenshots/bad-frog-booth.jpg"
            alt="The Bad Frog Yarn Co booth at a fiber festival"
            label="REPLACE — BOOTH PHOTO"
            brief="A real booth at a fiber festival: skeins on display, the Square reader or the Fibermade POS screen in the frame, hands mid-transaction. Warm, candid, not staged product photography."
            :placeholder="false"
          />
        </div>
      </div>
    </div>

    <!-- Built from experience -->
    <div class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader title="Built from experience">
            Fibermade is not an abstract idea about ecommerce. It comes from running a real
            hand-dyed yarn business and wanting one system that understood all of it.
          </SectionHeader>
        </div>
        <dl
          class="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 text-base/[1.75] sm:grid-cols-2 lg:grid-cols-3"
        >
          <IconFeature
            v-for="item in origins"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
          >
            {{ item.body }}
          </IconFeature>
        </dl>
      </div>
    </div>

    <CtaBand
      id="waitlist"
      title="Run the whole business"
      body="One plan at $49/month — shop, catalog, inventory, wholesale, shows, and in-person sales. No per-sale fees, no per-store fees, no tiers."
      :label="ctaLabel"
      :note="ctaNoteShort"
      :waitlist="comingSoon"
    />
  </main>
</template>
