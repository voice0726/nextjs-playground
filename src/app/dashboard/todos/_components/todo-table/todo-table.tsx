'use client';

import { type CellContext, createColumnHelper } from '@tanstack/react-table';
import { format, parseJSON } from 'date-fns';

import { Button } from '~/app/_components/button';
import { DataTable } from '~/app/_components/data_table';
import { useModal } from '~/app/_components/modal/context';
import { useTodo } from '~/app/dashboard/todos/_context';
import type { Todo } from '~/app/dashboard/todos/_schema';

type Props = {
  todos: Todo[];
};

export function TodoTable({ todos }: Props) {
  const columnHelper = createColumnHelper<Todo>();
  const [, setTodo] = useTodo();
  const [, setModalState] = useModal();

  const columns = [
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'completed', header: 'Completed' },
    { accessorKey: 'description', header: 'Description' },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: (props: CellContext<Todo, string>) =>
        props.row.original.createdAt ? format(parseJSON(props.row.original.createdAt), 'yyyy/MM/dd HH:mm:ss') : '',
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: (props: CellContext<Todo, string>) =>
        props.row.original.updatedAt ? format(parseJSON(props.row.original.updatedAt), 'yyyy/MM/dd HH:mm:ss') : '',
    },
    columnHelper.display({
      id: 'update',
      cell: (props) => (
        <Button
          onClick={() => {
            setTodo(props.row.original);
            setModalState({ id: 'update-todo', isOpen: true });
          }}
        >
          Edit
        </Button>
      ),
    }),
    columnHelper.display({
      id: 'delete',
      cell: (props) => (
        <Button
          onClick={() => {
            setTodo(props.row.original);
            setModalState({ id: 'delete-todo', isOpen: true });
          }}
        >
          Delete
        </Button>
      ),
    }),
  ];

  return <DataTable<Todo, string> columns={columns} data={todos} />;
}
