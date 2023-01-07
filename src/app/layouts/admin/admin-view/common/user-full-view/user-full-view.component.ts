import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fadeFromLeft } from 'src/app/layouts/animation';
import { AssignRole } from 'src/app/layouts/Model/AssignRole';
import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-user-full-view',
  templateUrl: './user-full-view.component.html',
  styleUrls: ['./user-full-view.component.css'],
  animations:[fadeFromLeft]
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
  adminRole = 'Admin';
  userRole = 'User';

  displayValidation = false;
  displayValidationMessage = '';
  sureValidate: any = null;

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
    if (this.user?.role == 'Admin') this.isAdmin == true;
    else this.isAdmin = false;

    console.log(this.sureValidate);
  }
  OnMakeAdmin() {
    this.validate(
      `Are you sure you want to make [ ${this.user?.userName} ] --> ADMIN`
    );

    if (!this.isAdmin) {
      if (this.sureValidate == true) {
        let assignToAdminRoleModel = new AssignRole(
          this.userId,
          this.adminRole
        );
        this.store.dispatch(
          new AdminActions.AssignToRole(assignToAdminRoleModel)
        );
        location.reload();
      }
    }
  }
  OnMakeUser() {
    this.validate(
      `Are you sure you want to make [ ${this.user?.userName} ] --> USER`
    );

    if (this.isAdmin) {
      if (this.sureValidate == true) {
        let assignToUserRoleModel = new AssignRole(this.userId, this.userRole);
        this.store.dispatch(
          new AdminActions.AssignToRole(assignToUserRoleModel)
        );
        location.reload();
      }
    }
  }
  validate(message: string) {
    this.displayValidation = true;
    this.displayValidationMessage = message;
  }
  yesSureValidate() {
    this.sureValidate = true;
    if (this.isAdmin) this.OnMakeUser();

    if (!this.isAdmin) this.OnMakeAdmin();
  }
  noSureValidate() {
    this.sureValidate = false;
  }
  ngOnDestroy(): void {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub2.unsubscribe();
  }
}
