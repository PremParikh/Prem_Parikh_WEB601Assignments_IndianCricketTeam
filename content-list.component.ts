//
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.css']
// })
// export class ContentListComponent {
//   CricketListArray = new ContentListComponent();
//
//   contentList = [
//     {title: 'RCB', description: 'Here I am written a team of IPL.'},
//     {title: 'CSK', description: 'chennai super kings'},
//     {title: 'GT', description: 'Gujarat Titens'},
//     {title: 'PBKS', description: 'kings 11 punjab'},
//     {title: 'KKR', description: 'kolkata'},
//     {title: 'LG', description: 'lakhnow gaints', article: "it is from lacknow"},
//     {title: 'RR', description: 'Rajsthan royals', article: "it is from rajsthan"},
//   ];
//
//   searchTerm = '';
//   resultMessage = '';
//   isFound = false;
//
//   search() {
//     const foundItem = this.contentList.find(item => item.title === this.searchTerm);
//     if (foundItem) {
//       this.resultMessage = 'Content found';
//       this.isFound = true;
//     } else {
//       this.resultMessage = 'Content not found';
//       this.isFound = false;
//     }
//   }
// }
//

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents = [
    {title: 'RCB', description: 'Here I am written a team of IPL.'},
  {title: 'CSK', description: 'chennai super kings'},
     {title: 'GT', description: 'Gujarat Titens'},
     {title: 'KKR', description: 'kolkata'},
     {title: 'PBKS', description: 'kings 11 punjab'},
     {title: 'LG', description: 'lakhnow gaints', article: "it is from lacknow"},
     {title: 'RR', description: 'Rajsthan royals', article: "it is from rajsthan"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
