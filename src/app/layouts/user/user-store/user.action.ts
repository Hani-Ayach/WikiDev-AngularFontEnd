import { Action } from '@ngrx/store';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';

export const FETCH_USER = '[User] Fetch User';
export const SET_USER = '[User] Set User';

export const FETCH_SECTIONS_BY_USER_ID = '[User] Fetch Sections By User Id';
export const SET_SECTIONS_BY_USER_ID = '[User] Set Sections By User Id';

export const FETCH_SAVED_SECTIONS = '[User] Fetch Saved Sections';
export const SET_SAVED_SECTIONS = '[User] Set Saved Sections';

export const FETCH_LIKED_SECTIONS = '[User] Fetch Liked Sections';
export const SET_LIKED_SECTIONS = '[User] Set Liked Sections';

export const FETCH_COMMENTED_SECTIONS = '[User] Fetch Commented Sections';
export const SET_COMMENTED_SECTIONS = '[User] Set Commented Sections';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor(public payload: string) {}
}
export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload:User) {}
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

export type UserActions=FetchUser
                        |SetUser
                        |FetchSectionsByUserId
                        |SetSectionsByUserId
                        |FetchLikedSections
                        |SetLikedSections
                        |FetchCommentedSections
                        |SetCommentedSections
                        |FetchSavedSections
                        |SetSavedSections;
