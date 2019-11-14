import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../Model/person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Person;

  constructor() {
  }

  ngOnInit() {
  }

  sendItemToDetail(item) {
    this.selectedCv = item;
  }
}
