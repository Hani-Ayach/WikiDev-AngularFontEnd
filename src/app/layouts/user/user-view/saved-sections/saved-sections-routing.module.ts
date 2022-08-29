import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedSectionsComponent } from './saved-sections/saved-sections.component';

const routes: Routes = [
  {path:'',component:SavedSectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedSectionsRoutingModule { }
