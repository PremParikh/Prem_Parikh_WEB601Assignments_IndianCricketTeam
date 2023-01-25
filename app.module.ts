import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentCardComponent } from '../app/helper-files/Content-card';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
