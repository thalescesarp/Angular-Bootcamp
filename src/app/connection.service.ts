import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs/rx";

@Injectable()
export class ConnectionService {

  private restURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<Object> {
    return this._http.get(this.restURL);
  }
}