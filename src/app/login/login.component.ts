import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  err: string;
  loginForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  constructor(public _AuthService: AuthService, public _Router: Router) {}

  ngOnInit(): void {}
  getFormData(formData) {
    if (formData.valid == true) {
      this._AuthService.signIn(formData.value).subscribe((data) => {
        if (data.message == 'success') {
          this._AuthService.saveUserData(formData.value, data.token);
          this._Router.navigate(['/home']);
        } else {
          this.err = 'this mail or this password is wrong';
        }
      });
    }
  }
}
