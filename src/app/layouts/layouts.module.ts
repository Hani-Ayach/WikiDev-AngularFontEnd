import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AdminComponent } from './admin/admin.component';
import { UsersModule } from './admin/admin-view/users/users.module';
import { RequestsModule } from './admin/admin-view/requests/requests.module';
import { DashboardModule } from './admin/admin-view/dashboard/dashboard.module';
import { AdminsModule } from './admin/admin-view/admins/admins.module';
import { SectionsModule as SectionsModuleAdmin} from './admin/admin-view/sections/sections.module';
import { ProfileModule as ProfileModuleAdmin} from './admin/admin-view/profile/profile.module';

import { UserComponent } from './user/user.component';
import { ProfileModule } from './user/user-view/profile/profile.module';

import { VisitorComponent } from './visitor/visitor.component';
import { StoreModule } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import { VisitorEffects } from './visitor/visitor-store/visitor.effect';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SectionDisplayComponent } from './user/user-view/common/section-display/section-display.component';
import { UserEffect } from './user/user-store/user.effect';
import { MySectionsModule } from './user/user-view/my-sections/my-sections.module';
import { CountUpDirective } from './directive/count-up.directive';
import { AdminEffect } from './admin/admin-store/admin.effect';
import { FullDisplaySectionComponent } from './admin/admin-view/common/full-display-section/full-display-section.component';
import { UserFullViewComponent } from './admin/admin-view/common/user-full-view/user-full-view.component';
import { ProgressBarUpDirective } from './directive/progress-bar-up.directive';

@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    VisitorComponent,
    SectionDisplayComponent,
    FullDisplaySectionComponent,
    UserFullViewComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    RequestsModule,
    DashboardModule,
    AdminsModule,
    SectionsModuleAdmin,
    ProfileModuleAdmin,

    MySectionsModule,
    ProfileModule,

    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([VisitorEffects,UserEffect,AdminEffect])
  ]
})
export class LayoutsModule { }
