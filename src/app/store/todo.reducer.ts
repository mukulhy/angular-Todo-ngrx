import { InjectionToken } from "@angular/core";
import { Action,ActionReducerMap,createReducer,on } from "@ngrx/store";
import { ITodo } from "../model/todo.model";
import * as TodoAction from "./todo.action";
import { todoState } from "./todo.states";

export const initialState: todoState = {
    todos: [],
    };

const todoReducer = createReducer(
    initialState,
    on(TodoAction.createTodoAction, (state, { todo }) => ({ ...state, todos : [...state.todos,todo]})),
    on(TodoAction.editTodoAction, (state, { payload }) => ({ ...state, todos : editTodo(state,payload)})),
    on(TodoAction.deleteTodoAction, (state, { payload }) => ({ ...state, todos : deleteTodo(state,payload)})),
    );

export function reducer(state : todoState | undefined, action : Action){
    return todoReducer(state,action);
}

//edit todo from store
function editTodo(state: todoState, payload: ITodo): ITodo[] {
     return state.todos.map(x => {
        if(x.id == payload.id){
            return payload
        }
        else{
            return x
        }
    })
}

//delete todo from store
function deleteTodo(state: todoState, payload: number): ITodo[] {
    return state.todos.filter(x => x.id !== payload);
}

