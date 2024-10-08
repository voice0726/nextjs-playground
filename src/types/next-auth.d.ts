import 'next-auth';
import type { AdapterUser } from '@auth/core/adapters';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    userDetails: User;
    clientId: string;
    error?: string;
    logoutUrl?: string;
    accessToken: string;
    refreshToken?: string;
    expiresAt: number;
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    loginName: string;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
    userDetails: User | AdapterUser;
    error?: string;
    logoutUrl?: string;
    accessToken: string;
    refreshToken?: string;
    expiresAt: number;
  }

  interface User {
    loginName: string;
  }

  interface Session {
    userDetails: User;
    clientId: string;
    accessToken: string;
    refreshToken?: string;
    error?: string;
    logoutUrl?: string;
  }
}
