import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as VisitorActions from './visitor.action';
import { environment } from 'src/environments/environment';
import { Section } from '../../Model/Section';
import { Category } from '../../Model/Category';
import { Register } from '../../Model/Register';

@Injectable()
export class VisitorEffects {
  apiPath = environment.api;
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
  @Effect()
  fetchSections = this.actions$.pipe(
    ofType(VisitorActions.FETCH_SECTIONS),
    switchMap(() => {
      return this.http.get<Section[]>(this.apiPath + '/Section/getSections');
    }),
    map((sections) => {
      console.log('hani');
      console.log(sections);
      return new VisitorActions.SetSections(sections);
    }),
    catchError(async (err, caught) => {
      return await new VisitorActions.StopLoading();
    })
  );

  @Effect()
  fetchCategories = this.actions$.pipe(
    ofType(VisitorActions.FETCH_CATEGORIES),
    switchMap(() => {
      return this.http.get<Category[]>(this.apiPath + '/Section/getCategories');
    }),
    map((categories) => {
      console.log('hani');
      console.log(categories);
      return new VisitorActions.SetCategories(categories);
    })
  );

  @Effect()
  sendApply = this.actions$.pipe(
    ofType(VisitorActions.SEND_APPLY),
    switchMap((registerApply:VisitorActions.SendApply) => {
      return this.http.post<number>(
        this.apiPath + '/Registration/addRegistrationApply',
     JSON.stringify({
          id: registerApply.payload.id,
          firstName: registerApply.payload.firstName,
          lastName: registerApply.payload.lastName,
          email: registerApply.payload.email,
          career: registerApply.payload.career,
          age: registerApply.payload.age,
          sex: registerApply.payload.sex
        })
        ,{
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
      );
    }),
    map((idOfApplyAdded) => {
      console.log(idOfApplyAdded);
      return new VisitorActions.ApplySent({
        isSent: true,
        message:
          'The apply was successfull sent, we will sending an email for you soon, thank you :)',
      });
    }),
    catchError(async (err, caught) => {
      console.log(err)
            console.log(caught)
      return new VisitorActions.ApplySent({
        isSent: false,
        message:
          err.error,
      });
    })
  );
}
