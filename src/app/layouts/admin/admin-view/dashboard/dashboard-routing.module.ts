import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullDisplaySectionComponent } from '../common/full-display-section/full-display-section.component';
import { UserFullViewComponent } from '../common/user-full-view/user-full-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'section/:id',component:FullDisplaySectionComponent},
  {path:'user/:id',component:UserFullViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
