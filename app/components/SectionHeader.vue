<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    /** `lead` is the 18px section intro; `muted` is the 16px FAQ-style intro. */
    variant?: 'lead' | 'muted'
  }>(),
  { eyebrow: undefined, variant: 'lead' },
)
</script>

<template>
  <div>
    <p v-if="eyebrow" class="text-base/[1.75] font-semibold text-terracotta">
      {{ eyebrow }}
    </p>
    <h2 class="text-heading text-pretty text-stone-900" :class="eyebrow && 'mt-2'">
      {{ title }}
    </h2>
    <p
      v-if="$slots.default"
      class="mt-6"
      :class="
        variant === 'lead'
          ? 'text-lg/[1.75] text-stone-700'
          : 'max-w-2xl text-base/[1.75] text-stone-600'
      "
    >
      <slot />
    </p>
  </div>
</template>
