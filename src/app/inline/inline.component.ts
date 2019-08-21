import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>
      inline works!
    </p>
  `,
  styles: [`p { width: 300px;}`],
  providers:[]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
