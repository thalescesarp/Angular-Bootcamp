import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() public message: string;
  public date: Date;

  constructor() {
    this.date = new Date();
   }

  ngOnInit() {
  }

}
