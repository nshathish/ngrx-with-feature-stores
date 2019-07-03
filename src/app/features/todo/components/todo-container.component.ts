import { Component, OnInit } from '@angular/core';
import { State } from '../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoActions } from '../store/actions';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todo$: Observable<string[]>;

  constructor(
    private store: Store<State>
  ) {
    this.todo$ = store.select(s => s['todo'].todoState.todos)
  }

  ngOnInit() {
    this.store.dispatch(TodoActions.loadTodos());
  }

}
