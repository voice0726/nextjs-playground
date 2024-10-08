import type { ReactElement } from 'react';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';

import ModalContextProvider from '@/app/_components/modal/context';
import { CreateForm } from '@/app/dashboard/todos/_components/create-form/create-form';

const { mockSetModal, mockAction } = vi.hoisted(() => ({
  mockSetModal: vi.fn(),
  mockAction: vi.fn().mockImplementation((...data) => {
    console.log('mock action called');
    let d = new FormData();
    if (data[1] instanceof FormData) {
      d = data[1];
    } else if (data[2] instanceof FormData) {
      d = data[2];
    } else {
      return;
    }
    d.forEach((value, key) => {
      console.log(key, value);
    });
    return { status: 'success' };
  }),
}));

vi.mock(import('@/app/dashboard/todos/_actions'), async (importOriginal) => ({
  ...(await importOriginal()),
  createTodo: mockAction,
  updateTodo: mockAction,
}));

vi.mock(import('@/app/_components/modal/context'), async (importOriginal) => ({
  ...(await importOriginal()),
  useModal: vi.fn().mockReturnValue([{}, mockSetModal]),
}));

const setup = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

afterEach(() => {
  cleanup();
  mockAction.mockClear();
  mockSetModal.mockClear();
});

describe('createForm', () => {
  test('create todo successfully', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <CreateForm mode={'create'} />
      </ModalContextProvider>,
    );
    await user.type(screen.getByRole('textbox', { name: 'Title' }), 'hoge');
    // i don't know why but user.click doesn't work when it comes after user.type of Description
    await user.click(screen.getByRole('checkbox', { name: 'Completed' }));
    await user.type(
      screen.getByRole('textbox', { name: 'Description' }),
      'fuga',
    );

    await user.click(screen.getByRole('button', { name: /Submit/i }));

    const expected = new FormData();
    expected.set('title', 'hoge');
    expected.set('description', 'fuga');
    expected.set('completed', 'on');

    expect(mockAction).toHaveBeenLastCalledWith(undefined, expected);
    expect(mockSetModal).toHaveBeenLastCalledWith({ id: '', isOpen: false });
  });

  test('ng', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <CreateForm mode={'create'} />
      </ModalContextProvider>,
    );

    expect(screen.getByRole('textbox', { name: 'Title' })).toHaveTextContent(
      '',
    );
    expect(
      screen.getByRole('textbox', { name: 'Description' }),
    ).toHaveTextContent('');

    await user.click(screen.getByRole('button', { name: /Submit/i }));

    expect(
      screen.getByRole('textbox', { name: 'Title' }).nextSibling,
    ).toHaveTextContent('title is required');
    expect(
      screen.getByRole('textbox', { name: 'Description' }).nextSibling,
    ).toHaveTextContent('description is required');

    expect(mockAction).not.toHaveBeenCalled();
  });
});

describe('updateForm', () => {
  test('update todo successfully', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <CreateForm
          mode={'update'}
          todo={{
            id: 'fake-id',
            title: 'title',
            description: 'desc',
            completed: true,
          }}
        />
      </ModalContextProvider>,
    );
    await user.click(screen.getByRole('button', { name: /Submit/i }));

    const expected = new FormData();
    expected.set('title', 'title');
    expected.set('description', 'desc');
    expected.set('completed', 'on');

    expect(mockAction).toHaveBeenLastCalledWith('fake-id', undefined, expected);
  });

  test('uncheck completed', async () => {
    const { user } = setup(
      <ModalContextProvider>
        <CreateForm
          mode={'update'}
          todo={{
            id: 'fake-id',
            title: 'title',
            description: 'desc',
            completed: true,
          }}
        />
      </ModalContextProvider>,
    );
    await user.click(screen.getByRole('checkbox', { name: 'Completed' }));

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    const expected = new FormData();
    expected.set('title', 'title');
    expected.set('description', 'desc');

    expect(mockAction).toHaveBeenCalledWith('fake-id', undefined, expected);
  });
});
