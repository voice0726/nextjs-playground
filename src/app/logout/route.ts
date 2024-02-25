import { auth, signOut } from '@/auth';

export async function GET() {
  const session = await auth();
  // TODO: logout redirect does not seem to work properly
  await signOut({ redirectTo: session?.logoutURL, redirect: true });
}
