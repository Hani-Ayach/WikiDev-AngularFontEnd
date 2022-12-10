import { ActionReducerMap } from '@ngrx/store';
import * as fromVisitor from '../visitor/visitor-store/visitor.reducer';
import * as fromUser from '../user/user-store/user.reducer';
import *as fromAdmin from '../admin/admin-store/admin.reducer';
export interface AppState {
  visitor: fromVisitor.State;
  user:fromUser.State;
  admin:fromAdmin.State;
}

export const appReducer: ActionReducerMap<AppState,any> = {
  visitor: fromVisitor.visitorReducer,
  user:fromUser.userReducer,
  admin:fromAdmin.AdminReducer
}
