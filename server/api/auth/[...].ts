import GithubProvider from 'next-auth/providers/github'
import TwitchProvider from 'next-auth/providers/twitch'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '~/lib/prisma'
import { NuxtAuthHandler } from '#auth'

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
      ;(session as any).is_subscribed = me.is_subscribed
      return Promise.resolve(session)
    },
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    CredentialsProvider.default({
      name: 'Credentials',
      authorize(credentials: any) {
        // NOTE: not suitable for prod, used as test logic
        const user = {
          email: 'test@wp.pl',
          password: 'password',
        }
        if (credentials.email === user.email && credentials.password === user.password) {
          return user
        }
      },
    }),
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
