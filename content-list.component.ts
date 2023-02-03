import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  template: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  CricketListArray = new ContentListComponent();

  ngOnInit() {

    const Cricketlist: Content = [
      {title: 'RCB', description: 'Here I am written a team of IPL.'},
      {title: 'CSK', description: 'chennai super kings'},
      {title: 'GT', description: 'Gujarat Titens'},
      {title: 'PBKS', description: 'kings 11 punjab'},
      {title: 'KKR', description: 'kolkata'},
      {title: 'MI', description: 'Mumbai Indians'},

      // Add more contents here
    ];
  }

}

