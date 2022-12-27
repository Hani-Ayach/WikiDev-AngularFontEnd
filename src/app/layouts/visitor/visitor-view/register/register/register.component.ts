import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import { Register } from '../../../../Model/Register';
import * as VisitorAction from '../../../visitor-store/visitor.action';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    career: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  async onSubmit() {
    this.store.dispatch(
      new VisitorAction.SendApply(
        new Register(
          1,
          this.registerForm.value.firstName!,
          this.registerForm.value.lastName!,
          this.registerForm.value.email!,
          this.registerForm.value.career!,
          this.registerForm.value.age!,
          this.registerForm.value.gender!
        )
      )
    );
    await this.store.select('visitor').subscribe((data) => {
      if (data.isApplySent) alert(data.messageIfSent);
      if (!data.isApplySent && data.messageIfSent != '') {
        alert('There is an error occure');
      }
    });
    this.registerForm.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
