import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../../Model/User";
import *as fromApp from "../../store/app.reducer";
import *as userAction from "./user.action";
@Injectable()
export class UserEffect{
  apiPath=environment.api;

  constructor(private actions$:Actions,private http:HttpClient,private store:Store<fromApp.AppState>){}

  @Effect()
  fetchUser=this.actions$.pipe(
    ofType(userAction.FETCH_USER),
    switchMap((userDate:userAction.FetchUser)=>{
      return this.http.get<User>(this.apiPath+'/User/'+userDate.payload)
    }),
    map((user)=>{
      console.log(user);
      return new userAction.SetUser(user);
    }
    )
  )
}
