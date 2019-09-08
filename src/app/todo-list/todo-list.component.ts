import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../interface';
import {Router, ActivatedRoute} from '@angular/router';

interface PrivateTodo extends Todo {
  selected?: boolean; // 后台返回的是没有的，设置为可选的字段
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: PrivateTodo[];

  @Output()
  delete: EventEmitter<number[]> = new EventEmitter();
  selectAll = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  // delete(ids: number[]) {
  //   // number组成的数组
  //   this.todos = this.todos.filter(item => ids.indexOf(item.id) === -1);
  // }

  toggleAll() {
    console.log(this.selectAll);
    this.todos.forEach(item => item.selected = this.selectAll);
  }

  check() {
    // 当每一个todo被选中的时候，我想让selectAll维持选中状态，如果有一个没有被选中，它的selectAll不应该被选中
    this.selectAll = this.todos.every(item => item.selected);
  }

  deleteSelected() {
    const ids = this.todos.filter(item => item.selected).map(item => item.id);
    // 复用
    // this.delete(ids);
    this.delete.next(ids);
  }

  navigateTo(todo: PrivateTodo, event: MouseEvent) {
    if (event.target instanceof HTMLTableCellElement) {
      // 把这个id传送过去，第二个参数我们会给路由额外的信息，让它根据这些信息进行导航，相对应的位置就是这个route
      this.router.navigate([todo.id], {relativeTo: this.route});
    }
  }
}
