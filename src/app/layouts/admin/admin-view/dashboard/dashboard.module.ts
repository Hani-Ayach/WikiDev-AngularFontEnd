import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountUpDirective } from 'src/app/layouts/directive/count-up.directive';
import { ProgressBarUpDirective } from 'src/app/layouts/directive/progress-bar-up.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    CountUpDirective,
    ProgressBarUpDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
