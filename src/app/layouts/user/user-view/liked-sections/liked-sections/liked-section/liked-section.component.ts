import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Like } from 'src/app/layouts/Model/Like';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../../store/app.reducer';
import * as UserActions from '../../../../user-store/user.action';
@Component({
  selector: 'app-liked-section',
  templateUrl: './liked-section.component.html',
  styleUrls: ['./liked-section.component.css'],
})
export class LikedSectionComponent implements OnInit {
  @Input() section: Section = {} as any;
  userID: any = localStorage.getItem('userId');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  OnDisplay() {
    this.router.navigate(['section', this.section.id], {
      relativeTo: this.route,
    });
  }
  OnDeleteLike() {
    this.store.dispatch(
      new UserActions.RemoveLike(new Like(0, this.userID, this.section.id))
    );
  }
}
