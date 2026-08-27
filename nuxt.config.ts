import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-01',
  devtools: { enabled: true },

  css: [
    '@fontsource-variable/instrument-sans',
    '@tabler/icons-webfont/dist/tabler-icons.min.css',
    '~/assets/css/main.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    // MailerLite API key used to add launch-list signups to a subscriber group.
    // Server-only — never exposed to the client. The /api/waitlist route
    // returns 503 until this is set. Set via NUXT_MAILERLITE_API_KEY.
    mailerliteApiKey: '',
    // MailerLite group/list ID that launch-list signups are added to.
    // Server-only. Set via NUXT_MAILERLITE_GROUP_ID.
    mailerliteGroupId: '',
    public: {
      // Pre-launch copy. Set NUXT_PUBLIC_COMING_SOON=false on launch day and every
      // CTA, badge, and the announcement bar revert to the live wording.
      comingSoon: true,
      // Renders the dashed "REPLACE — …" briefs over the stand-in imagery. Set
      // NUXT_PUBLIC_SHOW_PLACEHOLDERS=false once the real photography is in place.
      showPlaceholders: true,
      // Base URL of the app (login/signup) for this environment, e.g.
      // https://app.staging.fibermade.app. Set NUXT_PUBLIC_APP_URL to enable
      // the header's Log in / Sign up links — leave unset and they stay hidden.
      appUrl: '',
      // Pre-launch copy's target month, e.g. "September 2026". Set
      // NUXT_PUBLIC_LAUNCH_MONTH to change it without editing code.
      launchMonth: 'September 2026',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#c46a34' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
