import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './components/login-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './effects/login.effects';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [LoginContainerComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', fromLogin.reducers, { metaReducers: fromLogin.metaReducers }),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [LoginService]
})
export class LoginModule { }
