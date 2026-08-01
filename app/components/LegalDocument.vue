<script setup lang="ts">
defineProps<{
  title: string
  updated: string
}>()
</script>

<template>
  <div class="mx-auto w-full max-w-3xl px-6 py-16 lg:px-8">
    <h1 class="text-3xl/[1.2] font-bold tracking-tight text-stone-900">{{ title }}</h1>
    <p class="mt-2 text-sm/[1.5] text-stone-500">Last updated: {{ updated }}</p>
    <div class="legal-body mt-10">
      <slot />
    </div>
  </div>
</template>
