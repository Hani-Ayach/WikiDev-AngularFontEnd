import { Action } from "@ngrx/store";
import { Section } from "../../Model/Section";
import { SectionRequest } from "../../Model/SectionRequest";
import { User } from "../../Model/User";
import { SetUser } from "../../user/user-store/user.action";

//Section Action Type
export const FETCH_SECTIONS="[admin] Fetch Sections";
export const SET_SECTIONS="[admin] Set Sections";
export const ADD_SECTION="[admin] Add Section";
export const REMOVE_SECTION="[admin] Remove Section";
export const EDIT_SECTION="[admin] Edit Section";

//User Action Type
export const FETCH_USERS="[admin] Fetch Users";
export const SET_USERS="[admin] Set Users";
export const REMOVE_USER="[admin] Remove User";

//Admin Action Type
export const FETCH_USER_ADMIN="[admin] Fetch User Admin";
export const SET_USER_ADMIN="[admin] Set User Admin";

//Request Action Type
export const FETCH_REQUESTS="[admin] Fetch Requests";
export const SET_REQUESTS="[admin] Set Requests";
export const ACCEPT_REQUEST="[admin] Accept Request";
export const REJECT_REQUEST="[admin] Reject Request";
export const REJECT_ALL_REQUESTS="[admin] Reject All Requests"

export const STOP_LOADING='[admin] Stop Loading';


//Section Actions
export class FetchSections implements Action{
  readonly type=FETCH_SECTIONS;
}

export class SetSections implements Action{
  readonly type=SET_SECTIONS;
  constructor(public payload:Section[]){}
}

export class AddSection implements Action{
  readonly type=ADD_SECTION;
  constructor(public payload:SectionRequest){}
}

export class RemoveSection implements Action{
  readonly type=REMOVE_SECTION;
  constructor(public payload:number){}
}

export class EditSection implements Action{
  readonly type=EDIT_SECTION;
  constructor(public payload:{id:number,section:SectionRequest}){}
}

//User Actions
export class FetchUsers implements Action{
  readonly type=FETCH_USERS;
}
export class SetUsers implements Action{
  readonly type=SET_USERS;
  constructor(public payload:User[]){}
}
export class RemoveUser implements Action{
  readonly type=REMOVE_USER;
  constructor(public payload:string){}
}

//Admin Actions
export class FetchUserAdmin implements Action{
  readonly type=FETCH_USER_ADMIN;
}
export class SetUserAdmin implements Action{
  readonly type=SET_USER_ADMIN;
  constructor(public payload:User){}
}

//Request Actions
export class FetchRequests implements Action{
  readonly type=FETCH_REQUESTS;
}
export class SetRequets implements Action{
  readonly type=SET_REQUESTS;
  constructor(public payload:Request[]){}
}
export class AcceptRequest implements Action{
  readonly type=ACCEPT_REQUEST;
  constructor(public payload:number){}
}
export class RejectRequest implements Action{
  readonly type=REJECT_REQUEST;
  constructor(public payload:number){}
}
export class RejectAllRequest implements Action{
 readonly type=REJECT_ALL_REQUESTS;
}

export class StopLoading implements Action{
  readonly type=STOP_LOADING;
  constructor(public payload: string) {}
}

export type AdminActions=FetchSections
                        |SetSections
                        |AddSection
                        |RemoveSection
                        |EditSection
                        |FetchUsers
                        |SetUsers
                        |RemoveUser
                        |FetchUserAdmin
                        |SetUserAdmin
                        |FetchRequests
                        |SetRequets
                        |RejectRequest
                        |RejectAllRequest
                        |AcceptRequest
                        |StopLoading;
