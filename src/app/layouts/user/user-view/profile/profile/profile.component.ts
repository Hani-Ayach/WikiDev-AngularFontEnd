import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fadeFromLeft } from 'src/app/layouts/animation';
import { ChangePassword } from 'src/app/layouts/Model/ChangePassword';
import { EditeUser } from 'src/app/layouts/Model/EditeUser';
import { User } from 'src/app/layouts/Model/User';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[fadeFromLeft]
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromApp.AppState>) {}
  userID: any = localStorage.getItem('userId');
  user: User = {} as any;
  userSubscribtion?: Subscription;
  passwordIsConfirmed: boolean = false;
  profilePhoto: any;

  editInfoForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    career: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    profileImage: new FormControl(null, [Validators.required]),
  });

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
      ),
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
      ),
    ]),
    confirmNewPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
      ),
    ]),
  });

  ngOnInit(): void {
    if (!!this.userID)
      this.store.dispatch(new UserActions.FetchUser(this.userID));
    this.userSubscribtion = this.store.select('user').subscribe((user) => {
      console.log('hani' + user.isLoading);
      this.user = user.user;
      console.log(user.isLoading);

      this.editInfoForm = new FormGroup({
        userName: new FormControl(this.user.userName, [Validators.required]),
        firstName: new FormControl(this.user.firstName, [Validators.required]),
        lastName: new FormControl(this.user.lastName, [Validators.required]),
        age: new FormControl(this.user.age, [
          Validators.required,
          Validators.min(0),
        ]),
        career: new FormControl(this.user.career, [Validators.required]),
        email: new FormControl(this.user.email, [
          Validators.required,
          Validators.email,
        ]),
        gender: new FormControl(this.user.sex, [Validators.required]),
        profileImage: new FormControl(null, [Validators.required]),
      });
    });

    this.passwordIsConfirmed =
      this.changePasswordForm.value.newPassword ==
      this.changePasswordForm.value.confirmNewPassword;
  }

  onChange(event: any) {
    this.profilePhoto = event.target.files[0];
  }

  OnSubmit1() {
    let editModel = new EditeUser(
      this.userID,
      this.editInfoForm.value.firstName,
      this.editInfoForm.value.lastName,
      this.editInfoForm.value.userName,
      this.editInfoForm.value.email,
      this.editInfoForm.value.career,
      this.editInfoForm.value.age,
      this.editInfoForm.value.gender,
      this.profilePhoto
    );

    this.store.dispatch(
      new UserActions.EditUser({ id: this.userID, editeUser: editModel })
    );
  }

  OnSubmit2() {
    let changePasswordModel = new ChangePassword(
      this.userID,
      this.changePasswordForm.value.oldPassword,
      this.changePasswordForm.value.newPassword,
      this.changePasswordForm.value.confirmNewPassword
    );
    this.store.dispatch(new UserActions.ChangePassword(changePasswordModel));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
