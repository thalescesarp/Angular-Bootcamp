import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: any[] = [];
  public insertedMessage: string = '';

  constructor (private _chatService: ChatService) {
    this._chatService.chatServer.on('messages', m => this.messages.push(m));
  }

  public sendMessage(): void {

    let messageObj = {
      message: this.insertedMessage,
      author: this._chatService.userName
    };

    this._chatService.chatServer.emit('messages', messageObj);

    this.insertedMessage = '';
  }

  ngOnInit() {
  }

}
