import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todo: Todo[];


  constructor(private _fakeService: FakeService) { }

  ngOnInit(): void {
    this._fakeService
      .getAll()
      .subscribe(
        data => {
          this.todo = data;
        }
    )
  }

}
