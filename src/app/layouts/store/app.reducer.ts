import { ActionReducerMap } from '@ngrx/store';
import * as fromVisitor from '../visitor/visitor-store/visitor.reducer';
import * as fromUser from '../user/user-store/user.reducer';
export interface AppState {
  visitor: fromVisitor.State;
  user:fromUser.State;
}

export const appReducer: ActionReducerMap<AppState,any> = {
  visitor: fromVisitor.visitorReducer,
  user:fromUser.userReducer
}
