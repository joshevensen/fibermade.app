<script setup lang="ts">
const { ctaLabel, ctaNoteShort, comingSoon } = useLaunch()

useSeoMeta({
  title: 'Features — Fibermade',
  description:
    'Catalog, storefront, inventory, wholesale, shows, and in-person sales — the whole business in one place, in the language the fiber community already uses.',
})

const storefront = [
  {
    icon: 'world',
    title: 'Free address or your own domain',
    body: 'Launch on yourshop.fibermade.shop today and point your own domain at it whenever you are ready. SSL is included either way.',
  },
  {
    icon: 'file-text',
    title: 'Policies written for you',
    body: 'Answer structured questions about processing time and returns, and Fibermade composes the policy text from a vetted template so you are not drafting legal language.',
  },
  {
    icon: 'repeat',
    title: 'Subscriptions and gift cards',
    body: 'Recurring yarn boxes with per-cycle contents and a clear path when a card fails, plus gift cards in the denominations you choose.',
  },
]

const catalog = [
  {
    icon: 'palette',
    title: 'Colorways stay central',
    body: 'Photograph, describe, and merchandise the colorways people ask for by name instead of hiding them behind generic product records.',
  },
  {
    icon: 'box',
    title: 'Bases and skeins stay connected',
    body: 'Define bases once with materials, weights, and yardage. Every colorway dyed on that base becomes a skein you can price and count.',
  },
  {
    icon: 'packages',
    title: 'More than yarn',
    body: 'Patterns, kits, merch, and gift cards live in the same catalog, and only the things that need stock and shipping carry them.',
  },
]

const wholesale = [
  {
    icon: 'users',
    title: 'One account per store, not per creator',
    body: 'A store owner who carries several Fibermade dyers browses and orders from all of them in one place.',
  },
  {
    icon: 'shopping-cart',
    title: 'Draft, submit, track',
    body: 'Stores add items over days and submit when ready; you receive, fulfill, and update status in one workflow with the order history alongside.',
  },
  {
    icon: 'layout-grid',
    title: 'Committed is not available',
    body: 'An accepted wholesale order reserves stock immediately, so your shop never sells a skein that is already promised to a store.',
  },
]

const rest = [
  {
    icon: 'layout-grid',
    title: 'Real inventory',
    body: 'Stock per skein, with what exists kept separate from what is available across retail, wholesale, and the booth.',
  },
  {
    icon: 'calendar-event',
    title: 'Shows and POS',
    body: 'Plan what to bring, sell at the booth from the same stock through Square, and reconcile when you get home.',
  },
  {
    icon: 'droplet',
    title: 'Dyes and production',
    body: 'Keep dye formulas and notes with the colorways they belong to, and see what still needs to be dyed.',
  },
  {
    icon: 'tag',
    title: 'Discounts',
    body: 'Codes for your shop and adjustments on wholesale orders, without rebuilding your pricing.',
  },
  {
    icon: 'help-circle',
    title: 'FAQ and contact',
    body: "Your shop's FAQ, contact form, and wholesale inquiry form, so store requests arrive somewhere you will see them.",
  },
  {
    icon: 'dashboard',
    title: 'Traffic and analytics',
    body: 'See what people look at and what they buy, without bolting on a tracking suite.',
  },
]
</script>

<template>
  <main>
    <PageHero eyebrow="Features" title="Built for fiber">
      Catalog, storefront, inventory, wholesale, shows, and in-person sales — the whole
      business in one place, in the language the fiber community already uses.
      <template #cta>
        <CtaButton :waitlist="comingSoon">{{ ctaLabel }}</CtaButton>
        <span class="text-[15px]/[1.6] text-stone-500">
          $49/month · 30-day money-back guarantee
        </span>
      </template>
    </PageHero>

    <!-- Your storefront -->
    <div class="overflow-hidden bg-stone-200 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Your storefront" title="A shop that looks like you">
              A public shop on your own domain, themed to your logo, colors, and chosen
              mood. Big photography, one clear call to action, and a single-page guest
              checkout — the layout decisions are already made, and made for yarn.
            </SectionHeader>
            <dl class="mt-9 flex flex-col gap-7 text-base/[1.75] text-stone-600">
              <IconFeature
                v-for="item in storefront"
                :key="item.title"
                :icon="item.icon"
                :title="item.title"
                variant="inline"
              >
                {{ item.body }}
              </IconFeature>
            </dl>
          </div>
          <PlaceholderImage
            src="/screenshots/bad-frog-storefront.png"
            alt="The Bad Frog Yarn Co storefront, showing the hero and featured colorways"
            label="REPLACE — STOREFRONT"
            brief="A live Fibermade storefront: shop home page with the hero and a colorway grid, ideally desktop and phone side by side. Show two different moods/palettes if you can — it proves the shop looks like the dyer, not like Fibermade."
            :placeholder="false"
          />
        </div>
      </div>
    </div>

    <!-- Fiber catalog -->
    <div class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <PlaceholderImage
            class="order-2 lg:order-1"
            src="/screenshots/colorways-screenshot.png"
            alt="The Fibermade colorways screen"
            label="KEEP — COLORWAYS SCREEN"
            brief="This one is fine as a real product screenshot — just retake it with a full, photographed catalog rather than sparse seed data. Overlay is here only to mark it for a refresh."
            :placeholder="false"
          />
          <div class="order-1 lg:order-2">
            <SectionHeader eyebrow="Fiber catalog" title="Colorways first">
              Your catalog is organized the way you talk about it: colorways on bases, dyed
              into skeins, gathered into collections your customers recognize.
            </SectionHeader>
            <dl class="mt-9 flex flex-col gap-7 text-base/[1.75] text-stone-600">
              <IconFeature
                v-for="item in catalog"
                :key="item.title"
                :icon="item.icon"
                :title="item.title"
                variant="inline"
              >
                {{ item.body }}
              </IconFeature>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Wholesale -->
    <div class="bg-stone-200 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Wholesale" title="Terms attached to the order">
              Invite the stores you sell to, publish a wholesale catalog, and let them build
              an order at their own pace. Every relationship carries its own discounts,
              minimums, lead times, and payment expectations — so you stop reconstructing
              them from email.
            </SectionHeader>
            <dl class="mt-9 flex flex-col gap-7 text-base/[1.75] text-stone-600">
              <IconFeature
                v-for="item in wholesale"
                :key="item.title"
                :icon="item.icon"
                :title="item.title"
                variant="inline"
              >
                {{ item.body }}
              </IconFeature>
            </dl>
          </div>
          <PlaceholderImage
            src="/screenshots/wholesale-order-screenshot.png"
            alt="The Fibermade wholesale order screen"
            label="REPLACE — WHOLESALE ORDER"
            brief="The wholesale order detail screen with a realistic order on it: a named store, several colorways and bases, quantities, the store's terms and discount visible, and a status. This is the screen that sells wholesale — a dashboard is too abstract."
            :placeholder="false"
          />
        </div>
      </div>
    </div>

    <!-- And the rest of the job -->
    <div class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader title="And the rest of the job">
            The work that currently lives in spreadsheets, inboxes, a payment app, and
            memory.
          </SectionHeader>
        </div>
        <dl
          class="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 text-base/[1.75] sm:grid-cols-2 lg:grid-cols-3"
        >
          <IconFeature
            v-for="item in rest"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
          >
            {{ item.body }}
          </IconFeature>
        </dl>
        <div class="mt-14 flex flex-wrap items-center gap-6">
          <CtaButton :waitlist="comingSoon">{{ ctaLabel }}</CtaButton>
          <span class="text-[15px]/[1.6] text-stone-500">
            Import from Shopify or Square and be open in an afternoon.
          </span>
        </div>
      </div>
    </div>

    <CtaBand
      title="Work in fiber language"
      body="$49/month for the whole platform — catalog, storefront, inventory, wholesale, shows, and in-person sales."
      :label="ctaLabel"
      :note="comingSoon ? ctaNoteShort : '30-day money-back guarantee, issued automatically.'"
      :waitlist="comingSoon"
    />
  </main>
</template>
