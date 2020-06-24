import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: "XXX",
      clientSecret: 'XXX'
    }),
  ],
  pages: {
    signin: '/auth/signin'
  }
}

export default (req, res) => NextAuth(req, res, options)