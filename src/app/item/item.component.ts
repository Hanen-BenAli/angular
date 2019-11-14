import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../Model/person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: Person;
  @Output() selected = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('person : ', this.person);
  }

  selectCv() {
    this.selected.emit(this.person);
  }

}
