import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../../chat/chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() public message: string;
  public date: Date;
  public user: string;

  constructor(chatService: ChatService) {
    this.date = new Date();
    this.user = chatService.user;
   }

  ngOnInit() {
  }

}
