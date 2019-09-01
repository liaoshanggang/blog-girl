import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AboutModule } from './about/about.module';
import { InlineComponent } from './inline/inline.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing.module';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule} from '@angular/forms';

/**
 * 声明了AppComponent，TodoComponent个组件，
 * imports字段，这个是项目创建就把BrowserModule声明进来
 * 我们代码在浏览器中跑的时候必须依赖于这个莫走
 * providers注册模块一些服务
 * bootstrap,指定应用启动时候从哪个组件进行启动
 * //2、AppModule启动以后，我们的根组件是哪一个，就是bootstrap指定的组件
 */
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InlineComponent,
    CreateTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
