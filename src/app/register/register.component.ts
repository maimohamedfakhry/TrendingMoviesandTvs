import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  err: string;
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [
      Validators.maxLength(5),
      Validators.required,
    ]),
    last_name: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(8),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
  });
  constructor(public _AuthService: AuthService, public _Router: Router) {}

  ngOnInit(): void {}
  getFormData(formData) {
    if (formData.valid == true) {
      this._AuthService.signUp(formData.value).subscribe((data) => {
        console.log(formData.value);
        if (data.message == 'success') {
          this._Router.navigate(['/login']);
        } else {
          this.err = 'this mail is already registered';
        }
      });
    }
  }
}
