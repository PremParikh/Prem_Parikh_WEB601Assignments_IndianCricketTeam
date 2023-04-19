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
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddContentDialogComponent } from './add-content-dialog/add-content-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ContentDetailsComponent } from './content-details/content-details.component';
import { AppRouterComponent } from './app-router/app-router.component';

@NgModule({
  declarations: [AppComponent, ContentListComponent, ModifyContentComponent, AddContentDialogComponent, ContentDetailsComponent, AppRouterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(SimulatedServer),
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}



