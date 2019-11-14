import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent implements OnInit {

  firstName;
  lastName;
  job;
  quote;
  jobDescription;
  jobKeywords;

  constructor() { }

  ngOnInit() {
    this.firstName = 'Inna';
    this.lastName = 'Corman';
    this.job = 'Product Manager';
    this.quote = 'I\'m the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere';
    this.jobDescription = 'Job Description\n';
    this.jobKeywords = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';
  }

}
