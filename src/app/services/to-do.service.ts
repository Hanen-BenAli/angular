import {Injectable} from '@angular/core';
import {ToDo} from '../Model/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() {
  }


  toDos: ToDo[] = [];

  addToDo(toDo: ToDo) {
    this.toDos.push(toDo);
  }

  deleteToDo(toDo: ToDo) {
    const index = this.toDos.indexOf(toDo);
    this.toDos.splice(index, 1);
  }

  getToDos() {
    return this.toDos;
  }


  logToDo(toDo: ToDo) {
    console.log('ToDo : [ name : ', toDo.name, ', content : ', toDo.content, ' ]');
  }
}
