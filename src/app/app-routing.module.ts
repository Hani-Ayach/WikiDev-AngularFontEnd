import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { VisitorComponent } from './layouts/visitor/visitor.component';

const routes: Routes = [
  {path:'',component:VisitorComponent,children:[
    {path:'',loadChildren:()=>import('./layouts/visitor/visitor-view/home/home.module').then(m=>m.HomeModule)},
    {path:'register',loadChildren:()=>import('./layouts/visitor/visitor-view/register/register.module').then(m=>m.RegisterModule)},
    {path:'login',loadChildren:()=>import('./layouts/visitor/visitor-view/login/login.module').then(m=>m.LoginModule)},
    {path:'home',redirectTo:'',pathMatch:'full'}
  ]},
  {path:'user',component:UserComponent,children:[
    {path:'',loadChildren:()=>import('./layouts/user/user-view/sections/sections.module').then(m=>m.SectionsModule)},
    {path:'commentedSections',loadChildren:()=>import('./layouts/user/user-view/commented-sections/commented-sections.module').then(m=>m.CommentedSectionsModule)},
    {path:'likedSections',loadChildren:()=>import('./layouts/user/user-view/liked-sections/liked-sections.module').then(m=>m.LikedSectionsModule)},
    {path:'profile',loadChildren:()=>import('./layouts/user/user-view/profile/profile.module').then(m=>m.ProfileModule)},
    {path:'savedSections',loadChildren:()=>import('./layouts/user/user-view/saved-sections/saved-sections.module').then(m=>m.SavedSectionsModule)},
    {path:'sections',loadChildren:()=>import('./layouts/user/user-view/sections/sections.module').then(m=>m.SectionsModule)}
  ]},
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
