import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    /**
     * 导入 ng-zorro-antd 模块
     */
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
