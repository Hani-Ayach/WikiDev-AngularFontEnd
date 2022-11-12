import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';

import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';

@Component({
  selector: 'app-saved-sections',
  templateUrl: './saved-sections.component.html',
  styleUrls: ['./saved-sections.component.css'],
})
export class SavedSectionsComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  sections: Section[] = [];
  userSubscribtion?: Subscription;

  ngOnInit(): void {
    this.store.dispatch(
      new UserActions.FetchSavedSections('54d12ab5-35e6-44ac-bcd3-b09ea3600829')
    );
    this.userSubscribtion = this.store.select('user').subscribe((state) => {
      console.log(state.userSections);
      this.sections = state.savedSections;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
