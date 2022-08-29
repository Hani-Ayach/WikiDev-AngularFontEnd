import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentedSectionsRoutingModule } from './commented-sections-routing.module';
import { CommentedSectionsComponent } from './commented-sections/commented-sections.component';


@NgModule({
  declarations: [

  
    CommentedSectionsComponent
  ],
  imports: [
    CommonModule,
    CommentedSectionsRoutingModule
  ]
})
export class CommentedSectionsModule { }
