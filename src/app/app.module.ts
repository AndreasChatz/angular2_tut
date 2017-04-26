import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel for two-way bindng

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
   ],
  declarations: [
    AppComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
