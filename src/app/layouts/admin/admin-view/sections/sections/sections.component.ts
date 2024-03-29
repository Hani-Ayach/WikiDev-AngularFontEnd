import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/layouts/Model/Category';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
import * as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
})
export class SectionsComponent implements OnInit {
  sections: Section[] = [];
  categories: Category[] = [];
  searchCategory: any;
  search: any;

  searchNotify = false;
  sup?: Subscription;

  isForAddCategory = true;
  categoryId: number=0;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchCategories());
    this.store.dispatch(new AdminActions.FetchSections());
    this.sup = this.store.select('admin').subscribe((state) => {
      this.sections = state.sections;
      this.categories = state.categories;
    });
  }
  searchForm = new FormGroup({
    category: new FormControl(''),
    search: new FormControl(''),
  });
  OnSearch() {
    console.log(this.searchForm.value.category);
    this.searchCategory = this.searchForm.value.category;
    this.search = this.searchForm.value.search;
    if (
      this.sections.filter((item) => item.category.id == this.searchCategory)
        .length != 0 &&
      this.sections.filter(
        (item) => item.sectionTitle.indexOf(this.search) !== -1
      ).length != 0
    ) {
      this.searchNotify = false;
    } else if (!this.search && !this.searchCategory) this.searchNotify = false;
    else this.searchNotify = true;
  }

  OnAddSection() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  //for category
  categoryForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
  });

  OnMakeForEdite(category: Category) {
    this.isForAddCategory = false;
    this.categoryForm = new FormGroup({
      category: new FormControl(category.name, [Validators.required]),
    });
    this.categoryId = category.id;
  }

  OnAddCategory() {
    // !--> the value cannot be null of undefined
    let categoryName: string = this.categoryForm.value.category!.toString();
    this.store.dispatch(
      new AdminActions.AddCategory(new Category(0, categoryName))
    );
  }

  OnUpdateCategory() {
    let categoryName: string = this.categoryForm.value.category!.toString();
    let categoryId = this.categoryId;
    if (categoryName && categoryId)
      this.store.dispatch(
        new AdminActions.EditeCategory(new Category(categoryId, categoryName))
      );
  }
}
