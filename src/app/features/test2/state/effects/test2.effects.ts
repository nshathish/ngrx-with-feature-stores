import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as Test2Actions from '../actions/test2.actions';


@Injectable()
export class Test2Effects {


  loadTest2s$ = createEffect(() => this.actions$.pipe(
    ofType(Test2Actions.loadTest2s),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
