'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createTodoSchema, todoSchema } from '@/app/dashboard/todos/_schema';
import { auth } from '@/auth';
import { API_HOST } from '@/config';
import { createData } from '@/lib/api';

export async function createTodo(_: unknown, formData: FormData) {
  const session = await auth();
  if (!session || !session.userDetails.id) {
    redirect(`${API_HOST}/login`);
  }

  const payload = {
    userID: session.userDetails.id,
    mode: 'create',
    accessToken: session.accessToken,
    formData: formData,
    schema: createTodoSchema,
    revalidateURL: '/dashboard/todos',
    apiURL: `${API_HOST}/todos`,
    formErrors: ['Failed to create a todo'],
  };

  return await createData(payload);
}

export async function updateTodo(id: string, _: unknown, formData: FormData) {
  const session = await auth();
  if (!session || !session.userDetails.id) {
    redirect(`${API_HOST}/login`);
  }

  formData.set('id', id);
  const payload = {
    userID: session.userDetails.id,
    mode: 'update',
    accessToken: session.accessToken,
    formData: formData,
    schema: todoSchema,
    revalidateURL: '/dashboard/todos',
    apiURL: `${API_HOST}/todos/${id}`,
    formErrors: ['Failed to create a todo'],
  };

  return await createData(payload);
}

export async function deleteTodo(targetId: string, _: unknown, __: FormData) {
  const session = await auth();
  if (!session) {
    redirect(`${API_HOST}/login`);
  }
  const res = await fetch(`${API_HOST}/todos/${targetId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });
  if (!res.ok) {
    return { status: 'error', formErrors: ['Failed to delete todo'] };
  }

  revalidatePath('/dashboard/todos');

  return { status: 'success', formErrors: [] };
}
