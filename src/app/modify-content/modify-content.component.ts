import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../models/content';
import { ContentService } from '../helper-files/message.service';
import { MessageService } from '../helper-files/indiancricket.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {

  updatedContent: Content = new Content();

  constructor(
    public dialogRef: MatDialogRef<ModifyContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
    private contentService: ContentService,
    private messageService: MessageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdateClick(): void {
    this.contentService.updateContent(this.updatedContent).subscribe(() => {
      this.dialogRef.close();
      this.messageService.displayMessage(`Content '${this.updatedContent.title}' was successfully updated.`);
    });
  }

}
