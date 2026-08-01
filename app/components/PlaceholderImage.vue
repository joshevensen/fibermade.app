<script setup lang="ts">
/**
 * Stand-in imagery with the art-direction brief printed on top of it.
 *
 * Every one of these is a screenshot standing in for a photo that does not
 * exist yet. The dashed overlay is deliberate — it keeps the brief attached to
 * the slot it belongs to. Drop the real file in `public/`, point `src` at it,
 * and set `NUXT_PUBLIC_SHOW_PLACEHOLDERS=false` (or pass `:placeholder="false"`
 * on the ones that are already real) to render it clean.
 */
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    /** Short all-caps tag, e.g. `REPLACE — HERO IMAGE`. */
    label: string
    /** What the finished image needs to show. */
    brief: string
    /** Per-image override of the global `showPlaceholders` flag. */
    placeholder?: boolean
    shadow?: boolean
    /** Caps the brief's measure — used where the image column is wide. */
    capBrief?: boolean
  }>(),
  { placeholder: undefined, shadow: true, capBrief: false },
)

const config = useRuntimeConfig()
const showOverlay = computed(() =>
  props.placeholder ?? Boolean(config.public.showPlaceholders),
)
</script>

<template>
  <div
    class="relative overflow-hidden rounded-xl"
    :class="shadow && 'shadow-panel'"
  >
    <img
      :src="src"
      :alt="showOverlay ? label : alt"
      class="block w-full"
      :class="showOverlay && 'opacity-50 [filter:saturate(0.12)_contrast(0.92)]'"
    >
    <div
      v-if="showOverlay"
      class="absolute inset-0 flex flex-col justify-between gap-2 overflow-hidden rounded-xl border-2 border-dashed border-terracotta bg-stone-50/45 p-5"
    >
      <span
        class="flex-none self-start rounded-md bg-terracotta px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.08em] whitespace-nowrap text-stone-50"
      >
        {{ label }}
      </span>
      <p
        class="font-mono text-[13px]/[1.6] text-stone-700"
        :class="capBrief && 'max-w-[34rem]'"
      >
        {{ brief }}
      </p>
    </div>
  </div>
</template>
