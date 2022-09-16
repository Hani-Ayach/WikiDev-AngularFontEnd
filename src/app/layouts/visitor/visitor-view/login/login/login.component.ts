import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    emailAddress: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}'
        ),
        Validators.minLength(5),
        Validators.maxLength(25),
      ])
    ),
  });

  ngOnInit(): void {}
  OnSubmit() {
    console.log(this.loginForm.value);
  }
  Show() {
    var pass = document.getElementById('form2Example27');
  }
}
