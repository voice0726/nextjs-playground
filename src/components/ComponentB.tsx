import { setTimeout } from 'timers';

import { unstable_noStore } from 'next/cache';

export const ComponentB = async () => {
  unstable_noStore();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>This is Component B</div>;
};
