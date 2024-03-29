import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { fadeFromLeft } from 'src/app/layouts/animation';
import { Category } from 'src/app/layouts/Model/Category';
import { Comment } from 'src/app/layouts/Model/Comment';
import { Like } from 'src/app/layouts/Model/Like';
import { Save } from 'src/app/layouts/Model/Save';
import { Section } from 'src/app/layouts/Model/Section';
import { SectionComment } from 'src/app/layouts/Model/SectionComment';
import * as fromApp from '../../../../../store/app.reducer';
import * as UserActions from '../../../../user-store/user.action';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations:[fadeFromLeft]
})
export class SectionComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromApp.AppState>) {}

  @Input() section: Section = {} as any;
  comments: SectionComment[] = [];
  category: Category = {} as any;
  sup!: Subscription;
  isLike = false;
  isSave = false;
  countOfLikes: number = 0;
  countOfSave: number = 0;
  countOfComments: number = 0;
  userId: any = localStorage.getItem('userId');

  opinionForm = new FormGroup({
    opinion: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.comments = this.section.comments;
    this.category = this.section.category;

    this.sup = this.store.select('user').subscribe((state) => {
      let section = state.sections.find(
        (section: Section) => section.id == this.section.id
      );
      this.isLike = !!section?.idOfUsersLikeThisSection.find(
        (id: string) => id == this.userId
      );
      this.isSave = !!section?.idOfUsersSaveThisSection.find(
        (id: string) => id == this.userId
      );
    });

    this.countOfLikes = this.section.countOfLikes;
    this.countOfSave = this.section.countOfSave;
    this.countOfComments = this.section!.comments?.length;
  }

  OnLike() {
    if (this.isLike)
      this.store.dispatch(
        new UserActions.RemoveLike(new Like(0, this.userId, this.section.id))
      );
    else
    this.store.dispatch(
      new UserActions.AddLike(new Like(0, this.userId, this.section.id))
    );
  }
  OnSave() {
    if (this.isSave)
      this.store.dispatch(
        new UserActions.RemoveFromSave(
          new Save(0, this.userId, this.section.id)
        )
      );
    else
      this.store.dispatch(
        new UserActions.AddToSave(new Save(0, this.userId, this.section.id))
      );
  }

  OnSubmit() {
    this.store.dispatch(
      new UserActions.AddComment(
        new Comment(
          this.userId,
          this.section.id,
          this.opinionForm.get('opinion')?.value
        )
      )
    );
    this.opinionForm.reset();
  }
  ngOnDestroy(): void {
    if (this.sup) this.sup.unsubscribe();
  }
}
