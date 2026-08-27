<script setup lang="ts">
const { comingSoon, launchMonth } = useLaunch()
const { open: openWaitlistModal } = useWaitlistModal()

const appUrl = useRuntimeConfig().public.appUrl as string
const loginUrl = appUrl ? `${appUrl}/login` : null
const registerUrl = appUrl ? `${appUrl}/register` : null

const links = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'FAQs', to: '/faqs' },
]

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (menuOpen.value = false))

// No display utility here — callers add their own, so a `hidden` on the log-in
// link is not fighting an `inline-flex` baked into the shared string.
const navLinkClass =
  'h-9 items-center justify-center rounded-md px-4 text-sm/6 font-semibold text-stone-900 hover:bg-stone-100'
</script>

<template>
  <div>
    <!-- Pre-launch announcement bar. Disappears with the comingSoon flag. -->
    <div v-if="comingSoon" class="w-full bg-stone-900">
      <div
        class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2.5 text-center text-sm/6 text-stone-50 lg:px-8"
      >
        <span class="font-semibold">Fibermade opens {{ launchMonth }}.</span>
        <span class="text-stone-300">
          Get on the launch list and be first to import your catalog.
        </span>
        <button
          type="button"
          class="font-semibold whitespace-nowrap text-terracotta-soft underline underline-offset-[3px] hover:text-terracotta-tint"
          @click="openWaitlistModal"
        >
          Join the list &rarr;
        </button>
      </div>
    </div>

    <header class="relative z-50 bg-stone-200">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center gap-12">
          <NuxtLink to="/" class="-m-1.5 inline-flex items-center p-1.5">
            <span class="sr-only">Fibermade</span>
            <img src="/logo.png" alt="Fibermade" class="block h-8 w-auto" >
          </NuxtLink>

          <div class="hidden gap-6 lg:flex">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              :class="['inline-flex', navLinkClass]"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <a
            v-if="loginUrl"
            :href="loginUrl"
            :class="['hidden gap-2 whitespace-nowrap sm:inline-flex', navLinkClass]"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            v-if="registerUrl"
            :href="registerUrl"
            class="inline-flex h-9 items-center justify-center rounded-md bg-terracotta px-4 text-sm font-medium whitespace-nowrap text-stone-50 hover:bg-terracotta-dark"
          >
            Sign up
          </a>
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-md text-stone-900 hover:bg-stone-100 lg:hidden"
            :aria-expanded="menuOpen"
            aria-controls="site-menu"
            @click="menuOpen = !menuOpen"
          >
            <span class="sr-only">{{ menuOpen ? 'Close menu' : 'Open menu' }}</span>
            <i
              class="ti text-2xl/6"
              :class="menuOpen ? 'ti-x' : 'ti-menu-2'"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      <div v-show="menuOpen" id="site-menu" class="border-t border-stone-300 lg:hidden">
        <div class="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-md px-4 py-2 text-sm/6 font-semibold text-stone-900 hover:bg-stone-100"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            v-if="loginUrl"
            :href="loginUrl"
            class="rounded-md px-4 py-2 text-sm/6 font-semibold text-stone-900 hover:bg-stone-100 sm:hidden"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>
