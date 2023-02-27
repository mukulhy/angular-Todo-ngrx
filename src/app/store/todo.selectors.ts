import { createSelector, State } from "@ngrx/store";
import { ITodo } from "../model/todo.model";
import { todoState } from "./todo.states";


export const selectTodoState = (centralState : {states: {todos:ITodo[]}}) => centralState.states.todos;
export const selectTodos : any = createSelector(
    selectTodoState,
    (state:ITodo[]) => state
  );
