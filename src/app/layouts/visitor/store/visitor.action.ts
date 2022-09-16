import { Action } from '@ngrx/store';
import { Register } from '../Model/Register';
import { Section } from '../Model/Section';
import { User } from '../Model/User';

//sections
export const FETCH_SECTIONS = '[Sections] Fetch Sections';
export const SET_SECTIONS = '[Sections] Set Sections';

//login
export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATION_SUCCESS = '[Auth] Authentication Success';
export const AUTHENTICATION_Fail = '[Auth] Authentication Fail';
export const LOGOUT = '[Auth] Logout';

//register
export const SEND_APPLY = '[Register] Send Apply';
export const APPLY_SENT = '[Register] Apply Sent';

//
export class FetchSections implements Action {
  readonly type = FETCH_SECTIONS;
}
export class SetSections implements Action {
  readonly type = SET_SECTIONS;
  constructor(public payload: Section[]) {}
}
//
export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: { email: string, password: string }) {}
}
export class AuthenticationFail implements Action {
  readonly type = AUTHENTICATION_Fail;
  constructor(public payload: string) {}
}
export class AuthenticationSuccess implements Action {
  readonly type = AUTHENTICATION_SUCCESS;
  constructor(public payload: User) {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
}
//
export class SendApply implements Action {
  readonly type = SEND_APPLY;
  constructor(public payload: Register) {}
}
export class ApplySent implements Action {
  readonly type = APPLY_SENT;
  constructor(public payload: { isSent: boolean, message: string }) {}
}
export type VisitorActions =
  | LoginStart
  | AuthenticationSuccess
  | AuthenticationFail
  | Logout
  | FetchSections
  | SetSections
  | SendApply
  | ApplySent;
