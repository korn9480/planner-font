import { HttpClient } from '@angular/common/http';
import { Todo } from './models'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Api{
    localhost = "http://localhost:8081"
    constructor(private http:HttpClient) {}
    getTodoList(){
        return this.http.get<Todo[]>(this.localhost+"/getTodoList")
    }
    createTodo(form:Todo){
        return this.http.post(this.localhost+"/create",form)
    }
    updataTodo(form:Todo){
        return this.http.put(this.localhost+"/edit",form)
    }
    deleteTodo(id:number){
        return this.http.delete(this.localhost+"/delete/"+id)
    }
    
}