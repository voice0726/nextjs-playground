import type { ReactElement } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, afterEach, vi, describe } from 'vitest';

import ModalContextProvider from '@/app/_components/modal/context';
import { DeleteForm } from '@/app/dashboard/todos/_components/delete-form/delete-form';

const { mockDeleteTodo, mockModal } = vi.hoisted(() => ({
  mockDeleteTodo: vi.fn().mockImplementation((...data) => {
    console.log('action', data);
    return { status: 'success' };
  }),
  mockModal: vi.fn().mockReturnValue([{ id: 'delete-todo', isOpen: true }, vi.fn()]),
}));

vi.mock(import('@/app/_components/modal/context'), async (importOriginal) => ({
  ...(await importOriginal()),
  useModal: vi.fn().mockReturnValue([{}, mockModal]),
}));

vi.mock(import('@/app/dashboard/todos/_actions'), async (importOriginal) => ({
  ...(await importOriginal()),
  deleteTodo: mockDeleteTodo,
}));

const setup = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

afterEach(() => {
  cleanup();
  mockDeleteTodo.mockClear();
  mockModal.mockClear();
});

describe('deleteForm', () => {
  test('should delete', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <DeleteForm todo={{ id: '1', title: 'title', description: 'description', completed: false }} />
      </ModalContextProvider>,
    );
    await user.click(screen.getByRole('button', { name: /Delete/i }));

    expect(screen.getByText('Delete')).toBeVisible();
    expect(mockDeleteTodo).toHaveBeenLastCalledWith('1', undefined, new FormData());
    expect(mockModal).toHaveBeenLastCalledWith({ id: '', isOpen: false });
  });

  test('should not delete', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <DeleteForm todo={{ id: '1', title: 'title', description: 'description', completed: false }} />
      </ModalContextProvider>,
    );
    await user.click(screen.getByRole('button', { name: /Cancel/i }));

    expect(mockModal).toHaveBeenCalledWith({ id: '', isOpen: false });
    expect(mockDeleteTodo).not.toHaveBeenCalled();
  });
});
