import { URL } from 'node:url';

import { type NextRequest, NextResponse } from 'next/server';

import { signIn } from '~/auth';
import { APP_HOST } from '~/config';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get('redirect_to') || `${APP_HOST}/dashboard`;
  const url = await signIn('zitadel', {
    redirectTo,
  });

  return NextResponse.redirect(url);
}
