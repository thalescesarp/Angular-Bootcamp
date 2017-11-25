import { Component, OnInit } from '@angular/core';
import { ConnectionService } from "../connection.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public users;

  constructor(private _connectionService: ConnectionService) {

  }

  ngOnInit() {
    this._connectionService.getUsers().subscribe(
      res => this.users = res,
      err => console.error(err)
    );
  }

}
