import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import *as fromApp from '../../../../store/app.reducer'
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor(private store:Store<fromApp.AppState>) { }
  sections:Section[]=[];
  displayNotify = false;
  userSubscribtion?:Subscription;

    ngOnInit(): void {

      this.userSubscribtion = this.store.select('user').subscribe((state) => {
        console.log(state.userSections)
        this.sections = state.sections;
        if (state.sections.length==0 && !state.isLoading) {
          console.log('one')
          this.displayNotify = true;
        }
        else{
          console.log('one')
          this.displayNotify = false;
        }
      });
    }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
    }

}
