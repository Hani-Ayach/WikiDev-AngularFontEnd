import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountUpDirective } from 'src/app/layouts/directive/count-up.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    CountUpDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
