import { Category } from '../../Model/Category';
import { CountSectionByCategory } from '../../Model/CountSectionByCategory';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as AdminAction from './admin.action';

export interface State {
  sections: Section[];
  users: User[];
  adminUser: User;
  requests: Request[];
  categories: Category[];
  countOfSectionsPerCategory: CountSectionByCategory[];
  countOfSections: number;
  countOfComments: number;
  countOfLikes: number;
  countOfUsers: number;
  mostLikedSection: Section;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  sections: [],
  users: [],
  adminUser: {} as any,
  requests: [],
  categories: [],
  countOfSectionsPerCategory: [],
  countOfSections: 0,
  countOfComments: 0,
  countOfLikes: 0,
  countOfUsers: 0,
  mostLikedSection: {} as any,
  isLoading: false,
  errorMessage: '',
};

export function AdminReducer(
  state: State = initialState,
  action: AdminAction.AdminActions
) {
  switch (action.type) {
    case AdminAction.FETCH_SECTIONS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_SECTIONS:
      return {
        ...state,
        sections: action.payload,
        isLoading: false,
      };
    case AdminAction.ADD_SECTION:
      return {
        ...state,
        sections: [...state.sections, action.payload],
      };
    case AdminAction.REMOVE_SECTION:
      return {
        ...state,
      };
    case AdminAction.EDIT_SECTION:
      return {
        ...state,
      };
    //
    case AdminAction.FETCH_USERS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case AdminAction.REMOVE_USER:
      return {
        ...state,
      };
    //
    case AdminAction.FETCH_USER_ADMIN:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_USER_ADMIN:
      return {
        ...state,
        adminUser: action.payload,
        isLoading: false,
      };
    //
    case AdminAction.FETCH_REQUESTS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        isLoading: false,
      };
    case AdminAction.ACCEPT_REQUEST:
      return {
        ...state,
      };
    case AdminAction.REJECT_REQUEST:
      return {
        ...state,
      };
    case AdminAction.REJECT_ALL_REQUESTS:
      return {
        ...state,
      };

      //
      case AdminAction.STOP_LOADING:
        return{
          ...state,
          isLoading:false,
          errorMessage: action.payload,
        };
      default:
        return {
          ...state,
        };
  }
}
