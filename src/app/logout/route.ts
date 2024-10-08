import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';

import { auth, signOut } from '@/auth';

export async function GET(req: NextRequest) {
  const session = await auth();
  const state = req.nextUrl.searchParams.get('state');
  if (state) {
    const cookie = req.cookies.get('logout_state');
    if (state !== cookie?.value) {
      throw new Error('Invalid state');
    }

    cookies().delete('logout_state');

    return await signOut({ redirectTo: '/', redirect: true });
  }
  const res = await fetch(`${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`, {
    headers: { Authorization: `Bearer ${session?.accessToken}` },
  });
  if (res.status === 401) {
    return await signOut({ redirectTo: '/', redirect: true });
  }
  if (!session?.logoutUrl) {
    return await signOut({ redirectTo: '/', redirect: true });
  }

  const rand = crypto.randomUUID().replaceAll('-', '');
  cookies().set('logout_state', rand);

  return redirect(`${session.logoutUrl}&state=${rand}`);
}
