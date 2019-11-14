import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  submit(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe(data => {
      localStorage.setItem('myAppToken', data.id);
      console.log(data);
      this.router.navigate(['cv']);

    });
    console.log(formulaire);

  }
}
