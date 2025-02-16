import { NextResponse } from 'next/server';

import { auth } from '~/auth';
import { APP_HOST } from '~/config';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|login|favicon).+)'],
};

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(`${APP_HOST}/login`);
  }
});
