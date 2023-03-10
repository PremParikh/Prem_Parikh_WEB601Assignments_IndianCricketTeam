import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css'],
})
export class CreateContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();
  id: string = '';
  SongName: string = '';
  description: string = '';
  creator: string = '';
  additionFailed: boolean = false;
  error: string = '';

  addContent() {
    const content: Content = {
      id: parseInt(this.id),
      SongName: this.SongName,
      description: this.description,
      creator: this.creator,
    };
    const promise = new Promise<void>((resolve, reject) => {
      if (!this.SongName || !this.description || !this.creator || !this.id) {
        this.error = 'Please fill in all required fields.';
        return reject('Missing required fields');
      }
      this.contentAdded.emit(content);
      this.error = '';
      this.id = '';
      this.SongName = '';
      this.description = '';
      this.creator = '';

      resolve();
    });

    promise.then(() => {
      console.log(`Successfully added ${content.SongName}!`);
      this.additionFailed = false;
    })
    .catch(() => {
      console.error(`Failed to add ${content.SongName}`);
      this.additionFailed = true;
    });;
  }
}
