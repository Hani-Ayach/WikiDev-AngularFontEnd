import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/layouts/Model/Login';
import * as fromApp from '../../../../store/app.reducer';
import * as VisitorActions from '../../../visitor-store/visitor.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  adminRole = 'Admin';
  userRole = 'User';

  loginForm = new FormGroup({
    emailAddress: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
        ),
        Validators.minLength(5),
        Validators.maxLength(25),
      ])
    ),
  });

  ngOnInit(): void {
    this.store.select('visitor').subscribe((state) => {
      if (state.user.roles[0] == this.adminRole)
        this.router.navigate(['../admin'], { relativeTo: this.route });
      else if (state.user.roles[0] == this.userRole)
        this.router.navigate(['../user'], { relativeTo: this.route });
    });
  }

  OnSubmit() {
    console.log(this.loginForm.value);
    let login = new Login(
      this.loginForm.value.emailAddress!.toString(),
      this.loginForm.value.password!.toString()
    );

    this.store.dispatch(new VisitorActions.LoginStart(login));
  }
}
