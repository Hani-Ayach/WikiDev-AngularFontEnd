import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedSectionsRoutingModule } from './liked-sections-routing.module';
import { LikedSectionsComponent } from './liked-sections/liked-sections.component';
import { LikedSectionComponent } from './liked-sections/liked-section/liked-section.component';


@NgModule({
  declarations: [
    LikedSectionsComponent,
    LikedSectionComponent
  ],
  imports: [
    CommonModule,
    LikedSectionsRoutingModule
  ]
})
export class LikedSectionsModule { }
