import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-full-display-section',
  templateUrl: './full-display-section.component.html',
  styleUrls: ['./full-display-section.component.css'],
})
export class FullDisplaySectionComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}
  id: number = 0;
  section?: Section = {} as any;
  userSubscription?: Subscription;
  sectionSubscription?: Subscription;
  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.store.select('admin').subscribe((state) => {
      if (state.sections.length == 0)
        this.router.navigate(['../../'], { relativeTo: this.route });
      this.section = state.sections.find((section: Section) => {
        return section.id == this.id;
      });
    });
  }
  OnDeleteComment(id: number) {
    this.store.dispatch(new AdminActions.RemoveComment(id));
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.sectionSubscription) this.sectionSubscription.unsubscribe();
  }
}
