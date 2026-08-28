<script setup lang="ts">
useSeoMeta({
  title: 'FAQs — Fibermade',
  description:
    'Switching, Square, inventory, wholesale, and shows — the questions hand dyers ask before moving their business to Fibermade.',
})

const { ctaLabel, ctaNoteShort, comingSoon } = useLaunch()

const switching = [
  {
    question: 'Is Fibermade a full commerce platform?',
    answer:
      'Yes. Your storefront, catalog, inventory, retail checkout, wholesale ordering, subscriptions, gift cards, and in-person sales all run in Fibermade. There is no second ecommerce platform underneath it.',
  },
  {
    question: 'How do I move my catalog over?',
    answer:
      'Import it. Fibermade pulls your catalog and inventory from Shopify or Square, then you sort products into colorways and bases. You are not retyping 300 colorways.',
  },
  {
    question: 'How long until my shop is live?',
    answer:
      'Hours, not weeks. Importing from Shopify or Square usually takes one to two hours end to end. Entering everything by hand is the slow path — plan on four to six hours total.',
  },
  {
    question: 'Do I need a developer or a theme?',
    answer:
      'No. The website is managed. You choose a mood and palette, add your logo, and the shop is built and hosted for you — no theme editing, no plugins, no maintenance.',
  },
  {
    question: 'What address does my shop get?',
    answer:
      'Every shop gets a free yourshop.fibermade.shop address immediately. You can point your own domain at it whenever you like, and SSL is included and renewed for you either way.',
  },
  {
    question: 'Do I have to write my own policies?',
    answer:
      'No. You answer structured questions about processing time, returns, and your legal business name, and Fibermade composes the policy text from a vetted template so you are not drafting legal language yourself.',
  },
]

const payments = [
  {
    question: 'Do I have to use Square?',
    answer:
      "Yes. Retail checkout, subscriptions, gift cards, and in-person sales all run through your own Square account. Square's free plan is all Fibermade needs — there is no paid Square tier to buy.",
  },
  {
    question: 'Do I need a card reader?',
    answer:
      "Only if you sell in person. Square's magstripe reader is free, most dyers use the $59 tap-and-chip reader, and the $399 terminal works on its own without a phone. All one-time purchases.",
  },
  {
    question: 'What does Square charge?',
    answer:
      "Square's standard processing rates on cards, paid to Square, with payouts straight to your bank. Fibermade takes no percentage of your sales on top of that.",
  },
  {
    question: 'Does Fibermade handle wholesale payments?',
    answer:
      'No. Fibermade tracks wholesale orders, terms, and status, while payment continues through whatever arrangement you already have with each store.',
  },
]

const running = [
  {
    question: 'How does inventory work across channels?',
    answer:
      'Retail orders, accepted wholesale orders, and show sales all draw from the same stock per skein, with what exists kept separate from what is available. Nothing gets sold twice.',
  },
  {
    question: 'Does it work for small batches and limited runs?',
    answer:
      'Yes. Fibermade is designed for handmade inventory, limited quantities, dye-to-order realities, and the catalog shape of a hand-dyed yarn business — not warehouse assumptions.',
  },
  {
    question: 'How do stores place wholesale orders?',
    answer:
      'You invite them. They browse your catalog, see their own pricing and terms, build an order over as many sittings as they need, and submit it to you directly.',
  },
  {
    question: 'What if wholesale is not my main business?',
    answer:
      'Then leave it off. Wholesale is there when you want it, and the rest of the platform — shop, catalog, inventory, shows — does not depend on it.',
  },
  {
    question: 'Can I run a yarn subscription?',
    answer:
      'Yes. Subscribers sign up on your site with a card on file, you curate the contents of each cycle, and failed charges follow a clear dunning flow instead of quietly disappearing.',
  },
  {
    question: 'Will this replace my spreadsheets?',
    answer:
      'That is the goal for catalog, inventory, show planning, store relationships, and ordering. Some businesses keep a specialized planning sheet, but the repetitive operational tracking should live here.',
  },
]
</script>

<template>
  <main>
    <PageHero eyebrow="FAQs" title="Common questions">
      Switching, Square, inventory, wholesale, and shows. If your question is not here,
      <a
        href="mailto:support@fibermade.com"
        class="font-semibold text-terracotta underline underline-offset-[3px] hover:text-terracotta-deep"
      >
        email us
      </a>
      — a person answers.
    </PageHero>

    <FaqSection title="Switching over" :items="switching" background="beige">
      What it actually takes to move your business to Fibermade and open your shop.
    </FaqSection>

    <FaqSection title="Square and payments" :items="payments">
      Fibermade does not touch your money. Square does — here is exactly what that means.
    </FaqSection>

    <!-- Video guides -->
    <!--
    <section class="bg-stone-200 py-20 lg:py-24">
      <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader eyebrow="Video Guides" title="Watch the workflow">
            The Fibermade YouTube channel has walkthroughs, setup videos, and practical
            guidance for hand dyers running a shop, a wholesale list, and a show season at
            the same time.
          </SectionHeader>
          <a
            href="https://www.youtube.com/@Fibermade"
            target="_blank"
            rel="noreferrer"
            class="mt-8 inline-flex items-center gap-2 text-base/[1.75] font-semibold text-terracotta hover:text-terracotta-deep"
          >
            Visit Fibermade on YouTube
            <i class="ti ti-brand-youtube text-xl/5" aria-hidden="true" />
          </a>
        </div>
        <a
          href="https://www.youtube.com/@Fibermade"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Fibermade on YouTube"
          class="block"
        >
          <PlaceholderImage
            src="/screenshots/fibermade-dashboard.png"
            alt="A Fibermade walkthrough video"
            label="REPLACE — VIDEO THUMBNAIL"
            brief="The thumbnail of your best walkthrough video, or a still from it. A play button over an unrelated dashboard screenshot reads as a broken embed."
          />
        </a>
      </div>
    </section>
    -->

    <FaqSection title="Running the business" :items="running">
      Inventory across channels, wholesale relationships, shows, and the spreadsheets this
      is meant to replace.
    </FaqSection>

    <CtaBand
      title="One system for the everything you do"
      body="$49/month for the whole platform — catalog, storefront, inventory, wholesale, shows, and in-person sales. No tiers, no per-sale fees."
      :label="ctaLabel"
      :note="comingSoon ? ctaNoteShort : undefined"
      :waitlist="comingSoon"
    />
  </main>
</template>
