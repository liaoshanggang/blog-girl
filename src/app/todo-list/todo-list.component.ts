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

  selectAll = false;

  constructor() { }

  ngOnInit() {
  }

  delete(ids){
    this.todos = this.todos.filter(item=>ids.indexOf(item.id) === -1);
  }
  toggleAll(){
    console.log(this.selectAll);
    this.todos.forEach(item=>item.selected=this.selectAll);
  }

  check(){
    //当每一个todo被选中的时候，我想让selectAll维持选中状态，如果有一个没有被选中，它的selectAll不应该被选中
    this.selectAll = this.todos.every(item=>item.selected);
  }

  deleteSelected(){
    const ids = this.todos.filter(item=>item.selected).map(item=>item.id);
    //复用
    this.delete(ids);
  }
}
