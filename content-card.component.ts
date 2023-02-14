// import { Component } from '@angular/core';
// import { Content } from '../helper-files/content-interface';
//
// class ContentList {
//   AddCricketFunction(Cricketlist: Content) {
//
//   }
//
//   CricketlistConst() {
//
//   }
// }
//
// @Component({
//   selector: 'app-content-card',
//   templateUrl: './content-card.component.html',
//   styleUrls: ['./content-card.component.scss']
// })
// export class ContentCardComponent {
//
//   // CricketListArray=new ContentList();
//   // ngOnInit(){
//   //
//   //   let Cricketlist: Content;
//   //   Cricketlist = {
//   //     "id": 0,
//   //     "Age": 25,
//   //     "title": "Indian Caption",
//   //     "description": 'He is from india',
//   //     "name": "VK",
//   //     "City": "Delhi",
//   //     "imgURL": 'https://angular.io/assets/images/logos/angular/angular.png'
//   //
//   //   };
//   //
//   //
//   //   this.CricketListArray.AddCricketFunction(Cricketlist);
//
//   }
//
// }

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
// export class ContentCardComponent {
//   myContentList : ContentList = new ContentList();
//
//   contentItem1 : Content = {
//     id: 0,
//     title: 'mySampleTitle',
//     description: 'This is a description',
//     creator: 'Creator'
//   }
//   contentItem2 : Content = {
//     id: 0,
//     title: 'mySampleTitle2',
//     description: 'This is a description2',
//     creator: 'Creator2'
//   }
//   contentItem3 : Content = {
//     id: 0,
//     title: 'mySampleTitle3',
//     description: 'This is a description4',
//     creator: 'Creator2'
//   }
//   contentItem4 : Content = {
//     id: 0,
//     title: 'mySampleTitle4',
//     description: 'This is a description4',
//     creator: 'Creator'
//   }
//
//   constructor(){
//     this.myContentList.addFunction(this.contentItem1);
//     this.myContentList.addFunction(this.contentItem2);
//     this.myContentList.addFunction(this.contentItem3);
//     this.myContentList.addFunction(this.contentItem4);
//   }
//
//   displayMyIndex(index : number) {
//     let myItems = this.myContentList.getItems();
//
//     if (myItems.length > 0 && index > 0 && index < myItems.length){
//       return this.myContentList.printIndex(index);
//     } else {
//       alert("NO THAT IS BAD");
//     }
//   }
// }
export class ContentCardComponent {
  @Input() content: any;
  contents: any;

  onImageClick(id: number, title: string) {
    console.log(`Content id: ${id}`);
    console.log(`Content title: ${title}`);
  }
}
