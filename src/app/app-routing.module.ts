import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { VisitorComponent } from './layouts/visitor/visitor.component';

const routes: Routes = [
  {path:'',component:VisitorComponent},
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./layouts/admin/admin-view/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'sections',loadChildren:()=>import('./layouts/admin/admin-view/sections/sections.module').then(m=>m.SectionsModule)},
    {path:'users',loadChildren:()=>import('./layouts/admin/admin-view/users/users.module').then(m=>m.UsersModule)},
    {path:'admins',loadChildren:()=>import('./layouts/admin/admin-view/admins/admins.module').then(m=>m.AdminsModule)},
    {path:'requests',loadChildren:()=>import('./layouts/admin/admin-view/requests/requests.module').then(m=>m.RequestsModule)},
    {path:'profile',loadChildren:()=>import('./layouts/admin/admin-view/profile/profile.module').then(m=>m.ProfileModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
