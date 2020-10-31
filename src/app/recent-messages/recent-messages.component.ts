import { Component, OnInit } from '@angular/core';
import { Message } from "../message";
import { MessageService } from "../shared/message.service";

@Component({
  selector: 'app-recent-messages',
  templateUrl: './recent-messages.component.html',
  styleUrls: ['./recent-messages.component.scss']
})
export class RecentMessagesComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
}
