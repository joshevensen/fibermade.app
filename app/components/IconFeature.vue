<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Tabler icon name without the `ti-` prefix. Omit for a text-only item. */
    icon?: string
    title: string
    /**
     * `large`  — 20px title over the body, 26px icon (home "Why Fibermade").
     * `compact` — 16px title over the body, 20px icon (three-up grids).
     * `inline` — title and body run together as one paragraph.
     */
    variant?: 'large' | 'compact' | 'inline'
  }>(),
  { icon: undefined, variant: 'compact' },
)
</script>

<template>
  <div class="relative" :class="variant === 'large' ? 'pl-11' : 'pl-9'">
    <dt
      class="text-stone-900"
      :class="[
        variant === 'large' ? 'text-xl font-semibold' : 'font-semibold',
        variant === 'inline' && 'inline',
      ]"
    >
      <i
        v-if="icon"
        class="absolute text-terracotta"
        :class="[
          `ti ti-${icon}`,
          variant === 'large' && 'top-[2px] left-0 text-[26px]/7',
          variant === 'compact' && 'top-0 left-0 text-xl/7',
          variant === 'inline' && 'top-[4px] left-[4px] text-xl/5',
        ]"
        aria-hidden="true"
      />{{ title }}
    </dt>
    <dd
      class="text-stone-600"
      :class="[
        variant === 'large' && 'mt-2.5',
        variant === 'compact' && 'mt-1',
        variant === 'inline' && 'inline',
      ]"
    >
      <template v-if="variant === 'inline'">&nbsp;</template><slot />
    </dd>
  </div>
</template>
