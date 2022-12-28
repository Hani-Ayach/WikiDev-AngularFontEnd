import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Save } from 'src/app/layouts/Model/Save';
import { Section } from 'src/app/layouts/Model/Section';

import * as fromApp from '../../../../../store/app.reducer';
import * as UserActions from '../../../../user-store/user.action';

@Component({
  selector: 'app-saved-section',
  templateUrl: './saved-section.component.html',
  styleUrls: ['./saved-section.component.css'],
})
export class SavedSectionComponent implements OnInit {
  @Input() section: Section = {} as any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}
  userID: any = localStorage.getItem('userId');

  ngOnInit(): void {}

  OnDisplay() {
    this.router.navigate(['section', this.section.id], {
      relativeTo: this.route,
    });
  }
  OnDeleteFromSave() {
    this.store.dispatch(
      new UserActions.RemoveFromSave(new Save(0, this.userID, this.section.id))
    );
  }
}
