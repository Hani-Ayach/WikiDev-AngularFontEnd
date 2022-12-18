import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './sections/section/section.component';


@NgModule({
  declarations: [
    SectionsComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
