import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input()
  content!: Content;

  constructor() {
    
  }

  ngOnInit(){
    if(!this.content.imgURL){
      this.content.imgURL = '../../assets/images/default.JPG';
    }
  }

  click(id: number) {
    console.log(id);
  }
}
