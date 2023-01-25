import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list'

@Component({
  selector: 'app-content-card',
  template: `
    <div class="content-card">
      <h2>My Content List</h2>
      <ul>
        <li *ngFor="let item of contentList.items">{{ item.title }}</li>
      </ul>
    </div>
  `
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();
    this.contentList.add({
      id: 1,
      title: 'Javascript',
      description: 'Here you can work with a js core concept',
      creator: 'St.Clair'
    });
    this.contentList.add({
      id: 2,
      title: 'Angular',
      description: 'Here you will learn a few concept of angular framework.',
      creator: 'Scott'
    });
    this.contentList.add({
      id: 3,
      title: 'PHP',
      description: 'Here you will learn a concept of basic php fundamental',
      creator: 'Prem'
    });
  }
}
