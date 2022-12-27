import { Category } from '../../Model/Category';
import { Section } from '../../Model/Section';
import { UserAuthenticationResponse } from '../../Model/UserAuthenticationResponse';
import * as VisitorAction from './visitor.action';

export interface State {
  sections: Section[];

  categories: Category[];

  user: UserAuthenticationResponse;
  isLoading: boolean;
  error: string;

  isApplySent: boolean;
  messageIfSent: string;
}

const initialState: State = {
  sections: [],

  categories: [],

  user: {} as any,
  isLoading: false,
  error: '',

  isApplySent: false,
  messageIfSent: '',
};

export function visitorReducer(
  state: State = initialState,
  action: VisitorAction.VisitorActions
): State {
  switch (action.type) {
    case VisitorAction.FETCH_SECTIONS:
      return {
        ...state,
        isLoading: true,
      };

    case VisitorAction.SET_SECTIONS:
      return {
        ...state,
        sections: action.payload,
        isLoading: false,
      };
    case VisitorAction.FETCH_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case VisitorAction.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case VisitorAction.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };

    case VisitorAction.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case VisitorAction.AUTHENTICATION_SUCCESS:
      if (action.payload.isAuthenticated) {
        localStorage.setItem('token', action.payload!.token);
        localStorage.setItem('role', action.payload!.roles[0]);
        localStorage.setItem('userId', action.payload!.userId);
      }
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case VisitorAction.AUTHENTICATION_Fail:
      console.log('false');
      return {
        ...state,
        isLoading: false,
        user: {} as any,
        error: action.payload,
      };

    case VisitorAction.LOGOUT:
      return {
        ...state,
        user: {} as any,
      };
    case VisitorAction.SEND_APPLY:
      return {
        ...state,
        isApplySent: false,
        messageIfSent: '',
        isLoading: true,
      };
    case VisitorAction.APPLY_SENT:
      return {
        ...state,
        isApplySent: action.payload.isSent,
        messageIfSent: action.payload.message,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
}
