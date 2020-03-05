import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { FakeService } from '../services/fake.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent {

  todo: Todo;
  todoRes: Todo;

  constructor(private _fakeService: FakeService) { 
    this.todo = new Todo();

    this.todoRes = new Todo();
    this.todoRes.id = 0;
  }

  onSubmit(){
    this._fakeService.save(this.todo).subscribe(result => {
      this.todo = new Todo();
      this.todoRes = result;
    })
  }

}
