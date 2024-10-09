'use client';

import { Button } from '@/app/_components/button';
import { Modal } from '@/app/_components/modal';
import { useModal } from '@/app/_components/modal/context';
import { CreateForm } from '@/app/dashboard/todos/_components/create-form';
import { DeleteForm } from '@/app/dashboard/todos/_components/delete-form';
import { TodoTable } from '@/app/dashboard/todos/_components/todo-table';
import { useTodo } from '@/app/dashboard/todos/_context';
import type { Todo } from '@/app/dashboard/todos/_schema';

type Props = {
  todos: Todo[];
};

const TodoPage = ({ todos }: Props) => {
  const [, setModal] = useModal();
  const [todo] = useTodo();

  return (
    <>
      <h1>Todo page</h1>
      <TodoTable todos={todos} />
      <Button onClick={() => setModal({ id: 'create-todo', isOpen: true })}>Create</Button>
      <Modal name={'create-todo'} title={'Create a new todo'}>
        <CreateForm mode="create" />
      </Modal>
      <Modal name={'update-todo'} title={'Update a todo'}>
        <CreateForm mode="update" todo={todo} />
      </Modal>
      <Modal name={'delete-todo'} title={'Are you sure to delete?'}>
        <DeleteForm todo={todo} />
      </Modal>
    </>
  );
};
export default TodoPage;
