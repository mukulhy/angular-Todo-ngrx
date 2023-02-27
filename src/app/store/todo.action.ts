import { createAction, props } from '@ngrx/store';
import { ITodo } from '../model/todo.model';

export const createTodoAction = createAction(
  '[Todo] Create todo',
  props<{ todo: ITodo }>()
);

export const editTodoAction = createAction(
  '[Todo] Edit todo',
  props<{ payload: ITodo }>()
)

export const deleteTodoAction = createAction(
  '[Todo] Delete todo',
  props<{ payload: number }>()
)