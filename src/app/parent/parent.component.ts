import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  bgColor;

  constructor() { }

  ngOnInit() {
    this.bgColor = 'yellow';
  }

  treatChildData(data: any){
    alert(data);
  }
}
