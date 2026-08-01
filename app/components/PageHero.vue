<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    /** Vertical rhythm differs slightly between the About page and the rest. */
    spacious?: boolean
  }>(),
  { spacious: false },
)
</script>

<template>
  <div
    class="bg-stone-50 px-6 lg:px-8"
    :class="spacious ? 'py-24 lg:py-32' : 'pt-24 pb-20 lg:pt-28 lg:pb-24'"
  >
    <div class="mx-auto max-w-2xl text-center">
      <p class="text-base/[1.75] font-semibold text-terracotta">{{ eyebrow }}</p>
      <h1 class="mt-2 text-display text-stone-900">{{ title }}</h1>
      <p
        class="text-lead font-medium text-pretty text-stone-500"
        :class="spacious ? 'mt-8' : 'mt-7'"
      >
        <slot />
      </p>
      <div v-if="$slots.cta" class="mt-9 flex flex-col items-center gap-3.5">
        <slot name="cta" />
      </div>
    </div>
  </div>
</template>
