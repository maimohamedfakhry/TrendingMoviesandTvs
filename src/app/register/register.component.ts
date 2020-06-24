import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
  constructor(public _AuthService: AuthService) {}

  ngOnInit(): void {}
  getFormData(formData) {
    if (formData.valid == true) {
      this._AuthService.signUp(formData.values);
      console.log(formData.values);
    }
  }
}
