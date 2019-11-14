export class Person {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: string;
  job: string;
  path: string;


  // @ts-ignore
  constructor(id: number = 0,
              name: string = '',
              firstname: string = '',
              age: number = 0,
              cin: string = '',
              job: string = '',
              path: string = '') {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.cin = cin;
    this.job = job;
    this.path = path;
  }
}
