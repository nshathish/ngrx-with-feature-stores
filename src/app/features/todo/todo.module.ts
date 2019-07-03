import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoContainerComponent } from './components/todo-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store/reducers';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/effects/todo.effects';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [TodoContainerComponent, TodoListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducers, { metaReducers: fromTodo.metaReducers }),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
