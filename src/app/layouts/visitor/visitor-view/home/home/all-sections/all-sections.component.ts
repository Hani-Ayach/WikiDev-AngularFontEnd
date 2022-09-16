import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/layouts/visitor/Model/Category';
import { Section } from 'src/app/layouts/visitor/Model/Section';
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

  ngOnInit(): void {
    this.store.select('visitor').subscribe((data) => {
      console.log(data.isLoading);
      this.categories=data.categories;
      this.sections = data.sections;
      console.log(data.isLoading);
    });
  }

  // When the user clicks on the button, scroll to the top of the document
  TopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
