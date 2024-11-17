import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use '/login' as the path for the signin page.
    signIn: '/login',
  },
  // A secret string you define, to ensure correct encryption
  // secret: 'your-secret-here',
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
})
