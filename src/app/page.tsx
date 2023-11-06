import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to hoge</h1>
      <Link href="/login">Login</Link>
    </main>
  );
}
