import { Component, OnInit } from '@angular/core';
import {Todo} from '../interface';
import {TodoService} from '../providers/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];
  todoList2: Todo[] = [
    {id: 999, description: 'For test purpose 999', category: 0, content: 'test'},
    {id: 998, description: 'For test purpose 998', category: 1, content: 'test'},
    {id: 997, description: 'For test purpose 997', category: 2, content: 'test'},
  ];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  delete(ids: number[]) {
    // number组成的数组
    // this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
    this.todoList = this.todoService.delete(ids);
  }

  delete2(ids: number[]) {
    // number组成的数组
    // this.todoList = this.todoList.filter(item => ids.indexOf(item.id) === -1);
    this.todoList2 = this.todoList2.filter(item => ids.indexOf(item.id) === -1);
  }
}
