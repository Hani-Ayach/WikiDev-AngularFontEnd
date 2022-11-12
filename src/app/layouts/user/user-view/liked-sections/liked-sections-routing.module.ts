import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionDisplayComponent } from '../common/section-display/section-display.component';
import { LikedSectionsComponent } from './liked-sections/liked-sections.component';

const routes: Routes = [
  {path:'',component:LikedSectionsComponent},
  {path:'section/:id',component:SectionDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikedSectionsRoutingModule { }
