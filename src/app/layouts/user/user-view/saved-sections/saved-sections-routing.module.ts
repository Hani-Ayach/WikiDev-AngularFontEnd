import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionDisplayComponent } from '../common/section-display/section-display.component';
import { SavedSectionsComponent } from './saved-sections/saved-sections.component';

const routes: Routes = [
  {path:'',component:SavedSectionsComponent},
  {path:'section/:id',component:SectionDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedSectionsRoutingModule { }
