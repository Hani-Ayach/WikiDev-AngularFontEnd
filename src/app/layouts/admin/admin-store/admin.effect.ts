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
    map((data) => {
      return new AdminActions.SetSections(data);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  addSection = this.action$.pipe(
    ofType(AdminActions.ADD_SECTION),
    switchMap((adminData: AdminActions.AddSection) => {
      let data = new FormData();
      data.append('Title', adminData.payload.Title);
      data.append('Description', adminData.payload.Description);
      data.append('CodeBlock', adminData.payload.CodeBlock);
      data.append('CategoryId', adminData.payload.CategoryId);
      data.append('ApplicationUserId', adminData.payload.ApplicationUserId);
      for (var i = 0; i < adminData.payload.files.length; i++) {
        data.append('files', adminData.payload.files[i]);
      }
      return this.http.post(this.apiPath + '/Section/addSection', data);
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  editeSection = this.action$.pipe(
    ofType(AdminActions.EDIT_SECTION),
    switchMap((adminData: AdminActions.EditSection) => {
      let data = new FormData();
      data.append('Title', adminData.payload.section.Title);
      data.append('Description', adminData.payload.section.Description);
      data.append('CodeBlock', adminData.payload.section.CodeBlock);
      data.append('CategoryId', adminData.payload.section.CategoryId);
      data.append(
        'ApplicationUserId',
        adminData.payload.section.ApplicationUserId
      );
      for (var i = 0; i < adminData.payload.section.files.length; i++) {
        data.append('files', adminData.payload.section.files[i]);
      }
      return this.http.put(
        this.apiPath + '/Section/updateSection/' + adminData.payload.id,
        data
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  removeSection = this.action$.pipe(
    ofType(AdminActions.REMOVE_SECTION),
    switchMap((adminData: AdminActions.RemoveSection) => {
      return this.http.delete(
        this.apiPath + '/Section/deleteSection/' + adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  @Effect()
  fetchCategories = this.action$.pipe(
    ofType(AdminActions.FETCH_CATEGORIES),
    switchMap(() => {
      return this.http.get<Category[]>(this.apiPath + '/Section/getCategories');
    }),
    map((data) => {
      return new AdminActions.SetCategories(data);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  @Effect()
  addCategory = this.action$.pipe(
    ofType(AdminActions.ADD_CATEGORY),
    switchMap((adminData: AdminActions.AddCategory) => {
      return this.http.post(
        this.apiPath + '/Section/addCategory',
        adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  @Effect()
  removeCategory = this.action$.pipe(
    ofType(AdminActions.REMOVE_CATEGORY),
    switchMap((adminData: AdminActions.RemoveCategory) => {
      return this.http.delete(
        this.apiPath + '/Section/deleteCategory/' + adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
}
