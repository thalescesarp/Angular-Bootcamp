import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() public message: Object;

  constructor(private _chatService: ChatService) {
  }

  public isMyMessage(): boolean {
    return this.message['author'] === this._chatService.userName;
  }

  ngOnInit() {
  }

}
