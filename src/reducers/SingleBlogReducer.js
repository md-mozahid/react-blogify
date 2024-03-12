import { actions } from "../actions";

const {
  DATA_FETCHING,
  DATA_FETCHED,
  DATA_FETCH_ERROR,
  BLOG_COMMENTED,
  BLOG_COMMENTED_ERROR,
  // BLOG_DELETED,
  // BLOG_LIKED,
} = actions.blog;

const initialState = {
  blog: [],
  loading: false,
  error: null,
};

const singleBlogReducer = (state, actions) => {
  switch (actions.type) {
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
        blog: actions.data,
      };
    }

    case DATA_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error,
      };
    }

    case BLOG_COMMENTED: {
      return {
        ...state,
        loading: true,
        blog: {
          ...state.blog,
          comments: actions.data.comments,
        },
      };
    }

    case BLOG_COMMENTED_ERROR: {
      return {
        ...state,
        loading: false,
        error: actions.error,
      };
    }

    default:
      return state;
  }
};

export { initialState, singleBlogReducer };