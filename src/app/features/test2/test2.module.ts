import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test2RoutingModule } from './test2-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromTest2 from './state/reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Test2RoutingModule,
    StoreModule.forFeature('test2', fromTest2.reducers, { metaReducers: fromTest2.metaReducers })
  ]
})
export class Test2Module { }
