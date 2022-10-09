import { Category } from '../../Model/Category';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as VisitorAction from './visitor.action';

export interface State {
  sections: Section[];

  categories: Category[];

  user: User;
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
        sections: [...state.sections, ...action.payload],
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
        categories: [...state.categories, ...action.payload],
        isLoading: false,
      };

    case VisitorAction.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case VisitorAction.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case VisitorAction.AUTHENTICATION_Fail:
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
      };
    case VisitorAction.APPLY_SENT:
      return {
        ...state,
        isApplySent: action.payload.isSent,
        messageIfSent: action.payload.message,
      };

    default:
      return {
        ...state,
      };
  }
}
