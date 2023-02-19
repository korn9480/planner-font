import { Component,OnInit } from '@angular/core';
import { Todo } from "./models";
import { Api } from "./Api.service"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'projectTest';
  todo : Todo = new Todo()
  todoList:Todo[] = new Array<Todo>()

  constructor(private http:HttpClient,private api:Api){}
  ngOnInit():void{
    this.loadTodoList()
  }
  loadTodoList(){
    this.api.getTodoList().subscribe(
      (arg:Todo[]) => this.todoList = arg
    )
  }
  addTodo(){
    console.log(typeof(this.todo.date));
    
    this.api.createTodo(this.todo).subscribe(arg=> this.loadTodoList());
    this.todo = new Todo()
  }
  deleteTodo(id:number){
    id = this.todoList[id].id
    this.api.deleteTodo(id).subscribe(arg=> this.loadTodoList());
  }
  updateTodo(id:number){
    let todo =  this.todoList[id]
    this.api.updataTodo(todo).subscribe(arg=> this.loadTodoList())
  }

}
