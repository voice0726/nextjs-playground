import { listTodos } from '@/feats/todos/data';

export default async function TodoPage() {
  const todos = await listTodos();

  return (
    <div>
      <h1>Todo page</h1>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.id} {todo.title} {todo.description} {todo.status}
        </p>
      ))}
    </div>
  );
}
