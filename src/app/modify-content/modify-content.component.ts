// import { Component, EventEmitter, Output } from '@angular/core';
// import { Content } from '../content';
// import { ContentService } from '../content.service';
//
// @Component({
//   selector: 'app-modify-content',
//   templateUrl: './modify-content.component.html',
//   styleUrls: ['./modify-content.component.css']
// })
// export class ModifyContentComponent {
//   newContent: Content = {
//     title: '',
//     description: ''
//   };
//
//   @Output() contentAdded = new EventEmitter<Content>();
//
//   constructor(private contentService: ContentService) {}
//
//   addContent() {
//     this.contentService.addContent(this.newContent).subscribe(content => {
//       this.contentAdded.emit(content);
//       this.newContent = { title: '', description: '' };
//     });
//   }
// }
import { Component, EventEmitter, Output } from '@angular/core';
//import { Content } from '../models/content';

//import { Component } from '@angular/core';
import { ContentService } from '../helper-files/message.service';
import { SimulatedServer } from '../simulated-server';
import {Content} from "../helper-files/content-interface";
//import {Content} from "@angular/compiler";

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  "title": string;
  "description": string;

  constructor(private contentService: ContentService) { }

  addContent(): void {
    const newContent: Content = {
      creator: "", id: 0, imgURL: "", tags: [], type: "",

      title: this.title,
      description: this.description

    };

    // @ts-ignore
    this.contentService.addContent(newContent)
      .subscribe(() => {
        // Clear input fields
        this.title = '';
        this.description = '';


        // Display success message
        this.contentService.displayMessage(`Added content "${newContent.title}"`);

        this.contentAdded.emit(this.content);

      });
  }
}
