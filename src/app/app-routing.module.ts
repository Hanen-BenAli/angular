import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {ToDoComponent} from './to-do/to-do.component';
import {ColorChangeComponent} from './color-change/color-change.component';
import {CvDetailComponent} from './cv-detail/cv-detail.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'todo', component: ToDoComponent},
  {path: 'color', component: ColorChangeComponent},
  {path: 'cv/:id', component: CvDetailComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
