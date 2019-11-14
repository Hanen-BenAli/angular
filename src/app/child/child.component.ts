import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() color;
@Output() sendDataToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData(){
    this.sendDataToParent.emit('hello father');
  }

}
