import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SummaryEffects } from './summary.effects';

describe('SummaryEffects', () => {
  let actions$: Observable<any>;
  let effects: SummaryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SummaryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SummaryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
