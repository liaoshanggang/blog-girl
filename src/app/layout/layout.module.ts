import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


// routerLink='todo' 也是RouterModule下的指令
@NgModule({
  declarations: [NavComponent, BtnComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    NavComponent,
    BtnComponent
  ]
})
export class LayoutModule { }
