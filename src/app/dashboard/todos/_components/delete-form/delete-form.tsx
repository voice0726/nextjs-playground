import { useActionState, useEffect } from 'react';

import { styled } from '@linaria/react';

import { Button } from '~/app/_components/button';
import { useModal } from '~/app/_components/modal/context';
import { deleteTodo } from '~/app/dashboard/todos/_actions';
import type { Todo } from '~/app/dashboard/todos/_schema';

type Props = {
  todo: Todo | undefined;
};

export const DeleteForm = ({ todo }: Props) => {
  const [, setModalState] = useModal();
  const [lastResult, action, isPending] = useActionState(deleteTodo.bind(null, todo?.id ?? ''), undefined);
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;
