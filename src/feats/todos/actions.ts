'use server';

import { isAxiosError } from 'axios';
import { z } from 'zod';

import { createTodo } from './data';

const TodoSchema = z.object({
  id: z.number(),
  title: z.string(),
  status: z.enum(['done', 'undone']),
  description: z.string(),
});

export type FormState = {
  errors: string;
  messages: string;
};

export async function createTodoAction(prev: FormState, formData: FormData) {
  const validated = TodoSchema.safeParse({
    title: formData.get('title'),
    status: formData.get('status'),
    description: formData.get('description'),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      messages: 'Missing fields. Failed to create Todo',
    };
  }

  try {
    await createTodo({ ...validated.data });
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      return {
        errors: e.message,
        messages: 'Server error. Failed to create Todo.',
      };
    }

    return {
      errors: 'unknown error',
      messages: 'Server error. Failed to create Todo.',
    };
  }
}

// todo: fetchはactions?
