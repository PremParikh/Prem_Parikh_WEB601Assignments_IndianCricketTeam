import { Component } from '@angular/core';
import { Content } from "src/app/helper-files/content-interface";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <Content-card></Content-card>`
})
export class AppComponent {
  title = 'Prem-Parikh-IndianCricketTeam';
  name: string = "prem";
  ContentItem: Content = {
    id: 1024,
    title: 'First',
    description: 'This is my first angular app',
    creator: 'Prem P',
    imgURL:
      'https://angular.io/assets/images/logos/angular/angular.png',
    type: 'news',


  }

  processContent(content: Content): void {
    console.log(content.description);
  }
}
