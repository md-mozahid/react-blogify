import { actions } from "../actions";

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  IMAGE_UPDATED,
  USER_DATA_EDITED,
} = actions.profile;

const initialState = {
  user: null,
  blogs: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        user: action.data,
        blogs: action.data.blogs,
      };
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case USER_DATA_EDITED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          bio: action.data.user.bio,
        },
      };
    }

    case IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }

    default:
      return state;
  }
};

export { initialState, profileReducer };
