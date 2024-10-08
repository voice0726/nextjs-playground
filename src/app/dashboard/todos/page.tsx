'use client';

import { Button } from '@/app/_components/button';
import { useModal } from '@/app/_components/modal/context';
import { Modals } from '@/app/dashboard/todos/_components/modals';
import { TodoTable } from '@/app/dashboard/todos/_components/todo-table';
import type { Todo } from '@/app/dashboard/todos/_schema';

type Props = {
  todos: Todo[];
};

const TodoPage = ({ todos }: Props) => {
  const [, setModal] = useModal();

  return (
    <>
      <h1>Todo page</h1>
      <TodoTable todos={todos} />
      <Button onClick={() => setModal({ id: 'create-todo', isOpen: true })}>Create</Button>
      <Modals />
    </>
  );
};
export default TodoPage;
