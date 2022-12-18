import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../Model/Category';
import { Section } from '../../Model/Section';
import * as AdminActions from './admin.action';
@Injectable()
export class AdminEffect {
  apiPath = environment.api;
  constructor(private action$: Actions, private http: HttpClient) {}
  @Effect()
  fetchSections = this.action$.pipe(
    ofType(AdminActions.FETCH_SECTIONS),
    switchMap(() => {
      return this.http.get<Section[]>(this.apiPath + '/Section/getSections');
    }),
    map((data)=>{
      return new AdminActions.SetSections(data);
    }),
    catchError(async(err,caught)=>{
      return new AdminActions.StopLoading(err.error)
    })
  );

  @Effect()
  fetchCategories = this.action$.pipe(
    ofType(AdminActions.FETCH_CATEGORIES),
    switchMap(() => {
      return this.http.get<Category[]>(this.apiPath + '/Section/getCategories');
    }),
    map((data)=>{
      return new AdminActions.SetCategories(data);
    }),
    catchError(async(err,caught)=>{
      return new AdminActions.StopLoading(err.error)
    })
  );
}
