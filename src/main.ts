/*
 * @Description: 项目启动时的入口文件
 * @Author: liaoshanggang
 * @Date: 2019-08-18 18:02:25
 * @Last Modified by: liaoshanggang
 * @Last Modified time: 2019-10-13 14:26:21
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 如果环境为生产环境，调用这个方法，这个environment就是从那个environments文件读取出来的
if (environment.production) {
  enableProdMode();
}

// 1、在应用启动的时候，它会调用appmodule,指定这个应用从AppModule进行启动
// 2、AppModule启动以后，我们的根组件是哪一个，就是bootstrap指定的组件

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
