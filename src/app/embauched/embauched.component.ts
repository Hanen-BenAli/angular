import { Component, OnInit } from '@angular/core';
import {Person} from '../Model/person';
import {EmbaucheService} from '../services/embauche.service';

@Component({
  selector: 'app-embauched',
  templateUrl: './embauched.component.html',
  styleUrls: ['./embauched.component.css']
})
export class EmbauchedComponent implements OnInit {

  recruited: Person[];

  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit() {
    this.recruited = this.embaucheService.getRecruited();
  }

}
