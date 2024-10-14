'use client';

import { useActionState, useEffect } from 'react';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';

import { Button } from '~/app/_components/button';
import { Checkbox } from '~/app/_components/checkbox';
import { Container, FormGroup, Input, Label } from '~/app/_components/form';
import { useModal } from '~/app/_components/modal/context';
import { createTodo, updateTodo } from '~/app/dashboard/todos/_actions';
import { type Todo, createTodoSchema } from '~/app/dashboard/todos/_schema';

type Props =
  | {
      mode: 'create';
      todo?: never;
    }
  | {
      mode: 'update';
      todo: Todo | undefined;
    };

export const CreateForm = ({ mode, todo }: Props) => {
  const [, setModalState] = useModal();
  const actionFunc = mode === 'update' && todo ? updateTodo.bind(null, todo.id) : createTodo;
  const [lastResult, action, isPending] = useActionState(actionFunc, undefined);
  const [form, fields] = useForm({
    lastResult,
    defaultValue: mode === 'update' ? todo : undefined,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createTodoSchema });
    },
    shouldValidate: 'onBlur',
  });

  useEffect(() => {
    if (lastResult?.status === 'success' && !isPending) {
      setModalState({ id: '', isOpen: false });
    }
  }, [isPending, lastResult, setModalState]);

  return (
    <form action={action} {...getFormProps(form)}>
      <Container>
        <FormGroup>
          <Label htmlFor={fields.title.id}>Title</Label>
          <Input {...getInputProps(fields.title, { type: 'text' })} />
          {fields.title.errors && <p>{fields.title.errors}</p>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor={fields.description.id}>Description</Label>
          <Input {...getInputProps(fields.description, { type: 'text' })} />
          {fields.description.errors && <p>{fields.description.errors}</p>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor={fields.completed.id}>Completed</Label>
          <Checkbox
            {...getInputProps(fields.completed, { type: 'checkbox' })}
            aria-checked={fields.completed.value === 'on'}
          />
          {fields.completed.errors && <p>{fields.completed.errors}</p>}
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
          {form.errors && <p>{form.errors}</p>}
        </FormGroup>
      </Container>
    </form>
  );
};
