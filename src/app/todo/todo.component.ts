import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Todo } from '../models'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  is_edit = false
  @Output() id_delete = new EventEmitter<number>();
  @Output() id_update = new EventEmitter<number>();

  @Input() todo:Todo = new Todo()
  @Input() id_list:number =0
  constructor() { }

  ngOnInit(): void {
  }
  openEdit(){
    this.is_edit = true
  }
  update(){
    this.is_edit = false
    this.id_update.emit(this.id_list);
  }
  deleteTodo(){
    this.id_delete.emit(this.id_list);
  }
}
