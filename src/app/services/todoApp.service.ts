import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ITodo } from "../model/todo.model";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TodoService {

    constructor(private http: HttpClient) { }
    //arr : Observable<Array<ITodo>> | undefined
    oberser : Observable<Array<ITodo>> = new Observable<Array<ITodo>>
    getTodoList() : Observable<Array<ITodo>>{
        return this.http.get<ITodo[]>("put your url here");
        //this.arr  = [{task : "harsh", timeRequired : "5 min", priority:"high"}]
        //return arr.asObservable();
       // return this.oberser ;
    }

    postTodos(){
        //this.http.get()
    }
}