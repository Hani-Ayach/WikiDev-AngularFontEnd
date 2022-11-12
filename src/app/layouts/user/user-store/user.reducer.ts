import { Section } from '../../Model/Section';
import { SectionComment } from '../../Model/SectionComment';
import { User } from '../../Model/User';
import * as UserAction from './user.action';
export interface State {
  user: User;
  sections: Section[] | any;
  userSections: Section[];
  savedSections: Section[];
  CommentedSections: Section[] | any;
  LikedSections: Section[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  user: {} as any,
  sections: [],
  userSections: [],
  savedSections: [],
  CommentedSections: [],
  LikedSections: [],
  isLoading: false,
  errorMessage: '',
};

export function userReducer(
  state: State = initialState,
  action: UserAction.UserActions
): State {
  switch (action.type) {
    case UserAction.FETCH_USER:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case UserAction.SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case UserAction.FETCH_SECTIONS:
      return {
        ...state,
        isLoading: true,
      };

    case UserAction.SET_SECTIONS:
      return {
        ...state,
        sections: [...state.sections, ...action.payload],
        isLoading: false,
      };
    case UserAction.FETCH_SECTIONS_BY_USER_ID:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
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
        errorMessage: '',
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
        errorMessage: '',
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
        errorMessage: '',
      };
    case UserAction.SET_COMMENTED_SECTIONS:
      return {
        ...state,
        CommentedSections: action.payload,
        isLoading: false,
      };

    case UserAction.ADD_LIKE:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload.sectionId
      );

      var sectionsEdited = state.sections.map((section: Section) => {
        if (section.id == sectionForEdit?.id) {
          console.log('sectionForEdit1');
          return {
            ...section,
            idOfUsersLikeThisSection: [
              ...section.idOfUsersLikeThisSection,
              action.payload.userId,
            ],
          };
        }
        return section;
      });
      console.log('sectionForEdit2');
      return {
        ...state,
        sections: sectionsEdited,
      };

    case UserAction.REMOVE_LIKE:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload.sectionId
      );

      var sectionsEdited = state.sections.map((section: Section) => {
        return {
          ...section,
          idOfUsersLikeThisSection: [
            section.idOfUsersLikeThisSection.filter(
              (id) => id != action.payload.userId
            ),
          ],
        };
      });

      var likedSectionEdited = state.LikedSections.filter((section) => {
        return section.id != action.payload.sectionId;
      });

      return {
        ...state,
        sections: sectionsEdited,
        LikedSections: likedSectionEdited,
      };
    case UserAction.ADD_TO_SAVE:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload.sectionId
      );

      var sectionsEdited = state.sections.map((section: Section) => {
        if (section.id == sectionForEdit?.id) {
          return {
            ...section,
            idOfUsersSaveThisSection: [
              ...section.idOfUsersSaveThisSection,
              action.payload.userId,
            ],
          };
        }
        return section;
      });

      return {
        ...state,
        sections: sectionsEdited,
      };

    case UserAction.REMOVE_FROM_SAVE:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload.sectionId
      );

      var sectionsEdited = state.sections.map((section: Section) => {
        if (section.id == sectionForEdit?.id) {
          return {
            ...section,
            idOfUsersSaveThisSection: [
              section.idOfUsersSaveThisSection.filter(
                (id) => id != action.payload.userId
              ),
            ],
          };
        }
        return section;
      });

      var savedSectionEdited = state.savedSections.filter((section) => {
        return section.id != action.payload.sectionId;
      });
      return {
        ...state,
        sections: sectionsEdited,
        savedSections: savedSectionEdited,
      };

    case UserAction.ADD_COMMENT:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload.sectionId
      );

      var sectionsEdited = state.sections.map((section: Section) => {
        if (section.id == sectionForEdit?.id) {
          console.log('11');
          return {
            ...section,
            comments: [
              ...section.comments,
              new SectionComment(
                0,
                action.payload.userId,
                action.payload.sectionId,
                action.payload.content,
                new Date()
              ),
            ],
          };
        }
        return section;
      });

      return {
        ...state,
        sections: sectionsEdited,
      };
    case UserAction.REMOVE_COMMENT:


      var commentedSectionsEdited = state.CommentedSections.map(
        (section: Section) => {
          if (section.id == action.payload.sectionId) {
            console.log('11');
            return {
              ...section,
              comments: [
                ...section.comments.filter(
                  (c) => c.id != action.payload.commentId
                ),
              ],
            };
          }
          return section;
        }
      );
console.log(commentedSectionsEdited)
      return {
        ...state,
        CommentedSections: commentedSectionsEdited,
      };

    case UserAction.ADD_SECTION:
      return {
        ...state,
      };
    case UserAction.EDIT_SECTION:
      return {
        ...state,
      };
    case UserAction.REMOVE_SECTION:
      var sectionForEdit = state.sections.find(
        (section: Section) => section.id == action.payload
      );

      var sectionUserEd = state.userSections.filter((section: Section) => {
        return section.id != action.payload;
      });
      return {
        ...state,
        userSections: sectionUserEd,
      };
    case UserAction.STOP_LOADING:
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
