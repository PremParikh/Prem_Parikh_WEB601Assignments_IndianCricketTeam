import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  CricketListArray=new ContentList();
  ngOnInit(){

    const Cricketlist:Content={
      "id":0,
      "Age": 25,
      "title":"Indian Caption",
      "description":'He is from india',
      "name":"VK",
      "City": "Delhi",
      "imgURL":'https://angular.io/assets/images/logos/angular/angular.png'

    }
    this.CricketListArray.AddCricketFunction(Cricketlist);

  }

}
