import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../Model/person';
import {EmbaucheService} from '../services/embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cv: Person;


  constructor(private embaucheService: EmbaucheService, private router: Router) {
  }

  ngOnInit() {

  }

  chooseCv() {
    this.embaucheService.recruit(this.cv);
  }

  isChosen(){
    return this.embaucheService.recruited.indexOf(this.cv) >=0;
  }

  goToDetails() {
    const link = ['cv/', this.cv.id];
    this.router.navigate(link);
  }
}
