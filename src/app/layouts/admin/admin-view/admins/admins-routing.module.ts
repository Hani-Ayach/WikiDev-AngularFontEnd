import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFullViewComponent } from '../common/user-full-view/user-full-view.component';
import { AdminsComponent } from './admins/admins.component';

const routes: Routes = [
  {path:'',component:AdminsComponent},
  {path:'admin/:id',component:UserFullViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
