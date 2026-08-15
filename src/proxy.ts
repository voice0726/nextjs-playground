import { NextResponse } from 'next/server';

import { auth } from '~/auth';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|login).+)'],
};

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
});
