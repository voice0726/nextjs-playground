import 'next-auth';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    /** User details obtained from API. */
    userDetails: User & DefaultSession['user'];
    /** Logout URL obtained from Hydra. */
    logoutURL: string;
    /** AccessToken obtained from Hydra. */
    accessToken: string;

  }

  interface Profile {
    sub: string;
    traits: {
      email: string;
    };
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: string;
    email: string;
  }

  interface JWT {
    /** User details obtained from API. */
    userDetails: User & DefaultSession['user'];
    /** Logout URL obtained from Hydra. */
    logoutURL: string;
    /** AccessToken obtained from Hydra. */
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    /** User details obtained from API. */
    userDetails: User & DefaultSession['user'];
    /** Logout URL obtained from Hydra. */
    logoutURL: string;
    /** AccessToken obtained from Hydra. */
    accessToken: string;
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: string;
    email: string;
  }
}
