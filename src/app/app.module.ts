// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { AppComponent } from './app.component';
// import { ContentCardComponent } from './content-card/content-card.component';
// import { ContentListComponent } from './content-list/content-list.component';
// import { ContentTypeFilterPipe } from './helper-files/contentTypeFilter';
// import { HoverAffectDirective } from './hover-affect.directive';
// import { AppMessagesComponent } from './app-messages/app-messages.component';
// import { ModifyContentComponent } from './modify-content/modify-content.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     ContentCardComponent,
//     ContentListComponent,
//     ContentTypeFilterPipe,
//     HoverAffectDirective,
//     AppMessagesComponent,
//     ModifyContentComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SimulatedServer } from './simulated-server';

@NgModule({
  declarations: [AppComponent, ContentListComponent, ModifyContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(SimulatedServer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

