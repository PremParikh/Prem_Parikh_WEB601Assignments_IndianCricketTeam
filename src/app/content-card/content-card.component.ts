import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input()
  content!: Content;

  constructor(private dialog: MatDialog) {}


  ngOnInit(): void{
  }
  openModifyContentDialog() {
    const dialogRef = this.dialog.open(ModifyContentComponent, {
      data: this.content
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  click(id: number) {
    console.log(id);
  }

  editContent() {

  }

}
