import { redirect } from 'next/navigation';
import { objectToCamel } from 'typescript-case-convert';

import ModalContextProvider from '~/app/_components/modal/context';
import { TodoTable } from '~/app/dashboard/todos/_components/todo-table';
import { TodoProvider } from '~/app/dashboard/todos/_context';
import type { Todo } from '~/app/dashboard/todos/_schema';
import { TodoClientPage } from '~/app/dashboard/todos/page.client';
import { auth } from '~/auth';
import { API_HOST } from '~/config';

export default async function TodoPage() {
  const session = await auth();
  if (!session) {
    redirect('/login?redirect_to=/dashboard/todos');
  }
  const todos = await fetch(`${API_HOST}/todos`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      ContentType: 'application/json',
    },
    next: { tags: ['todos'] },
  })
    .then((res) => res.json() as Promise<Todo[]>)
    .then((res) => res.map((i) => objectToCamel(i)))
    .catch((e) => {
      console.error('Error fetching todos:', e);
      return [];
    });

  return (
    <TodoProvider>
      <ModalContextProvider>
        <h1>Todo page</h1>
        <TodoTable todos={todos} />
        <TodoClientPage />
      </ModalContextProvider>
    </TodoProvider>
  );
}
