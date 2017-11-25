import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private user: string = '';

  get userName(): string {
    return this.user;
  }

  constructor() { 
    this.user = prompt("What is your name?");
  }

}
