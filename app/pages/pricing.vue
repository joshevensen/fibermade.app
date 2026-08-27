<script setup lang="ts">
const { ctaLabel, ctaNoteShort, comingSoon } = useLaunch()

useSeoMeta({
  title: 'Pricing — Fibermade',
  description:
    'One plan at $49 a month for the whole platform. No tiers, no per-store fees, no cut of your sales, and a 30-day refund issued automatically.',
})

const included = [
  'Free yourshop.fibermade.shop address',
  'Custom domain with SSL included',
  'Colorways, bases, patterns, kits, and merch',
  'Inventory across retail, wholesale, and shows',
  'Wholesale catalog, terms, and ordering',
  'Point of sale for shows and markets',
  'Subscriptions and gift cards',
  'Catalog import from Shopify or Square',
]

const otherCosts = [
  {
    icon: 'credit-card',
    title: 'A Square account',
    body: "Required, and the free plan is all you need. Square's standard processing rates apply to your sales and their payouts go straight to your bank.",
    price: '$0/month',
  },
  {
    icon: 'device-mobile',
    title: 'A card reader, if you do shows',
    body: "Square's magstripe reader is free. Most dyers buy the $59 tap-and-chip reader; the $399 standalone terminal works without a phone. One-time, not a subscription.",
    price: '$0 · $59 · $399 one-time',
  },
  {
    icon: 'world',
    title: 'A domain, if you want one',
    body: 'Every shop gets a free yourshop.fibermade.shop address. Bring your own domain instead and Fibermade hosts it with SSL at no extra charge.',
    price: "$0 — or your registrar's fee",
  },
]

const billingFaqs = [
  {
    question: 'Why a refund instead of a free trial?',
    answer:
      'Fibermade only shows its value once your real catalog and inventory are in it, and that is not something to do twice. So you get the full product from day one, and 30 days to decide. Cancel in that window and the refund is automatic — no email, no explanation.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, from inside the app through the Stripe Billing Portal. Your account stays active until the end of the period you already paid for.',
  },
  {
    question: 'What happens to my data if I leave?',
    answer:
      'Your account becomes read-only rather than disappearing. You can still log in and export your catalog, inventory, and order history, and if you come back later it is all still there.',
  },
  {
    question: 'Do you take a cut of my sales?',
    answer:
      'No. $49 is the whole bill from us — no revenue share, no per-store fees, no feature gates. Square charges its own processing rate on cards, the same as it would anywhere else.',
  },
  {
    question: 'Does Fibermade handle wholesale payments?',
    answer:
      'No. Fibermade manages wholesale ordering, terms, and status. You keep the payment arrangements that already work with each store.',
  },
  {
    question: 'Who handles my subscription billing?',
    answer:
      "Stripe handles the $49, securely. Fibermade never sees your full card number. Your customers' payments are separate and run through your own Square account.",
  },
]
</script>

<template>
  <main>
    <PageHero eyebrow="Pricing" title="$49 a month">
      One plan, the whole platform. No tiers, no per-store fees, no cut of your sales, and
      a 30-day refund issued automatically if it is not the right fit.
    </PageHero>

    <!-- The plan -->
    <div class="bg-stone-200 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col rounded-3xl bg-stone-50 shadow-hairline lg:flex-row">
          <div class="flex-auto p-8 lg:p-10">
            <h3 class="text-3xl/[1.2] font-semibold tracking-tight text-stone-900">
              Fibermade
            </h3>
            <p class="mt-2 text-base/[1.75] text-stone-600">
              The whole platform for a hand-dyed yarn business. One plan, no tiers, no
              surprise fees.
            </p>
            <div class="mt-4 flex items-center gap-4">
              <h4 class="flex-none text-sm/[1.5] font-semibold text-terracotta">
                What's included
              </h4>
              <div class="h-px flex-auto bg-stone-100" />
            </div>
            <ul
              class="mt-2 grid list-none grid-cols-1 gap-2 p-0 text-sm/[1.5] text-stone-600 sm:grid-cols-2"
            >
              <li v-for="item in included" :key="item" class="flex gap-3">
                <i class="ti ti-check w-5 flex-none text-xl/6 text-terracotta" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="w-full flex-shrink-0 p-2 lg:max-w-md">
            <div
              class="flex h-full flex-col justify-center rounded-2xl bg-stone-200 py-14 text-center shadow-[inset_0_0_0_1px_rgba(28,25,23,0.05)]"
            >
              <div class="mx-auto max-w-xs px-4">
                <p class="text-2xl/[1.3] font-semibold text-stone-600">
                  One Price, No Hidden Fees
                </p>
                <p class="mt-6 flex items-baseline justify-center gap-2">
                  <span class="text-7xl/none font-semibold tracking-tight text-stone-900">
                    $49
                  </span>
                  <span class="text-lg/[1.5] font-semibold tracking-wide text-stone-600">
                    /month
                  </span>
                </p>
                <CtaButton class="mt-8" block :waitlist="comingSoon">{{ ctaLabel }}</CtaButton>
                <p class="mt-3.5 text-center text-[15px]/[1.5] text-stone-600">
                  {{ comingSoon ? ctaNoteShort : 'Cancel within 30 days for a full refund.' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What else it costs -->
    <div class="bg-stone-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader eyebrow="The honest math" title="What else it costs">
            Fibermade takes nothing from your sales, but payments have to go somewhere.
            Here is everything outside the $49 so there are no surprises.
          </SectionHeader>
        </div>
        <div class="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="cost in otherCosts"
            :key="cost.title"
            class="rounded-2xl bg-white p-8 shadow-hairline"
          >
            <i :class="`ti ti-${cost.icon}`" class="text-[26px]/7 text-terracotta" aria-hidden="true" />
            <h3 class="mt-4 text-xl/[1.3] font-semibold text-stone-900">{{ cost.title }}</h3>
            <p class="mt-2.5 text-base/[1.7] text-stone-600">{{ cost.body }}</p>
            <p class="mt-4 font-mono text-[13px] font-semibold text-terracotta">
              {{ cost.price }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <FaqSection title="Billing questions" :items="billingFaqs" background="beige">
      Anything else about money, cancelling, or getting your data out —
      <a
        href="mailto:support@fibermade.com"
        class="font-semibold text-terracotta-deep underline underline-offset-2 hover:text-terracotta"
      >
        email us
      </a>
      and you will get a real answer.
    </FaqSection>

    <CtaBand
      title="Try everything"
      body="Import your catalog, open your shop, and decide with your real inventory, shows, and store relationships in front of you."
      :label="ctaLabel"
      :note="comingSoon ? ctaNoteShort : undefined"
      :waitlist="comingSoon"
    />
  </main>
</template>
