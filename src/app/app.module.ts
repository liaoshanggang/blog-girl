import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineComponent } from './inline/inline.component';
import { LayoutModule } from './layout/layout.module';
import {TodoService} from './todo/providers/todo.service';

import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';



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
    InlineComponent
  ],
  imports: [
    LayoutModule,
    CoreModule,
    TodoModule,
  ],
  /**
   * 配置 ng-zorro-antd 国际化（文案 及 日期）
   */
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
