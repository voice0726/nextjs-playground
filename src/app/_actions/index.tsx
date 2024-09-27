'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { addressSchema, createAddressSchema } from '@/app/dashboard/addresses/_schema';
import { auth } from '@/auth';
import { API_HOST } from '@/config';
import { createData } from '@/lib/api';

export async function createAddress(prev: unknown, formData: FormData) {
  const session = await auth();
  if (!session || !session.userDetails.id) {
    redirect(`${API_HOST}/login`);
  }

  const payload = {
    userID: session.userDetails.id,
    mode: 'create',
    accessToken: session.accessToken,
    formData: formData,
    schema: createAddressSchema,
    revalidateURL: '/dashboard/addresses',
    apiURL: `${API_HOST}/addresses`,
    formErrors: ['Failed to create a todo'],
  };

  return await createData(payload);
}

export async function updateAddress(id: string, prev: unknown, formData: FormData) {
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
    schema: addressSchema,
    revalidateURL: '/dashboard/addresses',
    apiURL: `${API_HOST}/addresses/${id}`,
    formErrors: ['Failed to create an address'],
  };

  return await createData(payload);
}

export async function deleteAddress(targetId: string, _: unknown, __: FormData) {
  const session = await auth();
  if (!session) {
    redirect(`${API_HOST}/login`);
  }
  const res = await fetch(`${API_HOST}/addresses/${targetId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${session.accessToken}` },
  });
  if (!res.ok) {
    return { status: 'error', formErrors: ['Failed to delete an addresses'] };
  }

  revalidatePath('/dashboard/addresses');

  return { status: 'success', formErrors: [] };
}
