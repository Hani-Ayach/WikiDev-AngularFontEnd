import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections/sections.component';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionComponent } from './sections/section/section.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionsComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SectionsModule { }
