import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Register } from 'src/app/layouts/Model/Register';
import *as fromApp from '../../../../store/app.reducer'
import *as AdminActions from '../../../admin-store/admin.action';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  sub?:Subscription;
  requests:Register[]=[];
  searchRequest=new FormGroup({
    careerName:new FormControl('')
  })
  careerName:any;
  constructor(private store :Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new AdminActions.FetchRequests());
    this.sub=this.store.select('admin').subscribe((state)=>{
      this.requests=state.requests;
      console.log(state.errorMessage)
    })
  }
  OnSearch() {
    console.log(this.searchRequest.value);
    this.careerName = this.searchRequest.value.careerName;

  }
  OnAccept(id:number){this.store.dispatch(new AdminActions.AcceptRequest(id))}
  OnReject(id:number){this.store.dispatch(new AdminActions.RejectRequest(id))}
  OnRejectAllRequest(){this.store.dispatch(new AdminActions.RejectAllRequest())}
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.sub)this.sub.unsubscribe();
  }
}
