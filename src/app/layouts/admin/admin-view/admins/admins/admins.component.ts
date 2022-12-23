import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/layouts/Model/User';
import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../../admin-store/admin.action';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent implements OnInit {
  sub?: Subscription;
  users: User[] = [];
  searchAdmin = new FormGroup({
    userName: new FormControl(''),
  });
  userName: any = '';
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchUsers());
    this.sub = this.store.select('admin').subscribe((state) => {
      this.users = state.users.filter((user) => user.role == 'Admin');
      console.log(this.users);
    });
  }
  OnView(id: string) {
    this.router.navigate(['admin', id], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.sub) this.sub.unsubscribe();
  }
  OnSearch() {
    this.userName = this.searchAdmin.value.userName;
  }
}
