import { Action, createReducer, on } from '@ngrx/store';
import { TodoActionsUnion } from '../actions/todo.actions';
import { TodoActions } from '../actions';


export interface TodoState {
  todos: string[];
}

export const initialState: TodoState = {
  todos: []
};

const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodosSuccessful, (state, { todos }) => {
    return ({ ...state, todos });
  })
);

export function reducer(state: TodoState | undefined, action: TodoActionsUnion) {
  return todoReducer(state, action);
}
