import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { IndianCricketService } from '../helper-files/indiancricket.service'
import { MessageService } from '../helper-files/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  contents: Content[] = [];
  inputTitle: string = '';
  titleSearchMessage: string = '';
  available: boolean = false;

  constructor(private cricketService: IndianCricketService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.cricketService.fetchContent().subscribe((data: Content[]) => {
      this.contents = data;
    });
  }

  searchTitle() {
    
    this.available = false;
    this.titleSearchMessage = 'Title you searched for is unavailable';
    this.contents.forEach((element) => {
      console.log(`'${element.title}'....'${this.inputTitle}'`)
      if (element.title === this.inputTitle) {
        this.available = true;
        this.titleSearchMessage = 'Title you searched is available';
      } 
    });
  }
}
