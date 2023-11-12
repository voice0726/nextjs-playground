// TODO: consider the name of this module

import Axios from 'axios';

import { CreateTodoData, Todo } from './types';

import { API_HOST } from '@/config';

const axios = Axios.create({
  baseURL: API_HOST,
  headers: { 'Content-Type': 'application/json' },
});

export const listTodos = async () => {
  return await axios.get<Todo[]>(`/todos`).then((res) => res.data);
};

export const createTodo = async (todo: CreateTodoData) => {
  return await axios.post(`/todos`, todo);
};

