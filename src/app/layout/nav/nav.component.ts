import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul nz-menu nzTheme="dark" nzMode="horizontal">
      <li nz-menu-item routerLink='home' routerLinkActive="active" >home</li>
      <li nz-menu-item routerLink="about" routerLinkActive="active">about</li>
      <li nz-menu-item routerLink="inline" routerLinkActive="active">inline</li>
      <li nz-menu-item routerLink='todo' routerLinkActive="active" >todo</li>
      <li nz-menu-item routerLink='' (click)='alertMore()'>more</li>
    </ul>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertMore() {
    alert('更多功能敬请期待！');
  }

}
