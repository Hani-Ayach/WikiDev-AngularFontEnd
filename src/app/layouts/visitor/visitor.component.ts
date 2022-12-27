import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as VisitorAction from './visitor-store/visitor.action';
@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css'],
})
export class VisitorComponent implements OnInit {

  isLoading=false;
  errorMessage='';
  thereIsAnError=false;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('visitor').subscribe(data=>{
      console.log(data.isLoading)
      this.isLoading=data.isLoading;

      if(!!data.error)
      this.thereIsAnError=true;

      this.errorMessage=data.error;
    })

    this.store.dispatch(new VisitorAction.FetchSections());
    this.store.dispatch(new VisitorAction.FetchCategories());
  }
}
