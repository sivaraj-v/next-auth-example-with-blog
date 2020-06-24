import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: "1074229121315-1i3bbtphu7sfqvphf8cadmfubttubci9.apps.googleusercontent.com",
      clientSecret: 'oifwzE1WSIG_OEIelgXuI5td'
    }),
  ],
  pages: {
    signin: '/auth/signin'
  }
}

export default (req, res) => NextAuth(req, res, options)