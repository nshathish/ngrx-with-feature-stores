import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { Router } from '@angular/router';
import { LoginActions } from '../actions';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  isLoginFailed = false;

  constructor(
    private store: Store<State>,
    private router: Router
  ) {
    store.select(s => s['login']).subscribe(({ loginState })=> {
      console.log(loginState);
      const { isLoggedIn, errors, sessionId } = loginState;
      if (errors) {
        this.isLoginFailed = true;
      } else if (isLoggedIn) {
        this.router.navigate(['/todo'])
      }

    });
  }

  onLogin(userName: string, password: string) {
    this.store.dispatch(LoginActions.login({ userName, password }));
  }

  ngOnInit() {
  }

}
