import {Component, OnInit} from '@angular/core';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-image-observer',
  templateUrl: './image-observer.component.html',
  styleUrls: ['./image-observer.component.css']
})
export class ImageObserverComponent implements OnInit {

  images: string[];
  image: string;
  observer: Observable<string>;

  constructor() {
  }

  ngOnInit() {
    this.images = ['img1.png', 'img2.png', 'tim_logo.png'];
    this.observer = new Observable<string>(
      (obs) => {
        let i = this.images.length - 1;
        setInterval(() => {
          if(i < 0){
            i = this.images.length - 1;
          }
          obs.next(this.images[i--]);
        }, 1000);
      }
    );

    this.observer.subscribe(next => {
     this.image = next;
    });

  }

}
