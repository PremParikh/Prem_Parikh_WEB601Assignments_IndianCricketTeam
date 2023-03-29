import { Component, Input } from '@angular/core';
import { MessageService } from '../helper-files/message.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss'],
})
export class AppMessagesComponent {
  @Input() messages: string[] = ['sdssds'];

  constructor(public messageService: MessageService) {}
}
