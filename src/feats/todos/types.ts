export type Todo = {
  id: number;
  title: string;
  status: 'done' | 'undone';
  description: string;
};

export type CreateTodoData = Omit<Todo, 'id'>;
