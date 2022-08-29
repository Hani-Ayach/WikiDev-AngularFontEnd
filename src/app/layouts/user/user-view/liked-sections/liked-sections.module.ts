import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedSectionsRoutingModule } from './liked-sections-routing.module';
import { LikedSectionsComponent } from './liked-sections/liked-sections.component';


@NgModule({
  declarations: [
    LikedSectionsComponent
  ],
  imports: [
    CommonModule,
    LikedSectionsRoutingModule
  ]
})
export class LikedSectionsModule { }
