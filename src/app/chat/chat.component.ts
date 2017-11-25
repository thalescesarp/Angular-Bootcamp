import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public messages: string[] = [];
  public insertedMessage: string = '';

  constructor () {
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
