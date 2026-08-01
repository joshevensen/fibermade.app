<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string
    /** `primary` on light surfaces, `light` on the terracotta bands. */
    variant?: 'primary' | 'light'
    /** Fills its container instead of hugging the label. */
    block?: boolean
  }>(),
  { href: '#register', variant: 'primary', block: false },
)

const base =
  'inline-flex h-14 items-center justify-center rounded-lg px-8 text-[17px] font-semibold whitespace-nowrap'

const variants = {
  primary: 'bg-terracotta text-stone-50 shadow-cta hover:bg-terracotta-dark',
  light: 'bg-stone-50 text-stone-900 shadow-cta-light hover:bg-white',
}
</script>

<template>
  <a :href="href" :class="[base, variants[variant], block && 'flex w-full px-6']">
    <slot />
  </a>
</template>
