// import { Component, OnInit } from '@angular/core';
// import { Content } from '../helper-files/content-interface';
// import { IndianCricketService } from '../helper-files/indiancricket.service'
// import { MessageService } from '../helper-files/message.service';
// import {fetchPosts} from "../helper-files/contentDb";
//
//
// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.scss'],
// })
// export class ContentListComponent implements OnInit {
//   contents: Content[] = [];
//   inputTitle: string = '';
//   titleSearchMessage: string = '';
//   available: boolean = false;
//
//   constructor(private cricketService: IndianCricketService,
//     private messageService: MessageService) { }
//
//   ngOnInit(): void {
//     this.cricketService.fetchContent().subscribe((data: Content[]) => {
//       this.contents = data;
//     });
//   }
//
//   searchTitle() {
//
//     this.available = false;
//     this.titleSearchMessage = 'Title you searched for is unavailable';
//     this.contents.forEach((element) => {
//       console.log(`'${element.title}'....'${this.inputTitle}'`)
//       if (element.title === this.inputTitle) {
//         this.available = true;
//         this.titleSearchMessage = 'Title you searched is available';
//       }
//     });
//
//     async function loadPosts() {
//       try {
//         const response = await fetchPosts();
//         const posts = response.data;
//         // do something with the posts
//       } catch (error) {
//         // handle the error
//       }
//     }
//
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ContentService } from '../helper-files/message.service';
//
// interface Content {
//   id: number;
//   title: string;
//   body: string;
// }
//
// @Component({
//   selector: 'app-content-list',
//   templateUrl: './content-list.component.html',
//   styleUrls: ['./content-list.component.css']
// })
// export class ContentListComponent implements OnInit {
//   content: Content[] = [];
//
//   constructor(private contentService: ContentService) { }
//
//   ngOnInit() {
//     this.contentService.getContent().subscribe(
//       content => this.content = content,
//       error => console.log(error)
//     );
//   }
//
//   onContentAdded(newContent: Content) {
//     this.content.push(newContent);
//   }
// }

import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../helper-files/message.service";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getContents();
  }

  getContents(): void {
    let subscribe = this.contentService.getContents()
      .subscribe((contents: Content[]) => this.contents = contents);
  }

  addContent(content: Content): void {
    this.contentService.addContent(content)
      .subscribe((newContent: any) => {
        this.contents.push(newContent);
        // show success message using message service
      });
  }

  updateContent(content: Content): void {
    this.contentService.updateContent(content)
      .subscribe((updatedContent: { id: any; }) => {
        const index = this.contents.findIndex(c => c.id === updatedContent.id);
        this.contents[index] = updatedContent;
        // show success message using message service
      });
  }
}
