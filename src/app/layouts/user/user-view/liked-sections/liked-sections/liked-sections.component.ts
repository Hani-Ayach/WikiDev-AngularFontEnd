import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-liked-sections',
  templateUrl: './liked-sections.component.html',
  styleUrls: ['./liked-sections.component.css'],
})
export class LikedSectionsComponent implements OnInit {
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
    this.store.dispatch(new UserActions.FetchLikedSections(this.userID));
    this.userSubscribtion = this.store.select('user').subscribe((state) => {
      this.sections = state.LikedSections;

      if (state.sections.length == 0 && !state.isLoading) {
        this.displayNotify = true;
      } else {
        this.displayNotify = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
