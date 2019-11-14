import {Injectable} from '@angular/core';
import {Person} from '../Model/person';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  recruited: Person[] = [];

  constructor() {
  }

  recruit(person: Person) {
    const index = this.recruited.indexOf(person);
    if (index >= 0) {
      alert('this cv is already chosen!');
    } else {
      this.recruited.push(person);
    }
  }

  getRecruited() {
    return this.recruited;
  }
}
