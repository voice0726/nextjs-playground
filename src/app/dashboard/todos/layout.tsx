import { objectToCamel } from 'typescript-case-convert';

import ModalContextProvider from '@/app/_components/modal/context';
import { TodoProvider } from '@/app/dashboard/todos/_context';
import type { Todo } from '@/app/dashboard/todos/_schema';
import TodoPage from '@/app/dashboard/todos/page';
import { auth } from '@/auth';
import { API_HOST } from '@/config';

export const dynamic = 'force-dynamic';

export default async function TodoLayout() {
  const session = await auth();
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const todos = await fetch(`${API_HOST}/todos`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      ContentType: 'application/json',
    },
    next: { tags: ['todos'] },
  })
    .then((res) => res.json() as Promise<Todo[]>)
    .then((res) => res.map((i) => objectToCamel(i)));

  return (
    <TodoProvider>
      <ModalContextProvider>
        <TodoPage todos={todos} />
      </ModalContextProvider>
    </TodoProvider>
  );
}
