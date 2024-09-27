import { useActionState, useEffect } from 'react';

import { styled } from 'restyle';

import { Button } from '@/app/_components/button';
import { useModal } from '@/app/_components/modal/context';
import { deleteTodo } from '@/app/dashboard/todos/_actions';
import { useTodo } from '@/app/dashboard/todos/_context';

export const DeleteForm = () => {
  const [, setModalState] = useModal();
  const [todo] = useTodo();
  if (!todo) {
    throw new Error('Todo is required');
  }
  const [lastResult, action, isPending] = useActionState(deleteTodo.bind(null, todo.id), undefined);
  useEffect(() => {
    if (lastResult?.status === 'success' && !isPending) {
      setModalState({ id: '', isOpen: false });
    }
  }, [isPending, lastResult, setModalState]);

  return (
    <Container>
      <Button type="button" onClick={() => setModalState({ id: '', isOpen: false })}>
        Cancel
      </Button>
      <form action={action}>
        <Button type="submit">Delete</Button>
      </form>
    </Container>
  );
};

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  columnGap: '1rem',
});
