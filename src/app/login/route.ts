import { URL } from 'url';

import { NextRequest, NextResponse } from 'next/server';

import { signIn } from '@/auth';
import { APP_HOST } from '@/config';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const redirectTo = searchParams.get('redirect_to') || undefined;

  await signIn('ore-no-idp', {
    redirectTo,
    redirect: !!redirectTo,
  });

  return NextResponse.redirect(redirectTo || `${APP_HOST}/dashboard`);
}
