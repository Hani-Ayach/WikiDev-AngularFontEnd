import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AllSectionsComponent } from './home/all-sections/all-sections.component';
import { SectionComponent } from './home/all-sections/section/section.component';
import { MyFilterPipe } from './pipe/MyFilterPipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AllSectionsComponent,
    SectionComponent,
    MyFilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
