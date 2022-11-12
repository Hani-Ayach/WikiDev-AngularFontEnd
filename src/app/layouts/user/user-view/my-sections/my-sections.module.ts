import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySectionsRoutingModule } from './my-sections-routing.module';
import { MySectionsComponent } from './sections/my-sections.component';
import { MySectionComponent } from './sections/my-section/my-section.component';
import { MySectionEditComponent } from './my-section-edit/my-section-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MySectionsComponent,
    MySectionComponent,
    MySectionEditComponent
  ],
  imports: [
    CommonModule,
    MySectionsRoutingModule,
    ReactiveFormsModule
      ]
})
export class MySectionsModule { }
