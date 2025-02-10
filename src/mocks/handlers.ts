import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';
import { http, HttpResponse } from 'msw';

import { createTodoSchema, todoSchema } from '~/app/dashboard/todos/_schema';
import { mockData } from '~/mocks/mockData';

const mockAPIHost = 'http://localhost:8800';

const getNow = () => format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx');

export const handlers = [
  http.get(`${mockAPIHost}/todos`, () => {
    return HttpResponse.json(mockData, { status: 200 });
  }),
  http.post(`${mockAPIHost}/todos`, async ({ request }) => {
    const body = await request.json();
    const newId = mockData.length;

    const { success, data, error } = createTodoSchema.safeParse(body);
    if (!success) {
      console.error(error);
      return HttpResponse.json({ error }, { status: 400 });
    }

    const now = getNow();
    mockData.push({ ...data, id: String(newId), createdAt: now, updatedAt: now });
    console.log(data);
    console.log(now);
    console.log(mockData);

    return HttpResponse.json(body, { status: 200 });
  }),
  http.put(`${mockAPIHost}/todos/:id`, async ({ request, params }) => {
    const { id } = params;
    if (typeof id !== 'string') {
      return HttpResponse.json({ error: 'bad request' }, { status: 400 });
    }
    const body = await request.json();
    const { success, data, error } = todoSchema.safeParse(body);
    if (!success) {
      return HttpResponse.json({ error }, { status: 400 });
    }

    const targetIndex = mockData.findIndex((v) => v.id === id);
    if (targetIndex < 0) {
      return HttpResponse.json({ message: 'item not found' }, { status: 404 });
    }
    const updated = {
      ...mockData[targetIndex],
      ...data,
      updatedAt: getNow(),
    };
    mockData[targetIndex] = updated;

    return HttpResponse.json({ updated }, { status: 200 });
  }),
  http.delete(`${mockAPIHost}/todos/:id`, ({ params }) => {
    const { id } = params;
    if (typeof id !== 'string') {
      return HttpResponse.json({ error: 'bad request' }, { status: 400 });
    }

    const targetIndex = mockData.findIndex((v) => v.id === id);
    if (targetIndex < 0) {
      return HttpResponse.json({ message: 'item not found' }, { status: 404 });
    }
    mockData.splice(targetIndex, 1);

    return HttpResponse.json({ message: 'success' }, { status: 200 });
  }),
];
