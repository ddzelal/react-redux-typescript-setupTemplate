import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionsTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionsTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTdoAction {
  type: ActionsTypes.deleteTodo;
  payload: number;
}
const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionsTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTdoAction => {
  return {
    type: ActionsTypes.deleteTodo,
    payload: id,
  };
};
