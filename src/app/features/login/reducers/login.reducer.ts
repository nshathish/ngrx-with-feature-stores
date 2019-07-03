import { Action, createReducer, on } from '@ngrx/store';
import { LoginActionsUnion } from '../actions/login.actions';
import { LoginActions } from '../actions';


export interface LoginState {
  userName: string;
  sessionId?: string;
  isLoggedIn: boolean;
  errors?: any;
}

export const initialState: LoginState = {
  userName: '',
  isLoggedIn: false
};

const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, { sessionId }) => ({ ...state, sessionId, isLoggedIn: true, errors: null })),
  on(LoginActions.loginFailed, (state, { userName, errors}) => ({ ...state, userName, errors }))
);

export function reducer(state: LoginState | undefined, action: LoginActionsUnion) {
  return loginReducer(state, action);
}
