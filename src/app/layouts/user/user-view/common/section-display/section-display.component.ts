import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription,take } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-section-display',
  templateUrl: './section-display.component.html',
  styleUrls: ['./section-display.component.css'],
})
export class SectionDisplayComponent implements OnInit {
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
      if (this.isExistInUrl('mySections'))
        this.editSubscription = this.store.select('user').pipe(take(1)).subscribe((state) => {
          take(1)
          if (state.userSections.length == 0)
            this.router.navigate(['../../'], { relativeTo: this.route });

          this.section = state.userSections.find((section: Section) => {
            return section.id == this.id;
          });

        });
        else if(this.isExistInUrl('commentedSections'))
        this.editSubscription = this.store.select('user').pipe(take(1)).subscribe((state) => {
          if (state.CommentedSections.length == 0)
            this.router.navigate(['../../'], { relativeTo: this.route });

          this.section = state.CommentedSections.find((section: Section) => {
            return section.id == this.id;
          });

        });
        else if(this.isExistInUrl('likedSection'))
        this.editSubscription = this.store.select('user').pipe(take(1)).subscribe((state) => {
          if (state.LikedSections.length == 0)
            this.router.navigate(['../../'], { relativeTo: this.route });

          this.section = state.LikedSections.find((section: Section) => {
            return section.id == this.id;
          });

        });
        else if(this.isExistInUrl('savedSections'))
        this.editSubscription = this.store.select('user').pipe(take(1)).subscribe((state) => {
          if (state.savedSections.length == 0)
            this.router.navigate(['../../'], { relativeTo: this.route });

          this.section = state.savedSections.find((section: Section) => {
            return section.id == this.id;
          });

        });
        else
            console.log('error')
    }
  }

  isExistInUrl = (word: string) => {
    if (this.router.url.indexOf(word) > -1) return true;
    else return false;
  };

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.editSubscription) this.editSubscription.unsubscribe();
  }
  
}
