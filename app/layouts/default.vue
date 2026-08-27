<template>
  <div class="flex min-h-screen flex-col bg-stone-50">
    <SiteHeader />
    <slot />
    <SiteFooter />
    <WaitlistModal />
  </div>
</template>
