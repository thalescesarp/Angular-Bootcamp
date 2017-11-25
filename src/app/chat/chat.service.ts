import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private user: string = '';
  private serverURL: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';

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
  }

}
