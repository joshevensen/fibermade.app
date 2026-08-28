/**
 * Pre-launch copy, driven by a single flag.
 *
 * Set `NUXT_PUBLIC_COMING_SOON=false` (or flip the default in `nuxt.config.ts`)
 * on launch day and the announcement bar disappears while every badge, button
 * label, and piece of fine print on the home page reverts to the live wording.
 */
export function useLaunch() {
  const config = useRuntimeConfig().public
  const comingSoon = computed(() => Boolean(config.comingSoon))
  const launchMonth = computed(() => config.launchMonth as string)

  return {
    comingSoon,
    launchMonth,

    badgeText: computed(() =>
      comingSoon.value ? `Launching ${launchMonth.value}` : 'Fibermade is live',
    ),

    ctaLabel: computed(() =>
      comingSoon.value ? 'Join the launch list' : 'Start your Fibermade shop',
    ),

    ctaNote: computed(() =>
      comingSoon.value
        ? '$49/month when we open · no fees on your sales · be first to import your catalog'
        : '$49/month · 30-day money-back guarantee · no fees on your sales',
    ),

    ctaNoteShort: computed(() =>
      comingSoon.value
        ? 'We will email you the day it opens.'
        : 'Cancel within 30 days and the refund is automatic.',
    ),
  }
}
