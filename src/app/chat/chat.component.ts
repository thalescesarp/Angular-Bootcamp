import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: string[] = [];
  public insertedMessage: string = '';

  constructor (chatService: ChatService) {
  }

  public sendMessage(): void {
    if(this.insertedMessage) {
      this.messages.push(this.insertedMessage);
    }

    this.insertedMessage = '';
  }

  ngOnInit() {
  }

}
