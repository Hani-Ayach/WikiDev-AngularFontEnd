import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/layouts/Model/User';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromApp.AppState>) {}
  user: User = {} as any;
  userSubscribtion?: Subscription;
  ngOnInit(): void {
    this.store.dispatch(
      new UserActions.FetchUser('54d12ab5-35e6-44ac-bcd3-b09ea3600829')
    );
    this.userSubscribtion = this.store.select('user').subscribe((user) => {
      console.log('hani'+user.isLoading)
      this.user = user.user;
      console.log(user.isLoading)
    });

  }

  OnCheck(){
    this.store.select('user').subscribe((user) => {
      console.log(user.errorMessage)

    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
