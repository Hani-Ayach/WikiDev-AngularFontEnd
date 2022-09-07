import { Action } from '@ngrx/store';
import { Register } from '../Model/Register';
import { Section } from '../Model/Section';

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


//
export class FetchSections implements Action {
  readonly type = FETCH_SECTIONS;
}
export class SetSections implements Action {
  readonly type = SET_SECTIONS;
  constructor(payload:Section[]){}
}
//
export class LoginStart implements Action{
  readonly type=LOGIN_START;
  constructor(payload:{email:string,password:string}){}
}
export class AuthenticationFail implements Action{
  readonly type=AUTHENTICATION_Fail;
  constructor(payload:string){}
}
export class AuthenticationSuccess implements Action{
  readonly type=AUTHENTICATION_SUCCESS;
}
export class Logout implements Action{
  readonly type=LOGOUT;
}
//
export class SendApply implements Action{
  readonly type=SEND_APPLY;
  constructor(payload:Register){}
}

export type VisitorAction=
                LoginStart
                |AuthenticationSuccess
                |AuthenticationFail
                |Logout
                |FetchSections
                |SetSections
                |SendApply;
