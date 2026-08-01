<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Terms', to: '/terms' },
  { label: 'Privacy', to: '/privacy' },
]
</script>

<template>
  <!-- The beige band is on the full-width element; only the content is capped
       at 80rem. The original WebFooter.vue put the background on the inner
       max-w-7xl element, which inset the band. -->
  <footer class="w-full overflow-hidden bg-stone-200">
    <div class="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <nav
        class="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        aria-label="Footer"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="whitespace-nowrap text-stone-600 hover:text-stone-900 hover:underline hover:underline-offset-4"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      <p class="mt-6 text-center text-sm/6 text-stone-600">
        &copy; {{ new Date().getFullYear() }} Fibermade. All rights reserved.
      </p>
    </div>
  </footer>
</template>
