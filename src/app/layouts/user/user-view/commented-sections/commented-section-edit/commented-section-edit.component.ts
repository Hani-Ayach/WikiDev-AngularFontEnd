import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';

@Component({
  selector: 'app-commented-section-edit',
  templateUrl: './commented-section-edit.component.html',
  styleUrls: ['./commented-section-edit.component.css'],
})
export class CommentedSectionEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}
  id: number = 0;
  section?: Section = {} as any;
  userSubscription?: Subscription;
  editSubscription?: Subscription;

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    if (this.id != 0) {
      this.editSubscription = this.store
        .select('user')
        .pipe()
        .subscribe((state) => {
          if (state.CommentedSections.length == 0)
            this.router.navigate(['../../'], { relativeTo: this.route });

          this.section = state.CommentedSections.find((section: Section) => {
            return section.id == this.id;
          });
        });
    }
  }

  OnDelete(id: number) {
    this.store.dispatch(
      new UserActions.RemoveComment({ commentId: id, sectionId: this.id })
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.editSubscription) this.editSubscription.unsubscribe();
  }
}
