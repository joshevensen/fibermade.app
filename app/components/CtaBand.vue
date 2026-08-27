<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    body: string
    label?: string
    note?: string
    waitlist?: boolean
  }>(),
  {
    label: 'Start your Fibermade shop',
    note: '$49/month · 30-day money-back guarantee',
    waitlist: false,
  },
)
</script>

<template>
  <div class="bg-terracotta px-6 py-20 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-heading text-balance text-stone-50">{{ title }}</h2>
      <p class="mx-auto mt-6 max-w-xl text-lg/[1.75] text-pretty text-stone-50">
        {{ body }}
      </p>
      <div class="mt-9 flex flex-col items-center gap-3.5">
        <CtaButton variant="light" :waitlist="waitlist">{{ label }}</CtaButton>
        <span class="text-[15px]/[1.6] text-terracotta-tint">{{ note }}</span>
      </div>
    </div>
  </div>
</template>
