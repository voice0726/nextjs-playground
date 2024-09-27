import { z } from 'zod';

export const todoSchema = z.object({
  id: z.string(),
  title: z.string({ required_error: 'title is required' }).min(1),
  completed: z.boolean().optional(),
  description: z.string({ required_error: 'description is required' }).min(1),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const createTodoSchema = todoSchema.omit({ id: true });

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodo = z.infer<typeof createTodoSchema>;
