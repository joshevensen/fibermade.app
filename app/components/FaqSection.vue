<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    items: { question: string; answer: string }[]
    background?: 'stone' | 'beige'
  }>(),
  { background: 'stone' },
)
</script>

<template>
  <div class="py-20 lg:py-24" :class="background === 'beige' ? 'bg-stone-200' : 'bg-stone-50'">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader :title="title" variant="muted">
        <slot />
      </SectionHeader>
      <div class="mt-14">
        <dl class="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
          <div v-for="item in items" :key="item.question">
            <dt class="text-base/[1.75] font-semibold text-stone-900">{{ item.question }}</dt>
            <dd class="mt-2 text-base/[1.75] text-stone-600">{{ item.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
