import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public _HttpClient: HttpClient) {}
  signUp(data): Observable<any> {
    return this._HttpClient.post(
      'https://git.heroku.com/getallusers.git',
      data
    );
  }
}
