import { Action, createReducer, on } from '@ngrx/store';
import * as SummaryActions from '../actions/summary.actions';

export interface SummaryState {
  mesaages: string[];
}

export const initialState: SummaryState = {
  mesaages: []

};

const summaryReducer = createReducer(
  initialState,

  on(SummaryActions.loadSummarys, state => state),

);

export function reducer(state: SummaryState | undefined, action: Action) {
  return summaryReducer(state, action);
}
