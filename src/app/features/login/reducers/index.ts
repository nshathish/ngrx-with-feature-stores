import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { LoginState, reducer as loginReducer } from './login.reducer';

import { environment } from '../../../../environments/environment';

export interface State {
  loginState: LoginState;
}

export const reducers: ActionReducerMap<State> = {
  loginState: loginReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
