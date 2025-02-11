import { UTCDate } from '@date-fns/utc';
import { format } from 'date-fns';

import { Todo } from '~/app/dashboard/todos/_schema';

export const mockData: Todo[] = [
  {
    id: '1',
    title: 'test1',
    completed: false,
    description: 'test1',
    createdAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
    updatedAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
  },
  {
    id: '2',
    title: 'test2',
    completed: true,
    description: 'test3',
    createdAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
    updatedAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
  },
  {
    id: '3',
    title: 'test3',
    completed: false,
    description: 'test3',
    createdAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
    updatedAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
  },
  {
    id: '4',
    title: 'test4',
    completed: false,
    description: 'test4',
    createdAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
    updatedAt: format(new UTCDate(), 'yyyy-MM-dd HH:mm:ss xxxx'),
  },
];
