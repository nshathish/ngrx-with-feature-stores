import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SummaryActions from '../actions/summary.actions';


@Injectable()
export class SummaryEffects {


  loadSummarys$ = createEffect(() => this.actions$.pipe(
    ofType(SummaryActions.loadSummarys),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  ));


  constructor(private actions$: Actions) {}

}
