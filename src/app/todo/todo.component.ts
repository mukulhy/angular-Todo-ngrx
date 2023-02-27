import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { ITodo } from '../model/todo.model';
import * as TodoAction from '../store/todo.action';
import { selectTodos } from '../store/todo.selectors';
import { todoState } from '../store/todo.states';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  //state: Observable<todoState> | undefined;
  //todos$: Observable<todoState> | undefined;
  todos$: Observable<ITodo[]> | undefined;

  constructor(private store:Store){}

  toDoForm = new FormGroup({
    task: new FormControl(''),
    timeRequired: new FormControl(''),
    priority: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmitTask(){
    
    const todo: ITodo = {
      id:Math.random(),
      task: this.toDoForm.value.task ?? '',
      timeRequired: this.toDoForm.value.timeRequired ?? '',
      priority: this.toDoForm.value.priority ?? '',
      status:'created',
      isEditing: false
    };

    this.store.dispatch(TodoAction.createTodoAction({ todo }));
    this.toDoForm.reset();
  }
}
