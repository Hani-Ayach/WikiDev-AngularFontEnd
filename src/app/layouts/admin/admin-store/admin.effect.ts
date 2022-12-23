import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../Model/Category';
import { Register } from '../../Model/Register';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as AdminActions from './admin.action';

interface count {
  count: number;
}
@Injectable()
export class AdminEffect {
  apiPath = environment.api;
  constructor(private action$: Actions, private http: HttpClient) {}
  //section
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
        this.apiPath + '/Section/removeSection/' + adminData.payload
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
  removeComment = this.action$.pipe(
    ofType(AdminActions.REMOVE_COMMENT),
    switchMap((adminData: AdminActions.RemoveComment) => {
      return this.http.delete(
        this.apiPath + '/Comment/removeComment/' + adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  //counts
  @Effect()
  fetchCountOfLikes = this.action$.pipe(
    ofType(AdminActions.FETCH_COUNT_OF_LIKES),
    switchMap(() => {
      return this.http.get<count>(this.apiPath + '/Like/getCountOfLike');
    }),
    map((data) => {
      return new AdminActions.SetCountOfLikes(data.count);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  fetchCountOfComments = this.action$.pipe(
    ofType(AdminActions.FETCH_COUNT_OF_COMMENTS),
    switchMap(() => {
      return this.http.get<count>(this.apiPath + '/Comment/getCountOfComment');
    }),
    map((data) => {
      return new AdminActions.SetCountOfComments(data.count);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  fetchCountOfSaves = this.action$.pipe(
    ofType(AdminActions.FETCH_COUNT_OF_SAVES),
    switchMap(() => {
      return this.http.get<count>(this.apiPath + '/Save/getCountOfSave');
    }),
    map((data) => {
      return new AdminActions.SetCountOfSaves(data.count);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  //category
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
      let headers = new HttpHeaders({ category: adminData.payload.name });
      let options = { headers: headers };
      return this.http.post(
        this.apiPath + '/Section/addCategory',
        null,
        options
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
        this.apiPath + '/Section/removeCategory/' + adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  //user admin
  @Effect()
  fetchUserAdmin = this.action$.pipe(
    ofType(AdminActions.FETCH_USER_ADMIN),
    switchMap((AdminData: AdminActions.FetchUserAdmin) => {
      return this.http.get<User>(this.apiPath + '/User/' + AdminData.payload);
    }),
    map((data) => {
      return new AdminActions.SetUserAdmin(data);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  //user

  @Effect()
  fetchUsers = this.action$.pipe(
    ofType(AdminActions.FETCH_USERS),
    switchMap(() => {
      return this.http.get<User[]>(this.apiPath + '/User');
    }),
    map((data) => {
      return new AdminActions.SetUsers(data);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  @Effect()
  fetchCountOfUsers = this.action$.pipe(
    ofType(AdminActions.FETCH_COUNT_OF_USERS),
    switchMap(() => {
      return this.http.get<count>(this.apiPath + '/User/countOfUsers');
    }),
    map((data) => {
      return new AdminActions.SetCountOfUsers(data.count);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  @Effect()
  deleteUser = this.action$.pipe(
    ofType(AdminActions.REMOVE_USER),
    switchMap((adminData: AdminActions.RemoveUser) => {
      return this.http.delete(
        this.apiPath + '/User/remove/' + adminData.payload
      );
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );

  //requests
  @Effect()
  fetchRequests = this.action$.pipe(
    ofType(AdminActions.FETCH_REQUESTS),
    switchMap(() => {
      return this.http.get<Register[]>(this.apiPath + '/Registration');
    }),
    map((data) => {
      return new AdminActions.SetRequets(data);
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
  @Effect()
  acceptRequest = this.action$.pipe(
    ofType(AdminActions.ACCEPT_REQUEST),
    switchMap((adminData: AdminActions.AcceptRequest) => {
      return this.http.post(
        this.apiPath + '/Registration/accept/' + adminData.payload,
        null
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
  rejectRequest = this.action$.pipe(
    ofType(AdminActions.REJECT_REQUEST),
    switchMap((adminData: AdminActions.RejectRequest) => {
      return this.http.delete(
        this.apiPath + '/Registration/removeApply/' + adminData.payload
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
  rejectAllRequests = this.action$.pipe(
    ofType(AdminActions.REJECT_ALL_REQUESTS),
    switchMap(() => {
      return this.http.delete(this.apiPath + '/Registration/removeApplies');
    }),
    map(() => {
      return new AdminActions.StopLoading('done');
    }),
    catchError(async (err, caught) => {
      return new AdminActions.StopLoading(err.error);
    })
  );
}
