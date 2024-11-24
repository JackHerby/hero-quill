// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@prisma/nuxt',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    globalAppMiddleware: true,
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
  },
  css: ['~/assets/scss/main.scss'],
  eslint: {
    config: {
      stylistic: {
        braceStyle: '1tbs',
      },
    },
  },
  prisma: {
    installStudio: false,
  },
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    },
  },
})
