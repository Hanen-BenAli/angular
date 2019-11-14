import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Person} from '../Model/person';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: Person[];
  @Output() selected = new EventEmitter();

  constructor(private cvService: CvService) {
  }

  ngOnInit() {
    this.cvService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
    }, (error) => {
      this.persons = this.cvService.getDefaultList();
      alert('this is a fake list');
    });

  }

  sendSelectedToCv(item) {
    this.selected.emit(item);

  }

}
