import type { ReactElement } from 'react';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, afterEach, describe, expect } from 'vitest';

import ModalContextProvider from '@/app/_components/modal/context';
import { Modals } from '@/app/dashboard/todos/_components/modals/modals';

afterEach(() => {
  cleanup();
});

const setup = (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx),
});

describe('test case', () => {
  test('should render', () => {
    setup(
      <ModalContextProvider>
        <Modals />
      </ModalContextProvider>,
    );

    expect(true).toBe(true); // TODO: update test
  });
});
