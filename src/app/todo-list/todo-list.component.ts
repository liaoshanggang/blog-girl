import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos = [
    {id:999,description:'For test purpose',category:1,content:'test'},
    {id:998,description:'For test purpose aaa',category:1,content:'test'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
