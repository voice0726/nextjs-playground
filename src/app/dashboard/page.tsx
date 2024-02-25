import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome {session?.user?.name}! You are logged in as{' '}
        {session?.user?.email}
      </p>
      <a href="/logout">Logout</a>
    </div>
  );
}
