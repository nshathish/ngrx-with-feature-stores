import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, flatMap, map, mergeMap, take, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  loadTodos(): Observable<any> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }


}
