import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITodo } from 'src/app/model/todo.model';
import { selectTodos } from 'src/app/store/todo.selectors';
import * as TodoAction from '../../store/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  dataArray: Array<ITodo> = [];

  toDoForm = new FormGroup({
    task: new FormControl(''),
    timeRequired: new FormControl(''),
    priority: new FormControl(''),
  });

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectTodos).subscribe((data: any) => {
      this.dataArray = data;
    });
  }


  doneTodo(Id: number) {
    debugger
    let todoIsDone = this.dataArray.find((x) => x.id == Id);
    //todoIsDone && (todoIsDone.status = 'done');
    let newTodo = { ...todoIsDone!, status: 'done' }
    this.store.dispatch(TodoAction.editTodoAction({ payload: newTodo }));
  }

  editTodo(id: number) {
    let newTodo: ITodo
    let editedValue = this.dataArray.find(x => x.id == id);
    if (editedValue?.isEditing) {
      newTodo = { ...editedValue!, status: 'created', isEditing: true }
    }
    else {
      newTodo = { ...editedValue!, status: 'created', isEditing: true }
    }

    //patching edit values to forms
    this.toDoForm.patchValue({
      task:editedValue?.task,
      timeRequired:editedValue?.timeRequired,
      priority:editedValue?.priority
    })
    //
    //dispatching edit row 
    this.store.dispatch(TodoAction.editTodoAction({ payload: newTodo }));

  }

  onSubmitEditTask(id: number) {
    let newTodo: ITodo
    let editedValue = this.dataArray.find(x => x.id == id);
    if (editedValue?.isEditing) {
      newTodo = {
        ...editedValue!,
        task: this.toDoForm.value.task ?? '',
        timeRequired: this.toDoForm.value.timeRequired ?? '',
        priority: this.toDoForm.value.priority ?? '',
        status: 'created',
        isEditing: false
      }
    }
    
    this.store.dispatch(TodoAction.editTodoAction({ payload: newTodo! }));
    this.toDoForm.reset();
  }

  deleteTodo(id: number) {
    //let deletedValue = this.dataArray.filter(x => x.id == id);
    this.store.dispatch(TodoAction.deleteTodoAction({ payload: id }));
  }

}
