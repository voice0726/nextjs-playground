import type { Intent } from '@conform-to/dom';
import { parseWithZod } from '@conform-to/zod';
import { revalidatePath } from 'next/cache';
import { objectToSnake } from 'typescript-case-convert';
import type { Schema } from 'zod';

export async function createData({
  userID,
  mode,
  accessToken,
  formData,
  schema,
  apiURL,
  formErrors,
  revalidateURL,
}: {
  userID: string;
  mode: string;
  accessToken: string;
  formData: FormData;
  apiURL: string;
  schema: Schema | ((intent: Intent | null) => Schema);
  formErrors: string[];
  revalidateURL: string;
}) {
  const submission = parseWithZod(formData, { schema });
  if (submission.status !== 'success') {
    return submission.reply();
  }

  const response = await fetch(`${apiURL}`, {
    method: mode === 'create' ? 'POST' : 'PUT',
    body: JSON.stringify({ ...objectToSnake(submission.value), user_id: userID }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (response.status >= 400) {
    return submission.reply({ formErrors });
  }

  revalidatePath(revalidateURL);

  return submission.reply();
}
