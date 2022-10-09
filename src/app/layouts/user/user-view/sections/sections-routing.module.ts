import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionDisplayComponent } from '../common/section-display/section-display.component';
import { SectionsComponent } from './sections/sections.component';

const routes: Routes = [
  {path:'',component:SectionsComponent},
  {path:'section/:id',component:SectionDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
