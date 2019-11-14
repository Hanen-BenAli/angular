import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { RotatingCardComponent } from './rotating-card/rotating-card.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { MinWordComponent } from './min-word/min-word.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { ToDoComponent } from './to-do/to-do.component';
import { EmbauchedComponent } from './embauched/embauched.component';
import { HeaderComponent } from './header/header.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { LoginComponent } from './login/login.component';
import { ImageObserverComponent } from './image-observer/image-observer.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ColorChangeComponent,
    RotatingCardComponent,
    ParentComponent,
    ChildComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    MinWordComponent,
    RainbowComponent,
    RainbowDirective,
    DefaultImagePipe,
    ToDoComponent,
    EmbauchedComponent,
    HeaderComponent,
    CvDetailComponent,
    LoginComponent,
    ImageObserverComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
