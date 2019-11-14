import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rainbow',
  templateUrl: './rainbow.component.html',
  styleUrls: ['./rainbow.component.css']
})
export class RainbowComponent implements OnInit {

  paths;

  constructor() {
  }

  ngOnInit() {
    this.paths = ['', 'img1.png', 'img2.png', ' '];
  }

}
