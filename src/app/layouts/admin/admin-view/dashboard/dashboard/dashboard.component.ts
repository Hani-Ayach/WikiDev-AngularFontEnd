import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { count, interval, Subscription } from 'rxjs';
import { Category } from 'src/app/layouts/Model/Category';
import { CountSectionByCategory } from 'src/app/layouts/Model/CountSectionByCategory';
import { Section } from 'src/app/layouts/Model/Section';
import *as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
countOfComments=0;
countOfSaves=0;
countOfLikes=10;
countOfUsers=0;
countOfAdmin=0;
mostLikedSection:Section={}as any;
countSectionByCategory:CountSectionByCategory[]=[new CountSectionByCategory(42,new Category(1,'Angular')),new CountSectionByCategory(20,new Category(2,'Asp.net'))];
countSection:number=62;
sup?:Subscription;

constructor(private store:Store<fromApp.AppState>) { }
  ngOnInit(): void {


  }
}
