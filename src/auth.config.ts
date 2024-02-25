import { NextResponse } from 'next/server';
import type { NextAuthConfig, Profile } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { APP_HOST } from '@/config';

type HydraTokenRes = {
  active: boolean,
  scope: string,
  client_id: string,
  sub: string
  exp: number
  iat: number,
  nbf: number,
  aud: string[],
  iss: string
  token_type: string
  token_use: string
}

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    }),
    {
      id: 'ore-no-idp',
      name: 'ore-no-idp',
      type: 'oidc',
      clientId: process.env.AUTH_CLIENT_ID ?? '',
      clientSecret: process.env.AUTH_CLIENT_SECRET ?? '',
      wellKnown: 'http://localhost:8444/.well-known/openid-configuration',
      issuer: 'http://localhost:8444/',
      authorization: {
        url: 'http://localhost:8444/oauth2/auth',
        params: { scope: 'openid' },
      },
      // eslint-disable-next-line @typescript-eslint/require-await
      async profile(profile: Profile) {
        process.env.DEPLOY_ENV !== 'production' && console.log('profile', profile);

        return {
          id: profile.sub ?? '',
          email: profile.traits.email,
        };
      },
      token: 'http://localhost:8444/oauth2/token',
      userinfo: 'http://localhost:8444/userinfo',
      checks: ['pkce', 'state'],
    },
  ],
  session: { strategy: 'jwt' },
  debug: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized: async ({ request, auth }) => {
      const redirectTo = request.url;

      const redirectUrl = `${APP_HOST}/login?redirect_to=${redirectTo}`;
      if (!auth?.accessToken) {

        return NextResponse.redirect(redirectUrl);
      }

      const body = JSON.stringify({ token: auth.accessToken });
      console.log(body);

      const resBody = await fetch('http://localhost:8445/admin/oauth2/introspect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `token=${auth.accessToken}`,
      }).then((res) => res.json() as Promise<HydraTokenRes>);


      if (!resBody || !resBody.active) {
        return NextResponse.redirect(redirectUrl);
      }

      return true;
    },
    jwt: ({ token, user, account }) => {
      if (account?.providerAccountId) {
        token.accessToken = account.access_token;
        token.userDetails = user;
        token.logoutURL = `${process.env.HYDRA_PUBLIC_ENDPOINT_URL}/oauth2/sessions/logout?id_token_hint=${account.id_token}`;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token.accessToken) {
        session.accessToken = token.accessToken as string;
        session.logoutURL = token.logoutURL as string;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
