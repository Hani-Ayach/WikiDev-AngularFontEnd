import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Comment } from 'src/app/layouts/Model/Comment';
import { Like } from 'src/app/layouts/Model/Like';
import { Section } from 'src/app/layouts/Model/Section';

import * as fromApp from '../../../../../store/app.reducer';
import * as UserActions from '../../../../user-store/user.action';

@Component({
  selector: 'app-commented-section',
  templateUrl: './commented-section.component.html',
  styleUrls: ['./commented-section.component.css'],
})
export class CommentedSectionComponent implements OnInit {
  @Input() section: Section = {} as any;
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
  OnDeleteComments() {
    let comments = this.section.comments;

    comments.forEach((comment:any) => {
      this.store.dispatch(
        new UserActions.RemoveComment({
          commentId: comment.id,
          sectionId: comment.sectionId,
        })
      );
    });
  }
}
