import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private user: string = '';

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
