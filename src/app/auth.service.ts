import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { userData } from './userData';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData = new BehaviorSubject(null);
  constructor(public _HttpClient: HttpClient) {}
  signUp(data): Observable<any> {
    return this._HttpClient.post(
      'http://routeegypt.herokuapp.com/signup',
      data
    );
  }
  ////////////////////////////
  signIn(data): Observable<any> {
    return this._HttpClient.post(
      'http://routeegypt.herokuapp.com/signin',
      data
    );
  }
  ////////////////////////
  saveUserData(citizen, token) {
    let user = new userData(
      citizen.first_name,
      citizen.last_name,
      citizen.password,
      citizen.email,
      citizen.age,
      token
    );
    this.UserData.next(user);
  }
}
