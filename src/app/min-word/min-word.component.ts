import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-min-word',
  templateUrl: './min-word.component.html',
  styleUrls: ['./min-word.component.css']
})
export class MinWordComponent implements OnInit {
  color = 'black';
  size = 20;
  font = 'Garamond';

  constructor() {
  }

  ngOnInit() {
  }

}
