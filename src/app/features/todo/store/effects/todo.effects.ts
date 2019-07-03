import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { TodoService } from '../../services/todo.service';
import { TodoActions } from '../actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';



@Injectable()
export class TodoEffects {

  todo$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.loadTodos),
    mergeMap(() =>
      this.todoService.loadTodos().pipe(
        map(data => TodoActions.loadTodosSuccessful({ todos: data.map(d => d['title']).slice(0, 20) }))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private todoService: TodoService) {}

}
