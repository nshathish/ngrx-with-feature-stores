import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(userName: string, password: string): Observable<any> {
    if (userName === 'test' && password === '123') {
      return of('qwqw232323232');
    } else {
      return throwError('asasasas')
    }
  }
}
