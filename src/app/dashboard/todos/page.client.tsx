'use client';

import { Button } from '~/app/_components/button';
import { Modal } from '~/app/_components/modal';
import { useModal } from '~/app/_components/modal/context';
import { CreateForm } from '~/app/dashboard/todos/_components/create-form';
import { DeleteForm } from '~/app/dashboard/todos/_components/delete-form';
import { useTodo } from '~/app/dashboard/todos/_context';

export function TodoClientPage() {
  const [, setModal] = useModal();
  const [todo] = useTodo();

  return (
    <>
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
}
