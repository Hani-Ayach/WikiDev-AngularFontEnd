import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyFilterPipe4 } from 'src/app/layouts/pipe/MyFilterPipe4';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    MyFilterPipe4
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
    ]
})
export class UsersModule { }
