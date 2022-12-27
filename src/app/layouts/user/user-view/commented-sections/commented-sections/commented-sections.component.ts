import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';

import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';

@Component({
  selector: 'app-commented-sections',
  templateUrl: './commented-sections.component.html',
  styleUrls: ['./commented-sections.component.css'],
})
export class CommentedSectionsComponent implements OnInit {
  sections: Section[] = [];
  commentSubscribtion?: Subscription;
  userID:any = localStorage.getItem("userId");
  displayNotify = false;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new UserActions.FetchCommentedSections(this.userID));
    this.commentSubscribtion = this.store.select('user').subscribe((state) => {
      this.sections = state.CommentedSections;
      if (state.sections.length == 0 && !state.isLoading) {
        console.log('one');
        this.displayNotify = true;
      } else {
        console.log('one');
        this.displayNotify = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.commentSubscribtion) this.commentSubscribtion.unsubscribe();
  }
}
