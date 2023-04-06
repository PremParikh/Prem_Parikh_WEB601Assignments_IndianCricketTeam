import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-content-dialog',
  templateUrl: './add-content-dialog.component.html',
  styleUrls: ['./add-content-dialog.component.scss']
})
ngOnInit() {
  this.title = '';
  this.description = '';
}

export class AddContentDialogComponent {
  content = { id: 1, title: '', description: '' };


  constructor(
    public dialogRef: MatDialogRef<AddContentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contentType: string }
  ) {}

  onSave(): void {
    // save the form data or perform any other action
    this.dialogRef.close(/* optional result data to return to the parent component */);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
