import NextAuth from 'next-auth';

import { authConfig } from './auth.config';

export const {
  handlers: { GET, POST },
  auth,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  signIn,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  signOut,
} = NextAuth({
  ...authConfig,
});
