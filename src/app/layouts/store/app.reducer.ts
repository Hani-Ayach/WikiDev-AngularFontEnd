import { ActionReducerMap } from '@ngrx/store';
import * as fromVisitor from '../visitor/store/visitor.reducer';
export interface AppState {
  visitor: fromVisitor.State;
}

export const appReducer: ActionReducerMap<AppState,any> = {
  visitor: fromVisitor.visitorReducer
}
