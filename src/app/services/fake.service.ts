import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  private url: string;


  constructor(private _http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  public getAll(): Observable<Todo[]> {
    return this._http.get<Todo[]>(this.url);
  }

  public save(todo: Todo) {
    return this._http.post<Todo>(this.url, todo);
  }

}
