import {Component, OnInit} from '@angular/core';
import {ToDoService} from '../services/to-do.service';
import {ToDo} from '../Model/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: ToDo[];
  toDo: ToDo = new ToDo();

  constructor(private toDoService: ToDoService) {
  }

  ngOnInit() {
    this.todos = this.toDoService.getToDos();

  }

  addTodo() {
    this.toDoService.addToDo(this.toDo);
    this.toDoService.logToDo(this.toDo);
    this.toDo = new ToDo();
  }


  deleteToDo(todo: ToDo) {
    this.toDoService.deleteToDo(todo);


  }
}
