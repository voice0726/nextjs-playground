'use client';

import { Modal } from '@/app/_components/modal';
import { CreateForm } from '@/app/dashboard/todos/_components/create-form';
import { DeleteForm } from '@/app/dashboard/todos/_components/delete-form';
import { useTodo } from '@/app/dashboard/todos/_context';

export const Modals = () => {
  const [todo] = useTodo();
  return (
    <>
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
