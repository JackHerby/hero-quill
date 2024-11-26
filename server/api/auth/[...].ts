import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GithubProvider from 'next-auth/providers/github'
import TwitchProvider from 'next-auth/providers/twitch'
import prisma from '~/lib/prisma'

const runtimeConfig = useRuntimeConfig()

async function getMe(session: any) {
  return await $fetch('/api/me', {
    method: 'POST',
    query: {
      API_ROUTE_SECRET: runtimeConfig.API_ROUTE_SECRET,
    },
    body: {
      record: {
        email: session?.user?.email,
      },
    },
  })
}

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use '/login' as the path for the signin page.
    signIn: '/login',
  },
  adapter: PrismaAdapter(prisma),
  // A secret string you define, to ensure correct encryption
  // secret: 'your-secret-here',
  callbacks: {
    session: async ({ session }) => {
      const me = await getMe(session)
      ;(session as any).is_subscribed = me?.is_subscribed
      return Promise.resolve(session)
    },
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error Use .default here for it to work during SSR.
    TwitchProvider.default({
      clientId: runtimeConfig.public.TWITCH_CLIENT_ID,
      clientSecret: runtimeConfig.TWITCH_CLIENT_SECRET,
    }),
  ],
})
