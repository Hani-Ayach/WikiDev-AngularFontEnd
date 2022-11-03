import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as UserAction from './user.action';
export interface State {
  user: User;
  userSections: Section[];
  savedSections: Section[];
  CommentedSections: Section[];
  LikedSections: Section[];
  isLoading: boolean;
}

const initialState: State = {
  user: {} as any,
  userSections: [],
  savedSections: [],
  CommentedSections: [],
  LikedSections: [],
  isLoading: false,
};

export function UserReducer(
  state: State = initialState,
  action: UserAction.UserActions
): State {
  switch (action.type) {
    case UserAction.FETCH_USER:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case UserAction.FETCH_SECTIONS_BY_USER_ID:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.SET_SECTIONS_BY_USER_ID:
      return {
        ...state,
        userSections: action.payload,
        isLoading: false,
      };

    case UserAction.FETCH_SAVED_SECTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.SET_SAVED_SECTIONS:
      return {
        ...state,
        savedSections: action.payload,
        isLoading: false,
      };

    case UserAction.FETCH_LIKED_SECTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.SET_LIKED_SECTIONS:
      return {
        ...state,
        LikedSections: action.payload,
        isLoading: false,
      };

    case UserAction.FETCH_COMMENTED_SECTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case UserAction.SET_COMMENTED_SECTIONS:
      return {
        ...state,
        CommentedSections: action.payload,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
}
