import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentedSectionsRoutingModule } from './commented-sections-routing.module';
import { CommentedSectionsComponent } from './commented-sections/commented-sections.component';
import { CommentedSectionComponent } from './commented-sections/commented-section/commented-section.component';
import { CommentedSectionEditComponent } from './commented-section-edit/commented-section-edit.component';


@NgModule({
  declarations: [

  
    CommentedSectionsComponent,
        CommentedSectionComponent,
        CommentedSectionEditComponent
  ],
  imports: [
    CommonModule,
    CommentedSectionsRoutingModule
  ]
})
export class CommentedSectionsModule { }
