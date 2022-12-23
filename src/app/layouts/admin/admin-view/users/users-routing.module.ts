import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFullViewComponent } from '../common/user-full-view/user-full-view.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'user/:id',component:UserFullViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
