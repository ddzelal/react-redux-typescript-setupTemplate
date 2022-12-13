import { FetchTodosAction, DeleteTdoAction } from './todos';

export enum ActionsTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTdoAction;
