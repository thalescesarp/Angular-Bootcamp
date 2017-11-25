import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

  public messages: any[] = [];
  public insertedMessage: string = '';

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor (private _chatService: ChatService) {
    this._chatService.chatServer.on('messages', m => this.messages.push(m));
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (error) {
      
    }
    
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
