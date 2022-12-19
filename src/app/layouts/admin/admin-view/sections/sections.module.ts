import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { SectionComponent } from './sections/section/section.component';
import { MyFilterPipe2 } from 'src/app/layouts/pipe/MyFilterPipe2';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionEditComponent } from './sections/section-edit/section-edit.component';


@NgModule({
  declarations: [
    SectionsComponent,
    SectionComponent,
    MyFilterPipe2,
    SectionEditComponent
    ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SectionsModule { }
