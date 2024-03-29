import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-sections',
  templateUrl: './my-sections.component.html',
  styleUrls: ['./my-sections.component.css'],
})
export class MySectionsComponent implements OnInit, OnDestroy {
  sections: Section[] = [];
  userSubscribtion?: Subscription;
  userID:any = localStorage.getItem("userId");
  displayNotify = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new UserActions.FetchSectionsByUserId(this.userID));
    this.userSubscribtion = this.store.select('user').subscribe((state) => {
      this.sections = state.userSections;

      if (state.userSections.length == 0 && !state.isLoading) {
        this.displayNotify = true;
      } else {
        this.displayNotify = false;
      }
    });
  }

  OnAddSection() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
