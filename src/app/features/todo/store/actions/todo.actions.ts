import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const loadTodosSuccessful = createAction(
  '[Todo] Load Todos Successful',
  props<{ todos: string[] }>()
);

export type TodoActionsUnion = ReturnType<typeof loadTodos | typeof loadTodosSuccessful>;




