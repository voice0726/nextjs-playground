'use client';

import {
  type Dispatch,
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

import type { Todo } from '@/app/dashboard/todos/_schema';

export type TodoState = {
  todo: Todo | undefined;
  setTodo: Dispatch<Todo | undefined>;
};

export const TodoContext = createContext<TodoState>({} as TodoState);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todo, setTodo] = useState<Todo>();

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  return [context.todo, context.setTodo] as const;
};
