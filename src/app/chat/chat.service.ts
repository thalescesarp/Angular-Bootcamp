import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  public user: string = '';

  constructor() { 
    this.user = prompt("What is your name?");
  }

}
