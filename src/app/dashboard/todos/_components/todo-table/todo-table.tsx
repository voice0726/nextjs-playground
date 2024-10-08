'use client';

import { CellContext, createColumnHelper } from '@tanstack/react-table';
import { parseJSON, format } from 'date-fns';

import { Button } from '@/app/_components/button';
import { DataTable } from '@/app/_components/data_table';
import { Modal } from '@/app/_components/modal';
import { useModal } from '@/app/_components/modal/context';
import { CreateForm } from '@/app/dashboard/todos/_components/create-form';
import { DeleteForm } from '@/app/dashboard/todos/_components/delete-form/delete-form';
import { useTodo } from '@/app/dashboard/todos/_context';
import { Todo } from '@/app/dashboard/todos/_schema';

type Props = {
  todos: Todo[];
};

export const TodoTable = ({ todos }: Props) => {
  const columnHelper = createColumnHelper<Todo>();
  const [todo, setTodo] = useTodo();
  const [, setModalState] = useModal();

  const columns = [
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'completed', header: 'Completed' },
    { accessorKey: 'description', header: 'Description' },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: (props: CellContext<Todo, string>) =>
        props.row.original.createdAt ? format(parseJSON(props.row.original.createdAt), 'yyyy/MM/dd HH:ii:ss') : '',
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      cell: (props: CellContext<Todo, string>) =>
        props.row.original.updatedAt ? format(parseJSON(props.row.original.updatedAt), 'yyyy/MM/dd HH:ii:ss') : '',
    },
    columnHelper.display({
      id: 'update',
      cell: (props) => (
        <Button
          onClick={() => {
            setTodo(props.row.original);
            setModalState({ id: 'UPDATE', isOpen: true });
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
            setModalState({ id: 'DELETE', isOpen: true });
          }}
        >
          Delete
        </Button>
      ),
    }),
  ];

  return (
    <>
      <DataTable<Todo, string> columns={columns} data={todos} />
      <Button onClick={() => setModalState({ id: 'CREATE', isOpen: true })}>Create</Button>
      <Modal name={`CREATE`} title={'Create a new todo'}>
        <CreateForm mode="create" />
      </Modal>
      <Modal name={`UPDATE`} title={'Update a todo'}>
        <CreateForm mode="update" todo={todo} />
      </Modal>
      <Modal name={`DELETE`} title={'Are you sure to delete?'}>
        <DeleteForm todo={todo} />
      </Modal>
    </>
  );
};
