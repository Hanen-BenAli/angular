import {Injectable, OnInit} from '@angular/core';
import {Person} from '../Model/person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const url = 'http://172.16.145.211:3000/api/personnes/';

@Injectable({
  providedIn: 'root'
})

export class CvService {


  defaultList: Person[] = [
    new Person(0, 'person', '1', 20, '012584158', 'Developer', 'img1.png'),
    new Person(1, 'person', '2', 25, '48284', 'Teacher', 'img2.png')
  ];


  constructor(private http: HttpClient) {
  }


  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(url + id);
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(url);
  }

  getDefaultList(): Person[] {
    return this.defaultList;
  }

  getFakePerson(): Person {
    return new Person(0, 'person', '1', 20, '012584158', 'Developer', 'img1.png');

  }

  deletePersonById(id: number): Observable<Person> {
    const token = localStorage.getItem('myAppToken');
    if (token) {
      console.log('ok');
      const headers = new HttpHeaders().set('Authorization', token);
      return this.http.delete<Person>(url + id, {headers});
    }
    return this.http.get<Person>(url + id);
  }
}

