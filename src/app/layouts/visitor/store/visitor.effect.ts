import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect,ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromAction from '../../store/app.reducer';
import * as VisitorActions from '../store/visitor.action';
import { environment } from 'src/environments/environment';
import { Section } from '../Model/Section';
import { Category } from '../Model/Category';

@Injectable()
export class VisitorEffects {
  apiPath = environment.api;
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromAction.AppState>
  ) {}
  @Effect()
  fetchSections = this.actions$.pipe(
    ofType(VisitorActions.FETCH_SECTIONS),
    switchMap(() => {
      return this.http.get<Section[]>(this.apiPath + '/Section/getSections');
    }),
    map(sections => {
      console.log('hani');
      console.log(sections);
      return new VisitorActions.SetSections(sections);
    }),
    catchError(async (err, caught) => {
      return await new VisitorActions.StopLoading();;
    })
  );

  @Effect()
  fetchCategories = this.actions$.pipe(
    ofType(VisitorActions.FETCH_CATEGORIES),
    switchMap(() => {
      return this.http.get<Category[]>(this.apiPath + '/Section/getCategories');
    }),
    map(categories => {
      console.log('hani');
      console.log(categories);
      return new VisitorActions.SetCategories(categories);
    })
  );



}
