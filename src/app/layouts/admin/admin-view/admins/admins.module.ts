import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins/admins.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFilterPipe5 } from 'src/app/layouts/pipe/MyFilterPipe5';


@NgModule({
  declarations: [
    AdminsComponent,
    MyFilterPipe5
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminsModule { }
