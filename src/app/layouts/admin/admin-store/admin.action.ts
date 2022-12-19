import { Action } from "@ngrx/store";
import { Category } from "../../Model/Category";
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

//Comment
export const REMOVE_COMMENT="[admin] Remove Comment"

//Category Action Type
export const FETCH_CATEGORIES="[admin] Fetch Categories";
export const SET_CATEGORIES="[admin] Set Categories";
export const ADD_CATEGORY="[admin] Add Category";
export const REMOVE_CATEGORY="[admin] Remove Category";

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

//Dashboard Action Type
export const FETCH_COUNT_OF_LIKES="[dashboard] Fetch Count of Likes";
export const SET_COUNT_OF_LIKES="[dashboard] Set Count of Likes";

export const FETCH_COUNT_OF_COMMENTS="[dashboard] Fetch Count of Comments";
export const SET_COUNT_OF_COMMENTS="[dashboard] Set Count of Comments";

export const FETCH_COUNT_OF_USERS="[dashboard] Fetch Count of Users";
export const SET_COUNT_OF_USERS="[dashboard] Set Count of Users";

export const FETCH_COUNT_OF_SAVES="[dashboard] Fetch Count of Saves";
export const SET_COUNT_OF_SAVES="[dashboard] Set Count of Saves";

export const SET_MOST_LIKED_SECTION="[dashboard] Set Most Liked Section";


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
//comment
export class RemoveComment implements Action{
  readonly type=REMOVE_COMMENT;
  constructor(public payload:number){}
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
//Category Action
export class FetchCategories implements Action{
  readonly type=FETCH_CATEGORIES;
}
export class SetCategories implements Action{
  readonly  type=SET_CATEGORIES;
  constructor(public payload:Category[]){}
}
export class AddCategory implements Action{
  readonly type=ADD_CATEGORY;
  constructor(public payload:Category){}
}
export class RemoveCategory implements Action{
  readonly type=REMOVE_CATEGORY;
  constructor(public payload:number){}
}
//Dashboard Action
export class FetchCountOfLikes implements Action{
  readonly type=FETCH_COUNT_OF_LIKES;
}
export class SetCountOfLikes implements Action{
  readonly type=SET_COUNT_OF_LIKES;
  constructor(public payload:number){}
}
export class FetchCountOfComments implements Action{
  readonly type=FETCH_COUNT_OF_COMMENTS;
}
export class SetCountOfComments implements Action{
  readonly type=SET_COUNT_OF_COMMENTS;
  constructor(public payload:number){}
}
export class FetchCountOfSaves implements Action{
  readonly type=FETCH_COUNT_OF_SAVES;
}
export class SetCountOfSaves implements Action{
  readonly type=SET_COUNT_OF_SAVES;
  constructor(public payload:number){}
}
export class SetMostLikedSection implements Action{
  readonly type=SET_MOST_LIKED_SECTION;
  constructor(public payload:Section){}
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
                        |RemoveComment
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
                        |FetchCategories
                        |SetCategories
                        |AddCategory
                        |RemoveCategory
                        |FetchCountOfLikes
                        |SetCountOfLikes
                        |FetchCountOfComments
                        |SetCountOfComments
                        |FetchCountOfSaves
                        |SetCountOfSaves
                        |SetMostLikedSection
                        |StopLoading;
