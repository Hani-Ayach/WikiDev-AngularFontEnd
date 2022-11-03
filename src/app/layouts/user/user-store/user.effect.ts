import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, switchMap } from "rxjs";
import { environment } from "src/environments/environment";
import { Section } from "../../Model/Section";
import { User } from "../../Model/User";
import *as fromApp from "../../store/app.reducer";
import *as UserActions from "./user.action";
@Injectable()
export class UserEffect{
  apiPath=environment.api;

  constructor(
    private actions$:Actions,
    private http:HttpClient,
    private store:Store<fromApp.AppState>
    ){}

  @Effect()
  fetchUser=this.actions$.pipe(
    ofType(UserActions.FETCH_USER),
    switchMap((userDate:UserActions.FetchUser)=>{
      return this.http.get<User>(this.apiPath+'/User/'+userDate.payload)
    }),
    map((user)=>{
      console.log(user);
      return new UserActions.SetUser(user);
    }
    ),
    catchError(async (err, caught)=>{
      return await new UserActions.StopLoading(err.error);
    })
  )

  @Effect()
  fetchSections = this.actions$.pipe(
    ofType(UserActions.FETCH_SECTIONS),
    switchMap(() => {
      return this.http.get<Section[]>(this.apiPath + '/Section/getSections');
    }),
    map((sections) => {
      console.log('hani');
      console.log(sections);
      return new UserActions.SetSections(sections);
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.error);
    })
  );

  @Effect()
  fetchUserSections=this.actions$.pipe(
    ofType(UserActions.FETCH_SECTIONS_BY_USER_ID),
    switchMap((userData:UserActions.FetchUser)=>{
      return this.http.get<Section[]>(this.apiPath+'/Section/getSectionsByUserId/'+userData.payload)
    }),
    map((sections)=>{
      console.log(sections)
      return new UserActions.SetSectionsByUserId(sections);
    }),
    catchError(async (err,caught)=>{
      return await new UserActions.StopLoading(err.error);
    })
  )

  @Effect()
  addLike=this.actions$.pipe(
    ofType(UserActions.ADD_LIKE),
    switchMap((userData:UserActions.AddLike)=>{
      return this.http.post(this.apiPath+'/Like/addLike',userData.payload)
    }),
    map(
      ()=>{
        return new UserActions.StopLoading('done')
      }
    ),
    catchError(async (err,caught)=>{
      return await new UserActions.StopLoading(err.error);
    })
  )
  
  @Effect()
  removeLike=this.actions$.pipe(
    ofType(UserActions.REMOVE_LIKE),
    switchMap((userData:UserActions.RemoveLike)=>{
      return this.http.delete(this.apiPath+'/Like/removeLike',{body:userData.payload})
    }),
    map(
      ()=>{
        return new UserActions.StopLoading('done')
      }
    ),
    catchError(async (err,caught)=>{
      console.log(err)
      return await new UserActions.StopLoading(err.error);
    })
  )
}
