import { Suspense } from 'react';

import { ComponentA } from '@/components/ComponentA';
import { ComponentB } from '@/components/ComponentB';
import { Loading } from '@/components/Loading';

export default function () {
  return (
    <div>
      <h1>Partial Pre-rendering experiment</h1>
      <Suspense fallback={<Loading />}>
        <ComponentA />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ComponentB />
      </Suspense>
    </div>
  );
}
