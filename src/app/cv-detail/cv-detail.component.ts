import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Person} from '../Model/person';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  person: Person;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.cvService.getPersonById(param.id).subscribe((data: Person) => {
          this.person = data;
        },
        (error) => {
          this.person = this.cvService.getFakePerson();
          alert('this is a fake person');
        });

    });
  }

  backToCvs() {
    const link = ['cv'];
    this.router.navigate(link);

  }

  deleteCv() {
    this.cvService.deletePersonById(this.person.id).subscribe(
      data => {
        this.backToCvs();
      },
      error => {
        alert('Problem!');
      });
  }
}
