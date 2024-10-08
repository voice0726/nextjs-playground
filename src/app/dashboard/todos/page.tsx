import { objectToCamel } from 'typescript-case-convert';

import ModalContextProvider from '@/app/_components/modal/context';
import { Modals } from '@/app/dashboard/todos/_components/modals';
import { TodoTable } from '@/app/dashboard/todos/_components/todo-table';
import { TodoProvider } from '@/app/dashboard/todos/_context';
import type { Todo } from '@/app/dashboard/todos/_schema';
import { auth } from '@/auth';
import { API_HOST } from '@/config';

export const dynamic = 'force-dynamic';

export default async function TodoPage() {
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
        <div>
          <h1>Todo page</h1>
          <TodoTable todos={todos} />
          <Modals />
        </div>
      </ModalContextProvider>
    </TodoProvider>
  );
}
