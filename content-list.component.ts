import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent {
  contents: Content[] = [];
  inputTitle: string = '';
  titleSearchMessage: string = '';
  available: boolean = false;

  constructor() {
    const content1: Content = {
      id: 1,
      title: 'Virat Kohli',
      description: 'Right Hand Batsman',
      creator: 'RCB',
      type: 'Batsman',
      imgURL: '../../assets/images/virat.JPG'
    };
    const content2: Content = {
      id: 2,
      title: 'MS Dhoni',
      description: 'Right Hand Batsman Wicker Keeper',
      creator: 'CSK',
      type: 'Keeper',
      imgURL: '../../assets/images/msd.JPG',
      tags: ['Thala',"Mahi"]
    };
    const content3: Content = {
      id: 3,
      title: 'Rohit Sharma',
      description: 'Right Hand Batsman',
      creator: 'MI',
      type: 'Batsman',
    };
    const content4: Content = {
      id: 4,
      title: 'Shikhar Dhawan',
      description: 'Left Hand Batsman',
      creator: 'PKKS',
      type: 'Batsman',
      imgURL: '../../assets/images/shikhar.JPG'
    };
    const content5: Content = {
      id: 5,
      title: 'Ravindra Jadeja',
      description: 'Left All-Rounder',
      creator: 'CSK',
    };
    const content6: Content = {
      id: 6,
      title: 'Sanju Samson',
      description: 'RIght Hand Batsman Wicket Keeper',
      creator: 'RR',
      imgURL: '../../assets/images/sanju.JPG'
    };
    const content7: Content = {
      id: 7,
      title: 'SKY',
      description: 'RIght Hand Batsman',
      creator: 'MI',
    };
    this.contents.push(content1);
    this.contents.push(content2);
    this.contents.push(content3);
    this.contents.push(content4);
    this.contents.push(content5);
    this.contents.push(content6);
    this.contents.push(content7);
  }

  searchTitle() {
    
    this.available = false;
    this.titleSearchMessage = 'Title you searched for is unavailable';
    this.contents.forEach((element) => {
      console.log(`'${element.title}'....'${this.inputTitle}'`)
      if (element.title === this.inputTitle) {
        this.available = true;
        this.titleSearchMessage = 'Title you searched is available';
      } 
    });
  }

  addContent(content: Content) {
    this.contents.push(content);
  }
}
