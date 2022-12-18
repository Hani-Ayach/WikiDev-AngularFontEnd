import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/layouts/Model/Category';
import { Section } from 'src/app/layouts/Model/Section';
import *as fromApp from '../../../../store/app.reducer';
import *as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Section[] = [];
  categories: Category[] = [];
  searchCategory: any;
  search: any;

  displayNotify = false;
  sup?:Subscription;

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchCategories());
    this.store.dispatch(new AdminActions.FetchSections());
    this.sup=this.store.select('admin').subscribe(state=>{
    this.sections=state.sections;
    this.categories=state.categories;
    })
  }
  searchForm = new FormGroup({
    category: new FormControl(''),
    search: new FormControl(''),
  });
  OnSubmit() {
    console.log(this.searchForm.value.category);
    this.searchCategory = this.searchForm.value.category;
    this.search = this.searchForm.value.search;
    if (
      this.sections.filter((item) => item.category.id == this.searchCategory)
        .length != 0
    )
      this.displayNotify = false;
    else this.displayNotify = true;
  }
}
