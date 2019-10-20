import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { CategoryPipe } from './pipes/category.pipe';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app.routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    TodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    DetailComponent,
    CategoryPipe
  ],
  imports: [
    LayoutModule,
    CoreModule,
  ],
  exports: [
  ]
})
export class TodoModule { }
