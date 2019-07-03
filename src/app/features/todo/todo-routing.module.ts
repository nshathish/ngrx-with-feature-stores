import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoContainerComponent } from './components/todo-container.component';

const routes: Routes = [
  {
    path: '',
    component: TodoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
