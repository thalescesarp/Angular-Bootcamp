import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private user: string = '';
  private serverURL: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  private server: any;

  get userName(): string {
    return this.user;
  }

  constructor() {
    let storedName: string = sessionStorage.getItem('name');
    
    if (!storedName) {
      this.user = prompt("What is your name?");
      sessionStorage.setItem('name', this.user);
    } else {
      this.user = storedName;
    }

    this.server = io(this.serverURL);
  }

}
