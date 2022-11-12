import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionDisplayComponent } from '../common/section-display/section-display.component';
import { CommentedSectionEditComponent } from './commented-section-edit/commented-section-edit.component';
import { CommentedSectionsComponent } from './commented-sections/commented-sections.component';

const routes: Routes = [
  {path:'',component:CommentedSectionsComponent},
  {path:'section/:id',component:CommentedSectionEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentedSectionsRoutingModule { }
