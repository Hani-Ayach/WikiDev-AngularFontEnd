import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentedSectionsComponent } from './commented-sections/commented-sections.component';

const routes: Routes = [
  {path:'',component:CommentedSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentedSectionsRoutingModule { }
