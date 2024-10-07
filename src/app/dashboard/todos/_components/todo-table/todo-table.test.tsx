import type { ReactElement } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, afterEach, describe } from 'vitest';

import ModalContextProvider from '@/app/_components/modal/context';
import { TodoTable } from '@/app/dashboard/todos/_components/todo-table/todo-table';
import type { Todo } from '@/app/dashboard/todos/_schema';

const testData: Todo[] = [
  {
    id: '1',
    title: 'title1',
    description: 'description1',
    completed: false,
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2022-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'title2',
    description: 'description2',
    completed: true,
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2022-01-01T00:00:00Z',
  },
];

const setup = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

afterEach(() => {
  cleanup();
});

describe('todoTable', () => {
  test('todo table shows todo titles', () => {
    expect.assertions(2);

    setup(
      <ModalContextProvider>
        <TodoTable todos={testData} />
      </ModalContextProvider>,
    );

    expect(screen.getByText('title1')).toBeVisible();
    expect(screen.getByText('title2')).toBeVisible();
  });
});
