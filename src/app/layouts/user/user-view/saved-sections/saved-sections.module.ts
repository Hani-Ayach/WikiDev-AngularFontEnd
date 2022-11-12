import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedSectionsRoutingModule } from './saved-sections-routing.module';
import { SavedSectionsComponent } from './saved-sections/saved-sections.component';
import { SavedSectionComponent } from './saved-sections/saved-section/saved-section.component';


@NgModule({
  declarations: [
    SavedSectionsComponent,
    SavedSectionComponent
  ],
  imports: [
    CommonModule,
    SavedSectionsRoutingModule
  ]
})
export class SavedSectionsModule { }
