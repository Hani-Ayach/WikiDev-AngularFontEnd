import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AllSectionsComponent } from './home/all-sections/all-sections.component';
import { SectionComponent } from './home/all-sections/section/section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFilterPipe1 } from 'src/app/layouts/pipe/MyFilterPipe1';


@NgModule({
  declarations: [
    HomeComponent,
    AllSectionsComponent,
    SectionComponent,
    MyFilterPipe1
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
    ]
})
export class HomeModule { }
