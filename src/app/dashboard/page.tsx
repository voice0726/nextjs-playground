import { Button } from '~/app/_components/button';
import { auth } from '~/auth';

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome {session?.userDetails?.name}! You are logged in as {session?.userDetails?.email}
      </p>
      <Button>
        <a href="/logout">Logout</a>
      </Button>
    </div>
  );
}
