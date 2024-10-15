import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import { z } from 'zod'
import { getStringFromBuffer } from './lib/utils'
import { getUser } from './app/login/actions'
import google from 'next-auth/providers/google'

export const { auth, signIn, signOut,  handlers: {GET, POST} } = NextAuth({
  ...authConfig,
  providers: [
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ]
})

