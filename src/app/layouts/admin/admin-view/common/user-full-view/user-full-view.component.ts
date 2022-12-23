import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/layouts/Model/User';
import * as fromApp from '../../../../store/app.reducer';
@Component({
  selector: 'app-user-full-view',
  templateUrl: './user-full-view.component.html',
  styleUrls: ['./user-full-view.component.css'],
})
export class UserFullViewComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  user: any = {} as any;
  userId: any = '';
  isAdmin = true;
  adminRole='Admin';
  userRole='User';

  sub1?: Subscription;
  sub2?: Subscription;

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    this.sub2 = this.store.select('admin').subscribe((state) => {
      if (state.users.length == 0)
        this.router.navigate(['../../'], { relativeTo: this.route });

      this.user = state.users.find((user) => user.id == this.userId);
    });
    if (this.user.role == 'Admin') this.isAdmin == true;
    else this.isAdmin = false;
  }
  OnMakeAdmin(){
    if(!this.isAdmin){

    }
  }
  OnMakeUser(){
    if(this.isAdmin){

    }
  }
  ngOnDestroy(): void {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub2.unsubscribe();
  }
}
