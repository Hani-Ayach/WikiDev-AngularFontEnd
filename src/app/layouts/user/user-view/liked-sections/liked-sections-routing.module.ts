import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedSectionsComponent } from './liked-sections/liked-sections.component';

const routes: Routes = [
  {path:'',component:LikedSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikedSectionsRoutingModule { }
