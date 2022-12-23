import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/layouts/Model/Category';
import { Section } from 'src/app/layouts/Model/Section';
import { SectionRequest } from 'src/app/layouts/Model/SectionRequest';
import *as fromApp from '../../../../../store/app.reducer';
import *as AdminActions  from '../../../../admin-store/admin.action';
@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.css']
})
export class SectionEditComponent implements OnInit {

  categories: Category[] = [];
  sup?: Subscription;
  sup2?: Subscription;
  sup3?: Subscription;

  userID = '54d12ab5-35e6-44ac-bcd3-b09ea3600829';
  isEdit = false;
  sectionId: number = 0;
  section?: Section;

  myFiles: string[] = [];

  sectionForm = new FormGroup({
    title: new FormControl([this.section?.sectionTitle]),
    category: new FormControl([this.section?.category?this.section.category.id:'']),
    description: new FormControl(this.section?.sectionDescription),
    codeBlock: new FormControl(this.section?.codeBlock),
    images: new FormControl(''),
  });
  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchCategories());
    this.sup = this.store.select('admin').subscribe((state) => {
      this.categories = state.categories;
    });

    this.sup2 = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.sectionId = +params['id'];
        this.isEdit = true;
      }
    });

    this.sup3 = this.store.select('admin').subscribe((state) => {
      if (this.sectionId)
        this.section = state.sections.find(
          (section) => section.id == this.sectionId
        );

    });

    console.log(this.section);
    if (this.sectionId)
      this.sectionForm = new FormGroup({
        title: new FormControl([this.section?.sectionTitle]),
        category: new FormControl([this.section?.category?this.section.category.id:'']),
        description: new FormControl(this.section?.sectionDescription),
        codeBlock: new FormControl(this.section?.codeBlock),
        images: new FormControl(''),
      });
  }

  OnFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.myFiles.push(files[i]);
      }
      console.log(this.myFiles);
    }
  }
  OnEdit() {
    this.store.dispatch(
      new AdminActions.EditSection({
        id: this.sectionId,
        section: new SectionRequest(
          0,
          this.sectionForm.value.title,
          this.sectionForm.value.description,
          this.sectionForm.value.codeBlock,
          this.sectionForm.value.category,
          this.userID,
          this.myFiles
        ),
      })
    );
    this.router.navigate(['../../'],{relativeTo:this.route});
  }
  OnAdd() {
    this.store.dispatch(
      new AdminActions.AddSection(
        new SectionRequest(
          0,
          this.sectionForm.value.title,
          this.sectionForm.value.description,
          this.sectionForm.value.codeBlock,
          this.sectionForm.value.category,
          this.userID,
          this.myFiles
        )
      )
    );

    this.router.navigate(['../'],{relativeTo:this.route})
  }
  ngOnDestroy(): void {
    if (this.sup) this.sup.unsubscribe();
    if (this.sup2) this.sup2.unsubscribe();
    if (this.sup3) this.sup3.unsubscribe();
  }
}
