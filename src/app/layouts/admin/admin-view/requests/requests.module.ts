import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFilterPipe3} from 'src/app/layouts/pipe/MyFilterPipe3';


@NgModule({
  declarations: [
    RequestsComponent,
    MyFilterPipe3
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    ReactiveFormsModule
  ]
})
export class RequestsModule { }
