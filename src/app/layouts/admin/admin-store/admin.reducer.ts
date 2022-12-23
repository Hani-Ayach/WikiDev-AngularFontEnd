import { Category } from '../../Model/Category';
import { CountSectionByCategory } from '../../Model/CountSectionByCategory';
import { Register } from '../../Model/Register';
import { Section } from '../../Model/Section';
import { User } from '../../Model/User';
import * as AdminAction from './admin.action';

export interface State {
  sections: Section[];
  users: User[];
  adminUser: User;
  requests: Register[];
  categories: Category[];
  countOfSectionsPerCategory: CountSectionByCategory[];
  countOfSections: number;
  countOfComments: number;
  countOfSaves: number;
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
  countOfSaves: 0,
  mostLikedSection: {} as any,
  isLoading: false,
  errorMessage: '',
};

export function AdminReducer(
  state: State = initialState,
  action: AdminAction.AdminActions
): State {
  switch (action.type) {
    case AdminAction.FETCH_SECTIONS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_SECTIONS:
      var countOfSection = action.payload.length;
      let countOfSectionByCategory = [...state.countOfSectionsPerCategory];
      countOfSectionByCategory = [];
      state.categories.forEach((category) => {
        var sectionByCategory = action.payload.filter(
          (section) => section.category.id == category.id
        );
        countOfSectionByCategory = [
          ...countOfSectionByCategory,
          new CountSectionByCategory(sectionByCategory.length, category),
        ];
      });

      let max = 0;
      var mostLikedSection = state.sections[0];
      action.payload.forEach((section) => {
        if (section.countOfLikes > max) {
          max = section.countOfLikes;
          mostLikedSection = section;
        }
        console.log(section);
      });

      return {
        ...state,
        sections: action.payload,
        countOfSections: countOfSection,
        countOfSectionsPerCategory: countOfSectionByCategory,
        mostLikedSection: mostLikedSection,
        isLoading: false,
      };
    case AdminAction.ADD_SECTION:
      let category = state.categories.find(
        (categ) => categ.id == action.payload.CategoryId
      );
      return {
        ...state,
        sections: [
          ...state.sections,
          new Section(
            0,
            action.payload.Title,
            action.payload.Description,
            action.payload.CodeBlock,
            category ? category : ({} as any),
            '',
            '',
            '',
            new Date(),
            0,
            [''],
            [''],
            0,
            [],
            ['']
          ),
        ],
      };
    case AdminAction.REMOVE_SECTION:
      let sections = state.sections.filter(
        (section) => section.id != action.payload
      );
      return {
        ...state,
        sections: sections,
      };
    case AdminAction.EDIT_SECTION:
      return {
        ...state,
      };
    //
    case AdminAction.REMOVE_COMMENT:
      let modifiedSection = state.sections.find((section) => {
        return section.comments.find((comm: any) => comm.id == action.payload);
      });
      let sectionAfterRemoveComment = modifiedSection?.comments.filter(
        (comment: any) => {
          return comment.id != action.payload;
        }
      );
      console.log(sectionAfterRemoveComment);

      var sectionsAfterModify = state.sections.map((section) => {
        if (section.id == modifiedSection?.id) {
          return { ...section, comments: sectionAfterRemoveComment };
        }
        return section;
      });

      return {
        ...state,
        sections: sectionsAfterModify,
      };
    //
    case AdminAction.FETCH_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case AdminAction.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case AdminAction.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case AdminAction.REMOVE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories.filter((c) => c.id != action.payload)],
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
        requests: [
          ...state.requests.filter((reque) => reque.id != action.payload),
        ],
      };
    case AdminAction.REJECT_REQUEST:
      return {
        ...state,
        requests: [
          ...state.requests.filter((reque) => reque.id != action.payload),
        ],
      };
    case AdminAction.REJECT_ALL_REQUESTS:
      return {
        ...state,
        requests: [],
      };
    //
    case AdminAction.FETCH_COUNT_OF_LIKES:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_COUNT_OF_LIKES:
      return {
        ...state,
        countOfLikes: action.payload,
        isLoading: false,
      };
    case AdminAction.FETCH_COUNT_OF_COMMENTS:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_COUNT_OF_COMMENTS:
      return {
        ...state,
        countOfComments: action.payload,
        isLoading: false,
      };
    case AdminAction.FETCH_COUNT_OF_SAVES:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_COUNT_OF_SAVES:
      return {
        ...state,
        countOfSaves: action.payload,
        isLoading: false,
      };
    case AdminAction.FETCH_COUNT_OF_USERS:
      console.log('how');

      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case AdminAction.SET_COUNT_OF_USERS:
      console.log('how');

      return {
        ...state,
        countOfUsers: action.payload,
        isLoading: false,
      };
    //
    case AdminAction.ASSIGN_TO_ROLE:
      return {
        ...state,
      };
    //
    case AdminAction.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
