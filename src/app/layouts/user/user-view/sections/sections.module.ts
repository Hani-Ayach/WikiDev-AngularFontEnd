import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './sections/section/section.component';
import { SectionEditComponent } from './section-edit/section-edit.component';


@NgModule({
  declarations: [
    SectionsComponent,
    SectionComponent,
    SectionEditComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
