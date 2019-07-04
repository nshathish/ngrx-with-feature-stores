import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { SummaryState, reducer as summaryReducer } from './summary.reducer';


export interface State {
  summaryState: SummaryState;
}

export const reducers: ActionReducerMap<State> = {
  summaryState: summaryReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
