import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { TodoService } from "../services/todoApp.service";
import * as TodosAction from './todo.action'

@Injectable()
export class ToDoEffects {
    loadTodosEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TodosAction.createTodoAction),
            mergeMap(() => this.service.getTodoList().pipe(
                map((x: any) => { 
                    console.log("x1-->", x);
                    return x ;
                }), //manupulate your api response here
                // catchError(of) // send exception from here
                //catchError(() => "something went wrong") // send exception from here
            ))
        )
    )
    constructor(
        private actions$: Actions,
        private service: TodoService
    ) { }
}


