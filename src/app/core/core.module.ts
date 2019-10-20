import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { AppRoutingModule } from '../app.routing.module';

/**
 * 配置 angular i18n
 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

/**
 * 配置 ng-zorro-antd 国际化
 */
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  /**
   * 配置 ng-zorro-antd 国际化（文案 及 日期）
   */
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  /**
   * 构造函数注入它自己，把它自己注入进来，这里可以判断一下，如果存在的话，抛出一个错误
   * 第一次被执行的时候，parentModule是不存在的，这段判断代码是正常执行的，
   * 假如其他模块又引入了一次，就会进入判断，抛出错误，保证只能被appModule引入
   * 不断注入它自己，就会导致一个问题，一直 会不停地重复执行，也就是说导致无限循环，
   * SkipSelf跳过自身，就是说我在查找这个类的时候，不查找自己，跳过自己，跳过CoreModule这个文件
   * 第一次注入的时候CoreModule肯定是没有的，允许CoreModule不存在的，
   * @Optional() CoreModule没找到的时候，会给parentModule赋值一个null,抛出一个错误来
   * @param parentModule
   */
  constructor(@SkipSelf() @Optional() parentModule: CoreModule){
    if(parentModule){
      throw new Error('CoreModule 只能被appModule引入');
    }
  }
 }
