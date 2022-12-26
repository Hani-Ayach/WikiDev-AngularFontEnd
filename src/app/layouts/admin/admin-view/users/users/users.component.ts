import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/layouts/Model/User';
import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  sub?: Subscription;
  users: User[] = [];
  searchUser=new FormGroup({
    userName:new FormControl('')
  })
  userName:any=''
  constructor(private store: Store<fromApp.AppState>,private route:ActivatedRoute,private router :Router) {}

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchUsers());
    this.sub = this.store.select('admin').subscribe((state) => {
      this.users = state.users.filter((user) => (user.role == 'User'));
    });
  }
  OnSearch() {
    this.userName = this.searchUser.value.userName;
  }
  OnView(id:string){
    this.router.navigate(['user',id],{relativeTo:this.route});
  }
  OnDelete(id:string){
      this.store.dispatch(new AdminActions.RemoveUser(id))
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.sub) this.sub.unsubscribe();
  }
}
