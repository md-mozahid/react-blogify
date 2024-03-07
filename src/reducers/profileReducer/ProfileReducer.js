import { ProfileActions } from "./ProfileActions";

const { DATA_FETCHING, DATA_FETCHED, DATA_FETCH_ERROR, IMAGE_UPDATED } =
  ProfileActions.profile;

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

    case IMAGE_UPDATED: {
      return {
        ...state,
        loading: false,
        user: {
          ...state,
          avatar: action.data?.avatar,
        },
      };
    }

    default:
      return state;
  }
};

export { profileReducer, initialState };
