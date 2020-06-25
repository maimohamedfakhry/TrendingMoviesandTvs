import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  islogin: boolean = false;
  constructor(public _AuthService: AuthService) {
    this._AuthService.UserData.subscribe((data) => {
      if (data) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
  }

  ngOnInit(): void {}
}
