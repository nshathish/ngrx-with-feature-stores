import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import * as fromSummary from './state/reducers/summary.reducer';
import { SummaryEffects } from './state/effects/summary.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    StoreModule.forFeature('summary', fromSummary.reducer),
    EffectsModule.forFeature([SummaryEffects])
  ]
})
export class SummaryModule { }
