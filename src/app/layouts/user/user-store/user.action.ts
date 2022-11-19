import { Action } from '@ngrx/store';
import { Like } from '../../Model/Like';
import { Save } from '../../Model/Save';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import { Comment } from '../../Model/Comment';
import { SectionRequest } from '../../Model/SectionRequest';
import { EditeUser } from '../../Model/EditeUser';
import * as ChangePasswordModel from '../../Model/ChangePassword';


export const FETCH_USER = '[User] Fetch User';
export const SET_USER = '[User] Set User';

export const FETCH_SECTIONS = '[user] Fetch Sections';
export const SET_SECTIONS = '[user] Set Sections';

export const FETCH_SECTIONS_BY_USER_ID = '[User] Fetch Sections By User Id';
export const SET_SECTIONS_BY_USER_ID = '[User] Set Sections By User Id';

export const FETCH_SAVED_SECTIONS = '[User] Fetch Saved Sections';
export const SET_SAVED_SECTIONS = '[User] Set Saved Sections';

export const FETCH_LIKED_SECTIONS = '[User] Fetch Liked Sections';
export const SET_LIKED_SECTIONS = '[User] Set Liked Sections';

export const FETCH_COMMENTED_SECTIONS = '[User] Fetch Commented Sections';
export const SET_COMMENTED_SECTIONS = '[User] Set Commented Sections';

export const ADD_LIKE='[User] Add Like';
export const REMOVE_LIKE='[User] Remove Like';

export const ADD_TO_SAVE='[User] Add To Save';
export const REMOVE_FROM_SAVE='[User] Remove From Save'

export const ADD_COMMENT='[User] Add Comment'
export const REMOVE_COMMENT='[User] Remove Comment'

export const ADD_SECTION='[User] Add Section'
export const EDIT_SECTION='[User] Edit Section'
export const REMOVE_SECTION='[User] Remove Section'

export const EDIT_USER='[User] Edit User';

export const CHANGE_PASSWORD='[User] Change Password';

export const STOP_LOADING='[Loading] Stop Loading';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor(public payload: string) {}
}
export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload:User) {}
}

export class FetchSections implements Action {
  readonly type = FETCH_SECTIONS;
}
export class SetSections implements Action {
  readonly type = SET_SECTIONS;
  constructor(public payload: Section[]) {}
}

export class FetchSectionsByUserId implements Action {
  readonly type = FETCH_SECTIONS_BY_USER_ID;
  constructor(public payload: string) {}
}
export class SetSectionsByUserId implements Action {
  readonly type = SET_SECTIONS_BY_USER_ID;
  constructor(public payload: Section[]) {}
}

export class FetchSavedSections implements Action {
  readonly type = FETCH_SAVED_SECTIONS;
  constructor(public payload: string) {}
}
export class SetSavedSections implements Action {
  readonly type = SET_SAVED_SECTIONS;
  constructor(public payload: Section[]) {}
}

export class FetchLikedSections implements Action {
  readonly type = FETCH_LIKED_SECTIONS;
  constructor(public payload: string) {}
}
export class SetLikedSections implements Action {
  readonly type = SET_LIKED_SECTIONS;
  constructor(public payload: Section[]) {}
}

export class FetchCommentedSections implements Action {
  readonly type = FETCH_COMMENTED_SECTIONS;
  constructor(public payload: string) {}
}
export class SetCommentedSections implements Action {
  readonly type = SET_COMMENTED_SECTIONS;
  constructor(public payload: Section[]) {}
}

export class AddLike implements Action{
  readonly type=ADD_LIKE;
  constructor(public payload:Like){}
}
export class RemoveLike implements Action{
  readonly type=REMOVE_LIKE;
  constructor(public payload:Like){}
}

export class AddToSave implements Action{
  readonly type=ADD_TO_SAVE;
  constructor(public payload:Save){}
}
export class RemoveFromSave implements Action{
  readonly type=REMOVE_FROM_SAVE;
  constructor(public payload:Save){}
}

export class AddComment implements Action{
  readonly type=ADD_COMMENT;
  constructor(public payload:Comment){}
}
export class RemoveComment implements Action{
  readonly type=REMOVE_COMMENT;
  constructor(public payload:{commentId:number,sectionId:number}){}
}

export class AddSection implements Action{
  readonly type=ADD_SECTION;
  constructor(public payload:SectionRequest){}
}
export class EditSection implements Action{
  readonly type=EDIT_SECTION;
  constructor(public payload:{id:number,section:SectionRequest}){}
}
export class RemoveSection implements Action{
  readonly type=REMOVE_SECTION;
  constructor(public payload:number){}
}

export class EditUser implements Action{
  readonly type=EDIT_USER;
  constructor(public payload:{id:string,editeUser:EditeUser}){}
}

export class ChangePassword implements Action{
  readonly type=CHANGE_PASSWORD;
  constructor(public payload:ChangePasswordModel.ChangePassword){}
}

export class StopLoading implements Action{
  readonly type=STOP_LOADING;
  constructor(public payload: string) {}
}

export type UserActions=FetchUser
                        |SetUser
                        |FetchSections
                        |SetSections
                        |FetchSectionsByUserId
                        |SetSectionsByUserId
                        |FetchLikedSections
                        |SetLikedSections
                        |FetchCommentedSections
                        |SetCommentedSections
                        |FetchSavedSections
                        |SetSavedSections
                        |AddToSave
                        |RemoveFromSave
                        |AddLike
                        |RemoveLike
                        |AddComment
                        |RemoveComment
                        |AddSection
                        |EditSection
                        |RemoveSection
                        |EditUser
                        |ChangePassword
                        |StopLoading;
