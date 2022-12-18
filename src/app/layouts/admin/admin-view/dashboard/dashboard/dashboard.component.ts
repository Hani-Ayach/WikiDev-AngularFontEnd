import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, interval, Subscription } from 'rxjs';
import { Category } from 'src/app/layouts/Model/Category';
import { CountSectionByCategory } from 'src/app/layouts/Model/CountSectionByCategory';
import { Section } from 'src/app/layouts/Model/Section';
import *as fromApp from '../../../../store/app.reducer';
import *as AdminActions from '../../../admin-store/admin.action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
countOfComments=0;
countOfSaves=0;
countOfLikes=0;
countOfUsers=0;
mostLikedSection:Section={}as any;
countSectionByCategory:CountSectionByCategory[]=[new CountSectionByCategory(0,new Category(0,'...')),new CountSectionByCategory(0,new Category(0,'...'))];
countSection:number=0;
sup?:Subscription;

constructor(private store:Store<fromApp.AppState>) { }
  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchCategories());
    this.store.dispatch(new AdminActions.FetchSections());
    this.sup=this.store.select('admin').subscribe(state=>{
      console.log(state)
      this.countOfLikes=state.countOfLikes;
      this.countOfComments=state.countOfComments;
      this.countOfSaves=state.countOfSaves;
      this.countSection=state.countOfSections;
      this.countOfUsers=state.countOfUsers;
      this.countSectionByCategory=state.countOfSectionsPerCategory;
      this.mostLikedSection=state.mostLikedSection
    })

  }

  OnDisplaySection(){}
  OnDisplayOwner(){}
}
