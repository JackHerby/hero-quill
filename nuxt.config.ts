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
      stylistic: true,
    },
  },
  prisma: {
    installStudio: false,
  },
})
