<script setup lang="ts">
useSeoMeta({
  title: 'About — Fibermade',
  description:
    'Fibermade grew out of Bad Frog Yarn Co, a real hand-dyed yarn business — built by the person who needed it.',
})

const { ctaLabel, ctaNoteShort, comingSoon } = useLaunch()

const origin = [
  {
    icon: 'heart-handshake',
    title: 'A real yarn business',
    body: 'Fibermade grew out of Bad Frog Yarn Co, a hand-dyed yarn business built around colorways, bases, inventory, shows, and the stores that carry it.',
  },
  {
    icon: 'pencil-cog',
    title: 'Bases were variants',
    body: 'Generic ecommerce has no idea what a base is, so ours were variants. Adding a base, or changing the price or yardage on one, meant opening all 50 colorways and making the same edit 50 times. That is the moment Fibermade started.',
  },
  {
    icon: 'refresh',
    title: 'The wholesale problem',
    body: 'Our LYS could only see what was already on the retail site — never what was coming next — so we emailed them photos and they sent orders back by email. Wholesale ran entirely on attachments and spreadsheets.',
  },
  {
    icon: 'code',
    title: 'Built by a founder',
    body: 'Fibermade is built by a solo founder who has been a software engineer since 2014 and has run Novelize, another SaaS product, since 2016.',
  },
]

const principles = [
  {
    title: 'Shaped like the business',
    body: 'A base is a base, not a variant. Change it once and every colorway on it follows. When the software is shaped like the work, you stop building workarounds.',
  },
  {
    title: 'Less mental load',
    body: 'Opinionated defaults and workflows that match how fiber people actually work, rather than feature parity with generic platforms.',
  },
  {
    title: 'Used by its maker',
    body: 'Because Fibermade runs a real fiber business every day, it keeps improving around real catalog, inventory, show, and ordering pain.',
  },
]
</script>

<template>
  <main>
    <PageHero eyebrow="About Fibermade" title="Built from experience" spacious>
      Fibermade exists because the fiber community deserves better than generic ecommerce
      reskinned for makers — a platform that understands colorways, skeins, shows, and the
      stores you sell to.
    </PageHero>

    <!-- Origin story -->
    <div class="overflow-hidden bg-stone-200 py-20 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
          <div class="pt-4 lg:pr-8">
            <div class="max-w-lg">
              <SectionHeader eyebrow="Origin Story" title="Bad Frog roots">
                The product started inside Bad Frog Yarn Co, where running the business on
                generic ecommerce made two things obvious: the catalog fought us every day,
                and wholesale had no home at all.
              </SectionHeader>
              <dl class="mt-10 flex flex-col gap-8 text-base/[1.75] text-stone-600">
                <IconFeature
                  v-for="item in origin"
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
          <PlaceholderImage
            class="w-full self-start"
            src="/screenshots/bad-frog-studio.jpg"
            alt="The Bad Frog Yarn Co booth, showing the hand-dyed catalog"
            label="REPLACE — THE DYE STUDIO"
            brief="A real photo from the Bad Frog studio — dye pots, drying skeins, labeled bins, the actual mess of the work. On an About page, a product screenshot proves nothing; a photograph of the business the software came from proves everything."
            :placeholder="false"
          />
        </div>
      </div>
    </div>

    <!-- How we build -->
    <div class="bg-stone-50 py-20 lg:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-2xl">
          <SectionHeader title="How we build">
            Fibermade is not a side bet on a market. It is software used by the person
            building it, shaped by a fiber business that has to keep working.
          </SectionHeader>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 text-base/[1.75] sm:grid-cols-2 lg:grid-cols-3"
        >
          <IconFeature v-for="item in principles" :key="item.title" :title="item.title">
            {{ item.body }}
          </IconFeature>
        </dl>
      </div>
    </div>

    <CtaBand
      title="Built for the whole job"
      body="$49/month for the whole platform — catalog, storefront, inventory, wholesale, shows, and in-person sales, shaped around a real hand-dyed yarn business."
      :label="ctaLabel"
      :note="comingSoon ? ctaNoteShort : undefined"
      :waitlist="comingSoon"
    />
  </main>
</template>
