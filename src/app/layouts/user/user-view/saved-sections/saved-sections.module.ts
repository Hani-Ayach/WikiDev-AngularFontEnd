import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SavedSectionsRoutingModule } from './saved-sections-routing.module';
import { SavedSectionsComponent } from './saved-sections/saved-sections.component';


@NgModule({
  declarations: [
    SavedSectionsComponent
  ],
  imports: [
    CommonModule,
    SavedSectionsRoutingModule
  ]
})
export class SavedSectionsModule { }
