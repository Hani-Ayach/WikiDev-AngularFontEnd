import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as UserActions from '../../../user-store/user.action';
@Component({
  selector: 'app-sections',
  templateUrl: './my-sections.component.html',
  styleUrls: ['./my-sections.component.css']
})
export class MySectionsComponent implements OnInit , OnDestroy {

  constructor(private store:Store<fromApp.AppState>) { }
sections:Section[]=[];
userSubscribtion?:Subscription;

  ngOnInit(): void {
    this.store.dispatch(
      new UserActions.FetchSectionsByUserId('54d12ab5-35e6-44ac-bcd3-b09ea3600829')
    );
    this.userSubscribtion = this.store.select('user').subscribe((state) => {
      console.log(state.userSections)
      this.sections = state.userSections;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
