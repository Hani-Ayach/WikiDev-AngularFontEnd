import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/layouts/Model/Category';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../../store/app.reducer';
@Component({
  selector: 'app-all-sections',
  templateUrl: './all-sections.component.html',
  styleUrls: ['./all-sections.component.css'],
})
export class AllSectionsComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  sections: Section[] = [];
  mybutton = {} as any;
  categories: Category[] = [];
  searchCategory: any;
  search: any;

  displayNotify = false;
  searchNotify=false;
  ngOnInit(): void {
    this.store.select('visitor').subscribe((data) => {
      console.log(data.isLoading);
      this.categories = data.categories;
      this.sections = data.sections;
      console.log(data.isLoading);
      if (data.sections.length==0 && !data.isLoading) {
        console.log("null")
        this.displayNotify = true;
      }
      else{
        this.displayNotify = false;
      }
    });
  }

  searchForm = new FormGroup({
    category: new FormControl(''),
    search: new FormControl(''),
  });

  OnSubmit() {
    console.log(this.searchForm.value.category);
    this.searchCategory = this.searchForm.value.category;
    this.search = this.searchForm.value.search;
    console.log(this.sections.length);
    if (
      this.sections.filter((item) => item.category.id == this.searchCategory)
        .length != 0 &&
      this.sections.filter(
        (item) => item.sectionTitle.indexOf(this.search) !== -1
      ).length != 0
    ) {
      this.searchNotify = false;
    }
    else if (!this.search && !this.searchCategory) this.searchNotify=false;
    else this.searchNotify = true;
  }
}
