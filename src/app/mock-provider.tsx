'use client';
import { ReactNode, useEffect, useState } from 'react';

export function MockProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [mockingEnabled, enableMocking] = useState(false);

  useEffect(() => {
    async function enableApiMocking() {
      const { worker } = await import('../mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass' });
      enableMocking(true);
    }

    void enableApiMocking();
  }, []);

  if (!mockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
