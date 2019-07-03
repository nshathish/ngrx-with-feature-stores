import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { TodoState, reducer as todoReducer } from './todo.reducer';


export interface State {
  todoState: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todoState: todoReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
