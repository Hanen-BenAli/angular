import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, def?: string): any {
    if (!value || !value.trim().length) {
      return def ? def : 'tim_logo.png';
    }

    return value;
  }

}
