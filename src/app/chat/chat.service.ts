import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private _user: string = '';
  private _serverURL: string = 'http://172.24.30.24:3000/';
  private _server: any;

  get userName(): string {
    return this._user;
  }

  get chatServer(): any {
    return this._server;
  }

  constructor() {
    let storedName: string = sessionStorage.getItem('name');
    
    if (!storedName) {
      this._user = prompt("What is your name?");
      sessionStorage.setItem('name', this._user);
    } else {
      this._user = storedName;
    }

    this._server = io(this._serverURL);
  }

}
