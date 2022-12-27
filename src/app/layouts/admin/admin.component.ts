import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../Model/User';
import * as fromApp from '../store/app.reducer';
import * as AdminActions from './admin-store/admin.action';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  admin: User = {} as any;
  sub?: Subscription;
  userID: any = localStorage.getItem('userId');

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchUserAdmin(this.userID));
    this.sub = this.store.select('admin').subscribe((state) => {
      this.admin = state.adminUser;
    });
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
  OnLogout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
