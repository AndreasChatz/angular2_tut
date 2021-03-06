import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel for two-way bindng

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
   ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
  ],
  bootstrap:    [
    AppComponent,
  ]
})
export class AppModule { }
