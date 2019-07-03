import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../services/login.service';
import { LoginActions } from '../actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.login),
    mergeMap(action =>
      this.loginService.login(action['userName'], action['password']).pipe(
        tap(data => console.log('data', data)),
        map(sessionId => LoginActions.loginSuccess({ sessionId })),
        catchError(errors => of(LoginActions.loginFailed({ userName: action['userName'], errors })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) {}

}
