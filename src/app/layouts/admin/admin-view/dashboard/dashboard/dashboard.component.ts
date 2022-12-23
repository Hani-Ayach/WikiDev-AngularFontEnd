import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { count, interval, Subscription, take } from 'rxjs';
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

constructor(private store:Store<fromApp.AppState>,private router :Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchCategories());
    this.store.dispatch(new AdminActions.FetchSections());
    this.store.dispatch(new AdminActions.FetchCountOfLikes());
    this.store.dispatch(new AdminActions.FetchCountOfComments());
    this.store.dispatch(new AdminActions.FetchCountOfSaves());
    this.store.dispatch(new AdminActions.FetchCountOfUsers());

    this.sup=this.store.select('admin').subscribe(state=>{
      console.log(state)
      this.countOfLikes=state.countOfLikes;
      this.countOfComments=state.countOfComments;
      this.countOfSaves=state.countOfSaves;
      this.countSection=state.countOfSections;
      this.countOfUsers=state.countOfUsers;
      this.countSectionByCategory=state.countOfSectionsPerCategory;
      this.mostLikedSection=state.mostLikedSection
      console.log(this.countOfUsers)
    })

  }

  OnDisplaySection(){
    this.router.navigate(['section', this.mostLikedSection.id],{relativeTo:this.route});
  }
  OnDisplayOwner(){}
}
