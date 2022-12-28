import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as fromApp from '../../store/app.reducer';
import * as UserActions from './user.action';
@Injectable()
export class UserEffect {
  apiPath = environment.api;

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  @Effect()
  fetchUser = this.actions$.pipe(
    ofType(UserActions.FETCH_USER),
    switchMap((userDate: UserActions.FetchUser) => {
      return this.http.get<User>(this.apiPath + '/User/' + userDate.payload);
    }),
    map((user) => {
      console.log(user);
      return new UserActions.SetUser(user);
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  fetchSections = this.actions$.pipe(
    ofType(UserActions.FETCH_SECTIONS),
    switchMap(() => {
      return this.http.get<Section[]>(this.apiPath + '/Section/getSections');
    }),
    map((sections) => {
      return new UserActions.SetSections(sections);
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  fetchUserSections = this.actions$.pipe(
    ofType(UserActions.FETCH_SECTIONS_BY_USER_ID),
    switchMap((userData: UserActions.FetchUser) => {
      return this.http.get<Section[]>(
        this.apiPath + '/Section/getSectionsByUserId/' + userData.payload
      );
    }),
    map((sections) => {
      return new UserActions.SetSectionsByUserId(sections);
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  fetchLikedSections = this.actions$.pipe(
    ofType(UserActions.FETCH_LIKED_SECTIONS),
    switchMap((userData: UserActions.FetchLikedSections) => {
      return this.http.get<Section[]>(
        this.apiPath + '/Section/getLikedSectionsByUser/' + userData.payload
      );
    }),
    map((sections) => {
      console.log(sections)
      return new UserActions.SetLikedSections(sections);
    }),
    catchError(async (err, caught) => {
      console.log(err)
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  fetchSavedSections = this.actions$.pipe(
    ofType(UserActions.FETCH_SAVED_SECTIONS),
    switchMap((userData: UserActions.FetchSavedSections) => {
      return this.http.get<Section[]>(
        this.apiPath + '/Section/getSavedSectionsByUser/' + userData.payload
      );
    }),
    map((sections) => {
      console.log(sections)
      return new UserActions.SetSavedSections(sections);
    }),
    catchError(async (err, caught) => {
      console.log(err)
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  fetchCommentedSections = this.actions$.pipe(
    ofType(UserActions.FETCH_COMMENTED_SECTIONS),
    switchMap((userData: UserActions.FetchCommentedSections) => {
      return this.http.get<Section[]>(
        this.apiPath + '/Section/getCommentedSectionsByUser/' + userData.payload
      );
    }),
    map((sections) => {
      return new UserActions.SetCommentedSections(sections);
    }),
    catchError(async (err, caught) => {
      console.log(err)
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  addLike = this.actions$.pipe(
    ofType(UserActions.ADD_LIKE),
    switchMap((userData: UserActions.AddLike) => {
      return this.http.post(this.apiPath + '/Like/addLike', userData.payload);
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  removeLike = this.actions$.pipe(
    ofType(UserActions.REMOVE_LIKE),
    switchMap((userData: UserActions.RemoveLike) => {
      return this.http.delete(this.apiPath + '/Like/removeLike', {
        body: userData.payload,
      });
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  addSave = this.actions$.pipe(
    ofType(UserActions.ADD_TO_SAVE),
    switchMap((userData: UserActions.AddToSave) => {
      return this.http.post(this.apiPath + '/Save/addSave', userData.payload);
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  removeFromSave = this.actions$.pipe(
    ofType(UserActions.REMOVE_FROM_SAVE),
    switchMap((userData: UserActions.RemoveFromSave) => {
      return this.http.delete(this.apiPath + '/Save/removeSave', {
        body: userData.payload,
      });
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  addComment = this.actions$.pipe(
    ofType(UserActions.ADD_COMMENT),
    switchMap((userData: UserActions.AddComment) => {
      return this.http.post(
        this.apiPath + '/Comment/addComment',
        userData.payload
      );
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );
  @Effect()
  removeComment = this.actions$.pipe(
    ofType(UserActions.REMOVE_COMMENT),
    switchMap((userData: UserActions.RemoveComment) => {
      return this.http.delete(
        this.apiPath + '/Comment/removeComment/' + userData.payload.commentId
      );
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  addSection = this.actions$.pipe(
    ofType(UserActions.ADD_SECTION),
    switchMap((userData: UserActions.AddSection) => {
      let data = new FormData();
      data.append('Title', userData.payload.Title);
      data.append('Description', userData.payload.Description);
      data.append('CodeBlock', userData.payload.CodeBlock);
      data.append('CategoryId', userData.payload.CategoryId);
      data.append('ApplicationUserId', userData.payload.ApplicationUserId);
      for (var i = 0; i < userData.payload.files.length; i++) {
        data.append('files', userData.payload.files[i]);
      }

      return this.http.post(this.apiPath + '/Section/addSection', data);
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  editSection = this.actions$.pipe(
    ofType(UserActions.EDIT_SECTION),
    switchMap((userData: UserActions.EditSection) => {
      let data = new FormData();
      data.append('Title', userData.payload.section.Title);
      data.append('Description', userData.payload.section.Description);
      data.append('CodeBlock', userData.payload.section.CodeBlock);
      data.append('CategoryId', userData.payload.section.CategoryId);
      data.append(
        'ApplicationUserId',
        userData.payload.section.ApplicationUserId
      );
      for (var i = 0; i < userData.payload.section.files.length; i++) {
        data.append('files', userData.payload.section.files[i]);
      }

      return this.http.put(
        this.apiPath + '/Section/updateSection/' + userData.payload.id,
        data
      );
    }),
    map((res) => {
      console.log(res);
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(caught);

      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  deleteSection = this.actions$.pipe(
    ofType(UserActions.REMOVE_SECTION),
    switchMap((userData: UserActions.RemoveSection) => {
      return this.http.delete(
        this.apiPath + '/Section/removeSection/' + userData.payload
      );
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  editUser = this.actions$.pipe(
    ofType(UserActions.EDIT_USER),
    switchMap((userData: UserActions.EditUser) => {
      let data = new FormData();
      data.append('Id', userData.payload.editeUser.Id);
      data.append('FirstName', userData.payload.editeUser.FirstName);
      data.append('LastName', userData.payload.editeUser.LastName);
      data.append('UserName', userData.payload.editeUser.UserName);
      data.append('Email', userData.payload.editeUser.Email);
      data.append('Career', userData.payload.editeUser.Career);
      data.append('Age', userData.payload.editeUser.Age);
      data.append('Sex', userData.payload.editeUser.Sex);
      data.append('file', userData.payload.editeUser.file);

      return this.http.put(
        this.apiPath + '/User/update/' + userData.payload.id,
        data
      );
    }),
    map((res) => {
      console.log(res);
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(caught);

      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );

  @Effect()
  changePassword = this.actions$.pipe(
    ofType(UserActions.CHANGE_PASSWORD),
    switchMap((userData: UserActions.ChangePassword) => {
      return this.http.post(
        this.apiPath + '/Authentication/changePassword',
        userData.payload
      );
    }),
    map(() => {
      return new UserActions.StopLoading('');
    }),
    catchError(async (err, caught) => {
      console.log(err);
      return await new UserActions.StopLoading(err.name);
    })
  );
}
