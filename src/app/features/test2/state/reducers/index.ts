import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import * as fromTest2 from './test2.reducer';

export interface State {

  test2: fromTest2.State;
}

export const reducers: ActionReducerMap<State> = {

  test2: fromTest2.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
