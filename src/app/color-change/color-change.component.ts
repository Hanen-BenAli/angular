import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {
  defaultColor;
  divColor ;

  constructor() { }

  ngOnInit() {
    this.defaultColor = 'yellow';
    this.divColor = this.defaultColor;
  }

  changeColor(newColor){
    this.divColor = newColor;
  }

  resetColor() {
    this.divColor = this.defaultColor;
  }

}
