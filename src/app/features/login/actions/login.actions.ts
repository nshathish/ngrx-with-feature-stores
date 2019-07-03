import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login',
  props<{ userName: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ sessionId: string }>()
);

export const loginFailed = createAction(
  '[Login] Login Failed',
  props<{ userName: string, errors: any }>()
);

export type LoginActionsUnion  = ReturnType<typeof login | typeof loginSuccess | typeof loginFailed>;
