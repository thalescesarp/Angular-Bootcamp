import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public user: string = '';
  public logTime: Date;

  constructor(chatService: ChatService) { 
    this.logTime = chatService.logTime;
  }

  ngOnInit() {
  }

}
