import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../Model/User';
import * as fromApp from '../store/app.reducer';
import * as UserActions from './user-store/user.action';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLoading = false;
  user: User = {} as any;
  userID = '54d12ab5-35e6-44ac-bcd3-b09ea3600829';

  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(new UserActions.FetchUser(this.userID));
    this.store.select('user').subscribe((data) => {
      this.isLoading = data.isLoading;
      this.user = data.user;
    });
    this.store.dispatch(new UserActions.FetchSections());
    this.OnOpen();
  }
  OnOpen() {
    let sidebar = document.getElementById('sidebar')!.style;
    let mainSection = document.getElementById('mainSection')!.style;
    if (sidebar.marginLeft == '0px') {
      if (mainSection.width <= '842px') {
        sidebar.marginLeft = '-100%';
      } else sidebar.marginLeft = '-20%';
      mainSection.marginLeft = 'auto';
      mainSection.width = '100%';
    } else {
      sidebar.marginLeft = '0px';

      mainSection.marginLeft = '20%';
      mainSection.width = '80%';

      mainSection.paddingLeft = '0%';
    }
  }
}
