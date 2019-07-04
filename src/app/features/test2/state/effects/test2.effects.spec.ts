import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Test2Effects } from './test2.effects';

describe('Test2Effects', () => {
  let actions$: Observable<any>;
  let effects: Test2Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Test2Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(Test2Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
