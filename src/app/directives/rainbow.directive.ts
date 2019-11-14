import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'blue';

  @HostListener('keyup') changeColor() {
    this.color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    this.bc = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    console.log('color ', this.color);
    console.log('bc ', this.bc);

  }



  constructor() {
  }

}
