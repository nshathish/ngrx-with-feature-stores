import { Action, createReducer, on } from '@ngrx/store';
import * as Test2Actions from '../actions/test2.actions';

export interface State {

}

export const initialState: State = {

};

const test2Reducer = createReducer(
  initialState,

  on(Test2Actions.loadTest2s, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return test2Reducer(state, action);
}
