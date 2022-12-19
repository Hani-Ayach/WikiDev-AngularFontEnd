import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullDisplaySectionComponent } from '../common/full-display-section/full-display-section.component';
import { SectionEditComponent } from './sections/section-edit/section-edit.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {path:'',component:SectionsComponent},
  {path:'section/:id',component:FullDisplaySectionComponent},
  {path:'add',component:SectionEditComponent},
  {path:'edit/:id',component:SectionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
