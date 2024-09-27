import { Account, NextAuthConfig, Profile } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import ZitadelProvider, { ZitadelProfile } from 'next-auth/providers/zitadel';

const provider = ZitadelProvider<ZitadelProfile>({
  issuer: process.env.ZITADEL_ISSUER,
  clientId: process.env.ZITADEL_CLIENT_ID || '',
  clientSecret: 'dummy',
  wellKnown: process.env.ZITADEL_WELL_KNOWN || '',
  authorization: {
    params: {
      scope: `openid email profile offline_access`,
    },
  },
  token: {
    params: {
      endpoint: process.env.ZITADEL_ISSUER + '/oauth/v2/token',
      scope: `openid email profile offline_access`,
    },
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async profile(profile) {
    return {
      sub: profile.sub,
      name: profile.name,
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      loginName: profile.preferred_username,
      image: profile.picture,
    };
  },
});

async function refreshAccessToken(token: JWT): Promise<JWT | null> {
  const res = await fetch(`${process.env.ZITADEL_ISSUER}/oauth/v2/token`, {
    body: new URLSearchParams({
      refresh_token: token.refreshToken ?? '',
      grant_type: 'refresh_token',
      client_id: process.env.ZITADEL_CLIENT_ID || '',
    }).toString(),
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  if (!res.ok) {
    console.error('Error during refreshAccessToken', res.statusText);
    token.error = 'RefreshAccessTokenError';

    return token;
  }

  const json = (await res.json()) as { access_token: string; expires_in: number; refresh_token: string };

  return {
    ...token,
    accessToken: json.access_token,
    expiresAt: (Math.floor(Date.now() / 1000) + Number(json.expires_in)) * 1000,
    refreshToken: json.refresh_token,
  };
}

export const authConfig = {
  providers: [provider],
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    async jwt({ token, user, account, trigger, profile }) {
      if (trigger === 'signIn') {
        validateAccount(account);
        validateProfile(profile);

        token = {
          ...token,
          userDetails: { ...user, id: profile.sub },
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expiresAt: account.expires_at * 1000,
          logoutUrl: `${process.env.ZITADEL_ISSUER}/oidc/v1/end_session?id_token_hint=${account.id_token}&post_logout_redirect_uri=http://localhost:3000/logout`,
        };
      }

      // Return previous token if the access token has not expired yet
      if (Date.now() < token.expiresAt) {
        return token;
      }

      // Access token has expired, try to update it
      return await refreshAccessToken(token);
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    async session({
      session,
      token: { accessToken, refreshToken, userDetails, expiresAt, error: tokenError, logoutUrl },
    }) {
      return {
        ...session,
        clientId: process.env.ZITADEL_CLIENT_ID || '',
        error: tokenError,
        logoutUrl: logoutUrl,
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiresAt: expiresAt,
        userDetails: userDetails,
      };
    },
  },
} satisfies NextAuthConfig;

function validateAccount(
  account: Account | null,
): asserts account is Account & { access_token: string; expires_at: number; refresh_token: string } {
  if (!account) {
    throw new TypeError('No account available');
  }
  if (!account.access_token) {
    throw new TypeError('No access token available');
  }
  if (!account.expires_at) {
    throw new TypeError('No expires at available');
  }
  if (!account.refresh_token) {
    throw new TypeError('No refresh token available');
  }
}

function validateProfile(profile: Profile | undefined): asserts profile is Profile & { sub: string } {
  if (!profile) {
    throw new TypeError('No profile available');
  }
  if (!profile.sub) {
    throw new TypeError('No sub available');
  }
}
